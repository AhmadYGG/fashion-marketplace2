Baik, saya akan jelaskan konsep sistem keranjang belanja menggunakan JavaScript tanpa mengimplementasikannya. Mari kita bahas strukturnya:

## Konsep Sistem Keranjang Belanja

### 1. **Struktur Data**
Keranjang bisa disimpan sebagai array of objects di localStorage:
```javascript
// Contoh struktur data keranjang
const cart = [
  {
    id: 1,
    name: "Baju Wanita 001",
    price: 150000,
    quantity: 2,
    image: "images/fashion-cewe/001.jpg"
  },
  {
    id: 2,
    name: "Celana Pria 005",
    price: 200000,
    quantity: 1,
    image: "images/fashion-cowo/005.jpg"
  }
];
```

### 2. **Fungsi-fungsi Utama yang Dibutuhkan**

```javascript
// Menambah item ke keranjang
function addToCart(product) {
  // Cek apakah produk sudah ada
  // Jika ada, tambah quantity
  // Jika belum, tambah item baru
  // Simpan ke localStorage
}

// Menghapus item dari keranjang
function removeFromCart(productId) {
  // Filter array, hapus item dengan id tertentu
  // Update localStorage
}

// Update quantity
function updateQuantity(productId, newQuantity) {
  // Cari item, update quantity-nya
  // Jika quantity = 0, hapus item
  // Update localStorage
}

// Hitung total harga
function calculateTotal() {
  // Loop semua item
  // Sum: price * quantity
  // Return total
}

// Ambil data keranjang dari localStorage
function getCart() {
  // Parse dari localStorage
  // Return array
}

// Render keranjang ke HTML
function renderCart() {
  // Loop data keranjang
  // Generate HTML untuk setiap item
  // Update DOM
}
```

### 3. **Integrasi dengan HTML**

Di halaman produk (index.html, pria.html, wanita.html):
- Tambahkan button "Tambah ke Keranjang" di setiap produk
- Button punya data-attribute untuk id, nama, harga, gambar produk
- Event listener untuk memanggil `addToCart()`

Di halaman keranjang (keranjang.html):
- Tampilkan list semua item
- Button untuk update quantity (+/-)
- Button untuk hapus item
- Tampilkan subtotal per item
- Tampilkan total keseluruhan
- Button "Checkout" yang link ke checkout.html

### 4. **localStorage untuk Persistensi**
```javascript
// Simpan
localStorage.setItem('cart', JSON.stringify(cartArray));

// Ambil
const cart = JSON.parse(localStorage.getItem('cart')) || [];
```

### 5. **Fitur Tambahan yang Bisa Ditambahkan**
- Badge counter di icon keranjang (navbar) yang update otomatis
- Notifikasi toast saat item ditambahkan
- Validasi stok produk
- Diskon/kupon promo
- Ongkos kirim berdasarkan lokasi

### 6. **Flow User**
1. User browse produk → klik "Tambah ke Keranjang"
2. JavaScript simpan data ke localStorage
3. Badge counter di navbar update
4. User buka halaman keranjang → data di-render dari localStorage
5. User bisa edit quantity atau hapus item
6. User klik checkout → data dibawa ke halaman checkout

Apakah ada bagian tertentu yang ingin saya jelaskan lebih detail? Atau mau saya buatkan contoh kode untuk fungsi spesifik tertentu dulu?