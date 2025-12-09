function enviarWhatsApp(nomeProduto, referencia) {
    // SUBSTITUA PELO SEU NÚMERO DE WHATSAPP (com código do país, sem + ou espaços)
    // Exemplo: 5511999999999 (55 = Brasil, 11 = DDD, 999999999 = número)
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
