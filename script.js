// Objeto que armazena os dados dos ingressos
const cart = {
    premium: { price: 640.00, count: 0 },
    camarote: { price: 1900.00, count: 0 }
};

// Função acionada ao clicar em (+) ou (-)
function updateCart(ticketId, amount) {
    // Altera a quantidade garantindo que não fique negativo
    let newCount = cart[ticketId].count + amount;
    if (newCount < 0) newCount = 0;
    
    cart[ticketId].count = newCount;

    // Atualiza o contador na tela
    document.getElementById(`qty-${ticketId}`).innerText = cart[ticketId].count;

    // Recalcula totais do carrinho fixo no rodapé
    calculateTotals();
}

function calculateTotals() {
    let totalQuantity = 0;
    let totalPrice = 0;

    // Soma tudo iterando pelo objeto
    for (let key in cart) {
        totalQuantity += cart[key].count;
        totalPrice += (cart[key].count * cart[key].price);
    }

    // Atualiza o Footer
    document.getElementById('cart-count').innerText = `${totalQuantity} ITENS`;
    
    // Formata valor para Reais
    document.getElementById('cart-total-price').innerText = totalPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Controla a exibição da barra inferior
    const cartFooter = document.getElementById('cart-footer');
    if (totalQuantity > 0) {
        cartFooter.classList.remove('hidden'); // Mostra a barra
    } else {
        cartFooter.classList.add('hidden'); // Esconde a barra
    }
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
}

// Eventos dos botões
document.getElementById("btn-localizacao").addEventListener("click", () => {
    scrollToSection("localizacao");
});

document.getElementById("btn-pdv").addEventListener("click", () => {
    scrollToSection("pdv");
});

document.getElementById("btn-info").addEventListener("click", () => {
    scrollToSection("info");
});