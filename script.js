'use strict';

/* All form data stays in memory. No network submission or browser storage. */
(() => {
  const dialog = document.querySelector('#project-dialog');
  if (!dialog) return;
  const form = document.querySelector('#project-form');
  const status = document.querySelector('#form-status');
  const choice = document.querySelector('#budget-choice');
  const budget = document.querySelector('#project-budget');
  const budgetField = document.querySelector('#budget-field');
  let activeTrigger;
  const contexts = {
    general: { title: 'De la place pour votre projet.', context: 'Présentez votre besoin de débarras ou de déblaiement.', label: 'Description du projet *', help: 'Précisez le lieu, l’accès et ce qui est à enlever.' },
    debarras: { title: 'Parlons de votre débarras.', context: 'Un projet de débarras : décrivez ce que vous souhaitez faire enlever.', label: 'Description du débarras *', help: 'Précisez les objets et encombrants, le lieu et les conditions d’accès.' },
    deblaiement: { title: 'Parlons de votre déblaiement.', context: 'Un projet de déblaiement : décrivez l’espace à dégager.', label: 'Description du déblaiement *', help: 'Précisez l’espace à dégager, ce qui est à enlever, le lieu et l’accès.' }
  };
  const fields = [
    ['project-email', 'email-error'],
    ['project-phone', 'phone-error'],
    ['project-description', 'description-error'],
    ['project-budget', 'budget-error']
  ];
  function clearErrors() {
    fields.forEach(([id, error]) => {
      document.getElementById(id).removeAttribute('aria-invalid');
      document.getElementById(error).textContent = '';
    });
    status.textContent = '';
  }
  function openProject(button, type) {
    const content = contexts[type] || contexts.general;
    activeTrigger = button;
    document.querySelector('#dialog-title').textContent = content.title;
    document.querySelector('#project-context').textContent = content.context;
    document.querySelector('label[for=project-description]').textContent = content.label;
    document.querySelector('#description-help').textContent = content.help;
    document.querySelector('#project-type').value = type;
    dialog.showModal();
    document.body.classList.add('modal-open');
    document.querySelector('#project-email').focus();
  }
  const trigger = document.querySelector('#project-trigger');
  trigger.addEventListener('click', () => openProject(trigger, 'general'));
  document.querySelectorAll('.service-trigger').forEach(button => {
    button.addEventListener('click', () => openProject(button, button.dataset.project));
  });
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const items = [...dialog.querySelectorAll('button,input,textarea,select')]
      .filter(element => !element.disabled && element.getClientRects().length);
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    form.reset();
    budgetField.hidden = true;
    budget.required = false;
    clearErrors();
    activeTrigger?.focus();
  });
  choice.addEventListener('change', () => {
    const explicit = choice.value === 'amount';
    budgetField.hidden = !explicit;
    budget.required = explicit;
    if (!explicit) {
      budget.value = '';
      budget.removeAttribute('aria-invalid');
      document.querySelector('#budget-error').textContent = '';
    }
    status.textContent = '';
  });
  form.addEventListener('input', () => { status.textContent = ''; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    clearErrors();
    let first = null;
    const email = document.querySelector('#project-email');
    const phone = document.querySelector('#project-phone').value.trim();
    const description = document.querySelector('#project-description').value.trim();
    const messages = {
      'project-email': !email.value.trim() ? 'Indiquez votre adresse e-mail.' : !email.validity.valid ? 'Saisissez une adresse e-mail valide.' : '',
      'project-phone': !phone ? 'Indiquez votre numéro de téléphone.' : !/^[+()\d\s.\/-]+$/.test(phone) || phone.replace(/\D/g, '').length < 6 || phone.replace(/\D/g, '').length > 15 ? 'Saisissez un numéro de téléphone valide.' : '',
      'project-description': !description ? 'Décrivez votre projet.' : '',
      'project-budget': choice.value === 'amount' && (!budget.value || !budget.validity.valid) ? 'Indiquez un montant positif ou nul, avec deux décimales au maximum.' : ''
    };
    fields.forEach(([id, error]) => {
      if (!messages[id]) return;
      const element = document.getElementById(id);
      element.setAttribute('aria-invalid', 'true');
      document.getElementById(error).textContent = messages[id];
      first ||= element;
    });
    if (first) {
      status.textContent = 'Vérifiez les champs signalés. Aucun message n’a été envoyé.';
      first.focus();
      return;
    }
    status.textContent = 'Les champs sont valides pour cette démonstration. Aucune demande n’est envoyée : cette page est un test sans destinataire.';
  });
})();

/* Event-driven CSS 3D: no perpetual animation loop, no gyroscope. */
(() => {
  const scene = document.querySelector('#space-scene');
  const toggle = document.querySelector('#space-toggle');
  if (!scene || !toggle) return;
  const room = scene.querySelector('.room');
  const stage = scene.querySelector('.scene-stage');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 761px)');
  const lowPower = navigator.connection?.saveData || (navigator.deviceMemory && navigator.deviceMemory <= 2);
  let pendingFrame = 0;
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const clear = scene.classList.toggle('is-clear');
    toggle.setAttribute('aria-pressed', String(clear));
    toggle.firstChild.textContent = clear ? 'Revoir les cartons ' : 'Faire de la place ';
    document.querySelector('#scene-state').textContent = clear ? 'De nouvelles possibilités.' : 'Un espace à libérer.';
    stage.setAttribute('aria-label', clear ? 'Illustration en trois dimensions d’une pièce libérée de ses cartons, ouverte à de nouvelles possibilités.' : 'Illustration en trois dimensions d’une pièce lumineuse et de cartons à enlever.');
  });
  function reset() {
    cancelAnimationFrame(pendingFrame);
    pendingFrame = 0;
    room.style.removeProperty('transform');
  }
  stage.addEventListener('pointermove', event => {
    if (reduced.matches || !pointer.matches || lowPower) return;
    cancelAnimationFrame(pendingFrame);
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    pendingFrame = requestAnimationFrame(() => {
      room.style.transform = 'rotateX(' + (58 - y * 7) + 'deg) rotateZ(' + (-38 + x * 9) + 'deg)';
      pendingFrame = 0;
    });
  });
  stage.addEventListener('pointerleave', reset);
  reduced.addEventListener('change', reset);
  pointer.addEventListener('change', reset);
  document.addEventListener('visibilitychange', () => { if (document.hidden) reset(); });
})();

/* Preserve the original Maps URL verbatim; load Google only on explicit request. */
(() => {
  const load = document.querySelector('#load-map');
  if (!load) return;
  const hide = document.querySelector('#hide-map');
  const frame = document.querySelector('#location-map');
  const placeholder = document.querySelector('#map-placeholder');
  const status = document.querySelector('#map-status');
  load.hidden = false;
  load.addEventListener('click', () => {
    frame.src = frame.dataset.src;
    frame.hidden = false;
    placeholder.hidden = true;
    hide.hidden = false;
    status.textContent = 'Recherche de l’adresse fournie : emplacement exact à confirmer. Si la carte ne s’affiche pas, utilisez « Ouvrir Google Maps ».';
    hide.focus({ preventScroll: true });
  });
  hide.addEventListener('click', () => {
    frame.removeAttribute('src');
    frame.hidden = true;
    placeholder.hidden = false;
    hide.hidden = true;
    status.textContent = '';
    load.focus({ preventScroll: true });
  });
})();
