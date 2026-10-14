const f=document.getElementById('pedido'),est=document.getElementById('estado');
const PARA='geral@detailxpert.pt';
f.addEventListener('submit',e=>{
  e.preventDefault();
  est.className='';
  if(!f.checkValidity()){f.reportValidity();return}
  const v=n=>f.elements[n].value.trim();
  const corpo=`Nome: ${v('nome')} ${v('apelido')}\nContacto: ${v('contacto')}\nEmail: ${v('email')}\n\nMensagem:\n${v('mensagem').slice(0,1500)}`;
  const assunto=`Pedido de avaliação — ${v('nome')} ${v('apelido')}`;
  const url=`mailto:${PARA}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  est.innerHTML=`A abrir a sua aplicação de email… carregue em <b>Enviar</b> nessa janela. Se não abrir, escreva-nos para <a href="mailto:${PARA}">${PARA}</a>.`;
  est.className='ok';
  window.location.href=url;
});
