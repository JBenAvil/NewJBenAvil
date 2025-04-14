function sendWhatsAppMessage(titulo, precio, ) {
    // Construye el mensaje con la información de la tarjeta y el enlace de la imagen
    const mensaje = `Hola, estoy interesado en el servicio de: ${titulo} \nPrecio: ${precio}`;
  
    // Codifica el mensaje para usarlo en el enlace de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);
  
    // Número de WhatsApp del vendedor
    const numeroWhatsApp = "+56921951687";
  
    // Crea el enlace completo para WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
  
    // Abre el enlace de WhatsApp en una nueva pestaña
    window.open(urlWhatsApp, '_blank');
  }
  