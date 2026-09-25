
const btn=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
if(btn) btn.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const form=document.querySelector('#enquiryForm');
if(form){
 form.addEventListener('submit',e=>{
   e.preventDefault();
   const n=document.querySelector('#name').value.trim(), p=document.querySelector('#phone').value.trim(),
         d=document.querySelector('#details').value.trim();
   const msg=`Hello DC Travellers, I would like to enquire about a journey.%0A%0AName: ${encodeURIComponent(n)}%0APhone: ${encodeURIComponent(p)}%0ADetails: ${encodeURIComponent(d)}`;
   window.open('https://wa.me/919888879781?text='+msg,'_blank');
 });
}
