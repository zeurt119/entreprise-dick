'use strict';
(() => {
 const dialog=document.querySelector('#project-dialog');
 const trigger=document.querySelector('#project-trigger');
 let activeTrigger=trigger;
 const contexts={general:{title:'De la place pour<br><em>votre projet.</em>',context:'Présentez votre besoin de débarras ou de déblaiement.',label:'Description du projet *',help:'Précisez le lieu, l’accès et ce qui est à enlever.'},debarras:{title:'Parlons de votre<br><em>débarras.</em>',context:'Un projet de débarras : décrivez ce que vous souhaitez faire enlever.',label:'Description du débarras *',help:'Précisez les objets et encombrants, le lieu et les conditions d’accès.'},deblaiement:{title:'Parlons de votre<br><em>déblaiement.</em>',context:'Un projet de déblaiement : décrivez l’espace à dégager.',label:'Description du déblaiement *',help:'Précisez l’espace à dégager, ce qui est à enlever, le lieu et l’accès.'}};
 function openProject(button,type){const c=contexts[type];activeTrigger=button;document.querySelector('#dialog-title').innerHTML=c.title;document.querySelector('#project-context').textContent=c.context;document.querySelector('label[for=project-description]').textContent=c.label;document.querySelector('#description-help').textContent=c.help;document.querySelector('#project-type').value=type;dialog.showModal();document.body.classList.add('modal-open');document.querySelector('#project-email').focus();}
 const form=document.querySelector('#project-form');
 const status=document.querySelector('#form-status');
 const choice=document.querySelector('#budget-choice');
 const budget=document.querySelector('#project-budget');
 const budgetField=document.querySelector('#budget-field');
 const fields=[['project-email','email-error'],['project-phone','phone-error'],['project-description','description-error'],['project-budget','budget-error']];
 function clearErrors(){fields.forEach(([id,error])=>{document.getElementById(id).removeAttribute('aria-invalid');document.getElementById(error).textContent='';});status.textContent='';}
 trigger.addEventListener('click',()=>openProject(trigger,'general'));
 document.querySelectorAll('.service-trigger').forEach(button=>button.addEventListener('click',()=>openProject(button,button.dataset.project)));
 dialog.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const items=[...dialog.querySelectorAll('button,input,textarea,select')].filter(el=>!el.disabled&&el.getClientRects().length);const first=items[0],last=items[items.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});
 document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');form.reset();budgetField.hidden=true;budget.required=false;clearErrors();activeTrigger.focus();});
 choice.addEventListener('change',()=>{const explicit=choice.value==='amount';budgetField.hidden=!explicit;budget.required=explicit;if(!explicit){budget.value='';budget.removeAttribute('aria-invalid');document.querySelector('#budget-error').textContent='';}status.textContent='';});
 form.addEventListener('input',()=>{status.textContent='';});
 form.addEventListener('submit',event=>{event.preventDefault();clearErrors();let first=null;
 const messages={
 'project-email':()=>!document.querySelector('#project-email').value.trim()?'Indiquez votre adresse e-mail.':!document.querySelector('#project-email').validity.valid?'Saisissez une adresse e-mail valide.':'',
 'project-phone':()=>{const v=document.querySelector('#project-phone').value.trim();return !v?'Indiquez votre numéro de téléphone.':! /^[+()\d\s.\/-]+$/.test(v)||v.replace(/\D/g,'').length<6||v.replace(/\D/g,'').length>15?'Saisissez un numéro de téléphone valide.':'';},
 'project-description':()=>!document.querySelector('#project-description').value.trim()?'Décrivez votre projet.':'',
 'project-budget':()=>choice.value==='amount'&&(!budget.value||!budget.validity.valid)?'Indiquez un montant positif ou nul, avec deux décimales au maximum.':''
 };
 fields.forEach(([id,error])=>{const message=messages[id]();if(message){const el=document.getElementById(id);el.setAttribute('aria-invalid','true');document.getElementById(error).textContent=message;if(!first)first=el;}});
 if(first){status.textContent='Vérifiez les champs signalés. Aucun message n’a été envoyé.';first.focus();return;}
 status.textContent='Les champs sont valides pour cette démonstration. Aucune demande n’est envoyée : cette page est un test sans destinataire.';
 });
})();
