async page => {
  const base='http://127.0.0.1:5502/';
  await page.goto(base+'index.html');
  await page.setViewportSize({width:320,height:740});
  await page.screenshot({path:'output/playwright/mobile-320.png'});
  await page.getByRole('button',{name:'Faire de la place',exact:true}).click();
  await page.screenshot({path:'output/playwright/mobile-320-cleared.png',animations:'disabled'});
  await page.getByRole('button',{name:'Revoir les cartons'}).click();
  await page.setViewportSize({width:1440,height:960});
  await page.getByRole('link',{name:'Notre activité',exact:true}).click();
  await page.screenshot({path:'output/playwright/services-desktop.png'});
  await page.getByRole('link',{name:'Contacter l’entreprise',exact:true}).click();
  await page.getByRole('button',{name:'Afficher Google Maps'}).click();
  const frame=page.frameLocator('#location-map');
  let embedded='';
  try { await frame.getByText('Agrandir le plan',{exact:false}).first().waitFor({timeout:15000}); } catch {}
  embedded=await frame.locator('body').innerText();
  await page.screenshot({path:'output/playwright/map-loaded.png'});
  const [mapPage]=await Promise.all([page.context().waitForEvent('page'),page.getByRole('link',{name:'Ouvrir Google Maps',exact:true}).click()]);
  await mapPage.waitForLoadState('domcontentloaded');
  const reject=mapPage.getByRole('button',{name:'Tout refuser',exact:true});
  if(await reject.count()) await reject.click();
  await mapPage.waitForLoadState('domcontentloaded');
  await mapPage.locator('body').waitFor({state:'visible'});
  await mapPage.screenshot({path:'output/playwright/maps-verified.png'});
  const external={url:mapPage.url(),title:await mapPage.title(),text:(await mapPage.locator('body').innerText()).slice(0,1600)};
  await mapPage.close();
  await page.getByRole('button',{name:'Masquer la carte'}).click();
  await page.getByRole('link',{name:'Retour en haut ↑'}).click();
  const structure=await page.evaluate(()=>({
    missingAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash),
    externalScripts:[...document.scripts].map(s=>s.src).filter(s=>s && !s.startsWith(location.origin)),
    inputs:[...document.querySelectorAll('button,input,select,textarea')].filter(e=>e.getClientRects().length).map(e=>({name:e.getAttribute('aria-label')||e.textContent.trim(),height:e.getBoundingClientRect().height})),
    resources:performance.getEntriesByType('resource').filter(e=>e.name.startsWith(location.origin)).map(e=>({name:e.name,duration:e.duration}))
  }));
  await page.goto(base+'mentions-legales.html');
  await page.setViewportSize({width:375,height:812});
  await page.screenshot({path:'output/playwright/legal-mobile.png',fullPage:true});
  await page.goto(base+'index.html');
  await page.setViewportSize({width:1440,height:960});
  return {embedded,external,structure};
}
