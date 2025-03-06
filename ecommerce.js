// Cargar el JSON y mostrar los productos
fetch('public/products.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h6>${product.name}</h6>
        <p>$${product.details.price.toLocaleString('es-CL')}</p>
        <a href="producto.html?id=${product.id}">
          <button>Ver más</button>
        </a>
      `;
      productList.appendChild(card);
    });
  });

// Crear enlace de WhatsApp dinámico
const whatsappNumber = "56921951687"; // Número de WhatsApp sin el signo "+"
const message = `Hola, quiero comprar ${product.name} que cuesta $${product.details.price.toLocaleString('es-CL')}.`;
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

// Insertar el enlace en el botón
document.getElementById("whatsapp-btn").href = whatsappLink;

