// Struktur data keranjang di localStorage
// Format: { id, name, price, quantity, image }

// Ambil data keranjang dari localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Simpan keranjang ke localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Tambah item ke keranjang
function addToCart(product) {
    let cart = getCart();
    
    // Cek apakah produk sudah ada di keranjang
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        // Jika ada, tambah quantity
        existingItem.quantity += product.quantity || 1;
    } else {
        // Jika belum, tambah item baru
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

// Hapus item dari keranjang
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartBadge();
    renderCart();
}

// Update quantity item
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

// Hitung total harga keranjang
function calculateTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Hitung jumlah item di keranjang
function getCartCount() {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// Update badge counter di navbar
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

// Render keranjang ke halaman keranjang.html
function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cart-container');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <p>Keranjang Anda kosong</p>
                <a href="index.html" class="cart-empty-link">Mulai Belanja</a>
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

// Update cart summary di sidebar
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

// Tampilkan notifikasi
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Render checkout items
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

// Render checkout summary di sidebar
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

// Clear keranjang setelah checkout
function clearCart() {
    localStorage.removeItem('cart');
    updateCartBadge();
}

// CSS untuk animasi notifikasi
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    
    // Jika di halaman keranjang, render cart
    if (document.getElementById('cart-container')) {
        renderCart();
    }
    
    // Jika di halaman checkout, render items dan summary
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

// CSS untuk animasi notifikasi
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
