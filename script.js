function enviarWhatsApp(nomeProduto, referencia) {
    
    const numeroWhatsApp = '5533998288837';
    
    // Mensagem personalizada que será enviada
    const mensagem = `Olá! Gostaria de saber mais sobre o produto:\n\n*${nomeProduto}*\nReferência: ${referencia}\n\nPoderia me enviar mais informações?`;
    
    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Cria o link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(linkWhatsApp, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const btnPrev = document.querySelector('.btn-esq');
  const btnNext = document.querySelector('.btn-dir');
  if (!slides.length || !btnPrev || !btnNext) return;

  let index = slides.findIndex(s => s.classList.contains('active'));
  if (index < 0) index = 0;

  function showSlide(i) {
    slides.forEach((s, idx) => {
      const active = idx === i;
      s.classList.toggle('active', active);
      s.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
  }

  btnPrev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slides.length - 1;
    showSlide(index);
    resetAutoplay();
  });

  btnNext.addEventListener('click', () => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    showSlide(index);
    resetAutoplay();
  });


  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') btnPrev.click();
    if (e.key === 'ArrowRight') btnNext.click();
  });


  let autoplay = setInterval(next, 4500);
  function next() { index = (index + 1) % slides.length; showSlide(index); }

  function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(next, 4500);
  }

  const carrossel = document.querySelector('.carrossel');
  carrossel.addEventListener('mouseenter', () => clearInterval(autoplay));
  carrossel.addEventListener('mouseleave', () => { autoplay = setInterval(next, 4500); });
});
