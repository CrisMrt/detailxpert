document.querySelectorAll('.ba').forEach(el=>{
  const r=el.querySelector('input'),t=el.querySelector('.top');
  const set=()=>{t.style.clipPath=`inset(0 ${100-r.value}% 0 0)`;el.style.setProperty('--p',r.value+'%')};
  r.addEventListener('input',set);set();
});
