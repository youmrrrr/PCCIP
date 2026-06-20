document.addEventListener('DOMContentLoaded', () => {
    
    // Обработка формы отправки заказа
    const orderForm = document.getElementById('orderForm');
    
    if (orderForm) {
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const formData = new FormData(orderForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const region = formData.get('region');
            
            if (!name || !phone || !region) {
                alert('Пожалуйста, заполните все обязательные поля (*).');
                return;
            }
            
            alert(`Спасибо за заказ, ${name}! Мы свяжемся с вами по телефону: ${phone}.`);
            orderForm.reset();
        });
    }

    // Обработка кликов на иконки карточки товара
    const favBtn = document.getElementById('favBtn');
    const cartBtn = document.getElementById('cartBtn');

    if (favBtn) {
        favBtn.addEventListener('click', () => {
            favBtn.classList.toggle('active-fav');
            if (favBtn.classList.contains('active-fav')) {
                favBtn.textContent = '♥';
                console.log('Добавлено в избранное');
            } else {
                favBtn.textContent = '♡';
                console.log('Удалено из избранного');
            }
        });
    }

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartBtn.classList.toggle('active-cart');
            if (cartBtn.classList.contains('active-cart')) {
                alert('Товар добавлен в корзину!');
            } else {
                alert('Товар удален из корзины.');
            }
        });
    }
});