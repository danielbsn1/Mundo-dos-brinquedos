function enviarWhatsApp(nomeProduto, referencia) {
    const numeroWhatsApp = '5533998288837';
    const mensagem = `Olá! Gostaria de saber mais sobre o produto:\n\n*${nomeProduto}*\nReferência: ${referencia}\n\nPoderia me enviar mais informações?`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(linkWhatsApp, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const btnPrev = document.querySelector('.btn-esq');
  const btnNext = document.querySelector('.btn-dir');
  if (!slides.length) return;

  let index = slides.findIndex(s => s.classList.contains('active'));
  if (index < 0) index = 0;

  function show(i){
    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === i);
      const v = s.querySelector('video');
      if (v) {
        if (idx === i) v.play().catch(()=>{});
        else { v.pause(); v.currentTime = 0; }
      }
    });
  }

  btnPrev && btnPrev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slides.length - 1;
    show(index);
    resetAuto();
  });

  btnNext && btnNext.addEventListener('click', () => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    show(index);
    resetAuto();
  });

  // touch swipe
  let startX = 0;
  const container = document.querySelector('.carrossel');
  if (container) {
    container.addEventListener('touchstart', e => startX = e.changedTouches[0].clientX);
    container.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 50) btnPrev && btnPrev.click();
      if (startX - endX > 50) btnNext && btnNext.click();
    });
  }

  // autoplay
  let autoplay = setInterval(() => { index = (index + 1) % slides.length; show(index); }, 6000);
  function resetAuto() {
    clearInterval(autoplay);
    autoplay = setInterval(() => { index = (index + 1) % slides.length; show(index); }, 6000);
  }

  container && container.addEventListener('mouseenter', () => clearInterval(autoplay));
  container && container.addEventListener('mouseleave', () => resetAuto());
});
