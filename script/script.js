function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartsName = cart.map(cart => cart.name);

let total = 0;
let prices = document.getElementById('prices');

function displayCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartItemsDiv = document.getElementById('cartItems');
        
        if (cart.length === 0) {
            cartItemsDiv.innerHTML = '<p>Корзина пуста.</p>';
            return;
        }
        cart.forEach((item, index) => {
            cartItemsDiv.innerHTML += 
                '<div class="cartItem"><h2>'+item.name+'</h2><p>Цена:'+item.price+'руб.</p>';
                total += item.price;
        });
        
        prices.innerHTML = `Итоговая сумма корзины: <b>${total}</b> руб.`;
    }

function clearCart() {
            prices.innerHTML = `Итоговая сумма корзины: <b>0</b> руб.`;
            localStorage.removeItem('cart');
            displayCart();
}

function openWhatsApp() {
            const phoneNumber = '375333575587'; // Замените на нужный номер телефона
            const message = `${cartsName}`; // Сообщение по умолчанию
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

 function openTelegram() {
            const username = 'PaytonMourmaier'; // Замените на ваш Telegram username (без @)
            const message = `${cartsName}`; // Сообщение по умолчанию
            const url = `https://t.me/${username}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }