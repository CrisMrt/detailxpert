document.querySelectorAll('.ba').forEach(el=>{
  const r=el.querySelector('input'),t=el.querySelector('.top');
  const set=()=>{t.style.clipPath=`inset(0 ${100-r.value}% 0 0)`;el.style.setProperty('--p',r.value+'%')};
  r.addEventListener('input',set);set();
});
const burger=document.querySelector('.burger'),menu=document.getElementById('menu');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded',false)}));
