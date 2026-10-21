async (page) => {
  // Capture files trigger Live Server; remove only its injected script in this QA tab.
  await page.route('http://127.0.0.1:5502/**', async route => {
    const response = await route.fetch();
    if ((response.headers()['content-type'] || '').includes('text/html')) {
      const body = (await response.text()).replace(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/, '');
      await route.fulfill({response,body});
    } else await route.fulfill({response});
  });
  const results = [];
  const check = (name, condition, detail = '') => {
    results.push({name, pass: Boolean(condition), detail});
    if (!condition) throw new Error(name + ': ' + detail);
  };
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const base = 'http://127.0.0.1:5502/';
  await page.goto(base + 'output/before/index.html');
  await page.setViewportSize({width:1440,height:960});
  await page.screenshot({path:'output/playwright/before-desktop.png'});
  const originalMap = await page.locator('iframe').getAttribute('src');
  await page.goto(base + 'index.html');
  check('Original Maps URL retained in iframe', (await page.locator('#location-map').getAttribute('data-src')) === originalMap);
  check('External Maps uses same search without embed parameter', (await page.getByRole('link',{name:'Ouvrir Google Maps'}).getAttribute('href')) === originalMap.replace('&output=embed',''));
  check('No Google iframe request before activation', await page.locator('#location-map').getAttribute('src') === null);
  await page.getByRole('button',{name:'Faire de la place',exact:true}).click();
  check('Room clears', await page.locator('#space-toggle').getAttribute('aria-pressed') === 'true');
  await page.screenshot({path:'output/playwright/room-cleared.png',animations:'disabled'});
  await page.getByRole('button',{name:'Revoir les cartons'}).click();
  check('Room resets', await page.locator('#space-toggle').getAttribute('aria-pressed') === 'false');
  await page.getByRole('button',{name:'Parlons de votre projet',exact:true}).click();
  check('General dialog and email focus', await page.locator('#project-dialog').isVisible() && await page.locator('#project-email').evaluate(el => el === document.activeElement));
  await page.getByRole('button',{name:'Valider la démonstration'}).click();
  check('Empty form errors', await page.locator('[aria-invalid=true]').count() === 3);
  await page.locator('#project-email').fill('test');
  await page.locator('#project-phone').fill('abc');
  await page.locator('#project-description').fill('Débarras à Annemasse — accès à préciser. <img src=x onerror=alert(1)>');
  await page.getByRole('button',{name:'Valider la démonstration'}).click();
  check('Invalid email and phone rejected', await page.locator('[aria-invalid=true]').count() === 2);
  await page.locator('#project-email').fill('demo@example.com');
  await page.locator('#project-phone').fill('06 00 00 00 00');
  await page.locator('#budget-choice').selectOption('amount');
  await page.getByRole('button',{name:'Valider la démonstration'}).click();
  check('Explicit budget required', await page.locator('#project-budget').getAttribute('aria-invalid') === 'true');
  await page.locator('#project-budget').fill('-1');
  await page.getByRole('button',{name:'Valider la démonstration'}).click();
  check('Negative budget rejected', await page.locator('#project-budget').getAttribute('aria-invalid') === 'true');
  await page.locator('#project-budget').fill('0');
  await page.getByRole('button',{name:'Valider la démonstration'}).click();
  check('Valid demo, zero budget accepted', (await page.locator('#form-status').innerText()).includes('Les champs sont valides'));
  check('Input stays text', await page.locator('#project-dialog img').count() === 0);
  await page.screenshot({path:'output/playwright/form-valid.png'});
  await page.getByRole('button',{name:'Fermer le formulaire'}).focus();
  await page.keyboard.press('Shift+Tab');
  check('Focus trapped backwards', await page.locator('.form-submit').evaluate(el => el === document.activeElement));
  await page.keyboard.press('Tab');
  check('Focus trapped forwards', await page.locator('.dialog-close').evaluate(el => el === document.activeElement));
  await page.keyboard.press('Escape');
  check('Escape closes, clears, restores focus', !(await page.locator('#project-dialog').isVisible()) && (await page.locator('#project-email').inputValue()) === '' && await page.locator('#project-trigger').evaluate(el => el === document.activeElement));
  for (const [name,type] of [['Présenter un projet de débarras','debarras'],['Présenter un projet de déblaiement','deblaiement']]) {
    await page.getByRole('button',{name,exact:true}).click();
    check(type + ' context', await page.locator('#project-type').inputValue() === type);
    await page.getByRole('button',{name:'Fermer le formulaire'}).click();
  }
  for (const route of ['index.html','mentions-legales.html']) {
    await page.goto(base + route);
    check(route + ' one H1 and French', await page.locator('h1').count() === 1 && await page.locator('html').getAttribute('lang') === 'fr');
    for (const width of [320,375,390,520,768,1024,1440]) {
      await page.setViewportSize({width,height:900});
      check(route + ' overflow ' + width, await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), JSON.stringify(await page.evaluate(() => ({viewport:innerWidth,document:document.documentElement.scrollWidth}))));
    }
  }
  await page.goto(base + 'index.html');
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:'output/playwright/mobile-viewport.png'});
  await page.screenshot({path:'output/playwright/home-mobile.png',fullPage:true});
  await page.getByRole('button',{name:'Parlons de votre projet',exact:true}).click();
  await page.getByRole('button',{name:'Valider la démonstration'}).click();
  await page.screenshot({path:'output/playwright/form-mobile.png'});
  await page.keyboard.press('Escape');
  await page.setViewportSize({width:844,height:390});
  check('Landscape overflow', await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.getByRole('button',{name:'Faire de la place',exact:true}).click();
  check('Reduced motion no transition', await page.locator('.box-one').evaluate(el => getComputedStyle(el).transitionDuration) === '0s');
  await page.getByRole('button',{name:'Revoir les cartons'}).click();
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.setViewportSize({width:1440,height:960});
  await page.goto(base + 'index.html');
  await page.screenshot({path:'output/playwright/home-final.png',fullPage:true});
  await page.getByRole('button',{name:'Afficher Google Maps'}).click();
  check('Map activated with exact URL', await page.locator('#location-map').getAttribute('src') === originalMap && await page.locator('#location-map').isVisible());
  const mapFrame = page.frameLocator('#location-map');
  await mapFrame.locator('body').waitFor({state:'visible',timeout:15000});
  results.push({name:'Embedded Maps body',text:(await mapFrame.locator('body').innerText()).slice(0,1200)});
  await page.screenshot({path:'output/playwright/map-active.png'});
  await page.getByRole('button',{name:'Masquer la carte'}).click();
  check('Map removed on request', await page.locator('#location-map').getAttribute('src') === null);
  const [mapTab] = await Promise.all([page.context().waitForEvent('page'),page.getByRole('link',{name:'Ouvrir Google Maps'}).click()]);
  await mapTab.waitForLoadState('domcontentloaded').catch(() => {});
  check('External Maps is not embed error', !(await mapTab.locator('body').innerText()).includes('must be used in an iframe'));
  results.push({name:'Google Maps external destination',url:mapTab.url(),title:await mapTab.title(),text:(await mapTab.locator('body').innerText()).slice(0,1500)});
  await mapTab.screenshot({path:'output/playwright/maps-external.png'});
  await mapTab.close();
  await page.getByRole('link',{name:'Mentions légales',exact:true}).click();
  check('Legal navigation', page.url().endsWith('mentions-legales.html'));
  await page.screenshot({path:'output/playwright/legal-desktop.png',fullPage:true});
  await page.getByRole('link',{name:'Retour à l’accueil'}).first().click();
  check('Return to home', page.url().endsWith('index.html'));
  check('No JavaScript errors', errors.length === 0, errors.join('; '));
  return {date:'2026-10-19',results,errors};
}
