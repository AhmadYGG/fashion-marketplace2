let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produk ditambahkan ke keranjang!");
}

function displayCart() {
    const cartTable = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    if (!cartTable) return;

    cartTable.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartTable.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>Rp ${item.price}</td>
                <td><button onclick="removeItem(${index})">Hapus</button></td>
            </tr>
        `;
    });

    totalElement.innerText = "Rp " + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

document.addEventListener("DOMContentLoaded", displayCart);