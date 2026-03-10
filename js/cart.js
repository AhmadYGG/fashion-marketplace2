function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
    let cart = getCart();
    
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += product.quantity || 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity || 1,
            image: product.image
        });
    }
    
    saveCart(cart);
    updateCartBadge();
    showNotification(`${product.name} ditambahkan ke keranjang!`);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartBadge();
    renderCart();
}

function updateQuantity(productId, newQuantity) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart(cart);
            updateCartBadge();
            renderCart();
        }
    }
}

function calculateTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartBadge() {
    const count = getCartCount();
    const badge = document.getElementById('cart-badge');
    
    if (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
}

function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cart-container');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <div class="empty-icon">🛒</div>
                <h3>Keranjang Anda Kosong</h3>
                <p>Belum ada produk yang ditambahkan ke keranjang</p>
                <a href="index.html" class="empty-state-btn">Mulai Belanja</a>
            </div>
        `;
        document.querySelector('.cart-summary-card').style.display = 'none';
        return;
    }
    
    let html = '';
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        html += `
            <div class="cart-item-card">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <input type="number" value="${item.quantity}" onchange="updateQuantity(${item.id}, parseInt(this.value))" class="qty-input" min="1">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-item-subtotal">
                    <p>Rp ${subtotal.toLocaleString('id-ID')}</p>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        `;
    });
    
    container.innerHTML = html;
    updateCartSummary();
}

function updateCartSummary() {
    const cart = getCart();
    const summaryContainer = document.getElementById('cart-summary-items');
    
    if (!summaryContainer) return;
    
    let total = 0;
    let html = '';
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        html += `
            <div class="summary-item">
                <span class="summary-item-name">${item.name}</span>
                <span class="summary-item-qty">x${item.quantity}</span>
                <span class="summary-item-price">Rp ${subtotal.toLocaleString('id-ID')}</span>
            </div>
        `;
    });
    
    summaryContainer.innerHTML = html;
    
    const totalElement = document.getElementById('cart-total-amount');
    if (totalElement) {
        totalElement.textContent = 'Rp ' + total.toLocaleString('id-ID');
    }
}

function showNotification(message) {
    alert(message);
}

function renderCheckoutItems() {
    const cart = getCart();
    const itemsContainer = document.getElementById('checkout-items');
    
    if (!itemsContainer) return;
    
    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p style="text-align: center; padding: 20px;">Keranjang Anda kosong. <a href="index.html">Lanjut belanja</a></p>';
        return;
    }
    
    let html = '';
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        html += `
            <div class="checkout-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="checkout-item-info">
                    <h4>${item.name}</h4>
                    <p class="checkout-item-price">Rp ${item.price.toLocaleString('id-ID')}</p>
                    <p class="checkout-item-qty">x${item.quantity}</p>
                </div>
                <div class="checkout-item-subtotal">
                    <p>Rp ${subtotal.toLocaleString('id-ID')}</p>
                </div>
            </div>
        `;
    });
    
    itemsContainer.innerHTML = html;
}

function renderCheckoutSummary() {
    const cart = getCart();
    const summaryContainer = document.getElementById('checkout-summary-items');
    
    if (!summaryContainer) return;
    
    let html = '';
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        html += `
            <div class="summary-item">
                <span class="summary-item-name">${item.name}</span>
                <span class="summary-item-qty">x${item.quantity}</span>
                <span class="summary-item-price">Rp ${subtotal.toLocaleString('id-ID')}</span>
            </div>
        `;
    });
    
    summaryContainer.innerHTML = html;
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartBadge();
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    
    if (document.getElementById('cart-container')) {
        renderCart();
    }
    
    if (document.getElementById('checkout-items')) {
        renderCheckoutItems();
        renderCheckoutSummary();
        const total = calculateTotal();
        const totalElement = document.getElementById('checkout-total');
        if (totalElement) {
            totalElement.textContent = 'Rp ' + total.toLocaleString('id-ID');
        }
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .qty-btn {
        background-color: #ff69b4;
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
    }
    
    .qty-btn:hover {
        background-color: #ff1493;
    }
    
    .qty-input {
        width: 50px;
        text-align: center;
        border: 2px solid #ffc0cb;
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
    }
    
    .qty-input:focus {
        outline: none;
        border-color: #ff69b4;
    }
    
    .remove-btn {
        background-color: #ff6b6b;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }
    
    .remove-btn:hover {
        background-color: #ff5252;
    }
    
    .cart-item-controls {
        display: flex;
        gap: 10px;
        align-items: center;
    }
`;
document.head.appendChild(style);
