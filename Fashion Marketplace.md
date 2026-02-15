# 📄 PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Website Marketplace Fashion – Tema Pink (HTML + CSS Native)

---

## 1. 📌 Overview

Website ini adalah marketplace fashion sederhana dengan tema dominan **warna pink** dan layout mengikuti referensi gambar yang diberikan (hero banner besar, sidebar kiri, grid product di kanan, footer).

Website dibuat khusus menggunakan:

* ✅ HTML Native
* ✅ CSS Native
* ✅ JavaScript sederhana (inline `<script>`)
* ❗ Tanpa framework
* ❗ Tanpa library
* ❗ Struktur coding gaya pemula
* ❗ Deprecated function diperbolehkan

---

## 2. 🎯 Tujuan Website

* Menampilkan produk fashion pria & wanita
* Menyediakan sidebar navigasi
* Menampilkan keranjang sederhana
* Menampilkan halaman store & contact
* Menggunakan looping JavaScript untuk menampilkan product

---

## 3. 🎨 Konsep Design

### Warna Utama

* Pink utama: `#ff69b4`
* Pink muda: `#ffc0cb`
* Background lembut: `#fff0f5`
* Hitam untuk teks: `#333`

### Layout Struktur

```
---------------------------------------------------
HEADER (Logo + Menu Top)
---------------------------------------------------
HERO BANNER (Pink + Fashion Image)
---------------------------------------------------
SIDEBAR LEFT  |     CONTENT AREA (Dynamic)
              |
              |
              |
---------------------------------------------------
FOOTER
---------------------------------------------------
```

---

## 4. 🧭 Struktur Navigasi Sidebar (Kiri)

Sidebar berisi:

### Menu Utama:

* 🛒 Keranjang
* 👗 Product
* 📞 Contact
* 🏬 Store

### Submenu Kategori:

Kategori:

* Pria

  * Tas
  * Baju
  * Celana
  * Sepatu
* Wanita

  * Tas
  * Baju
  * Celana
  * Sepatu
  * Dress
  * Heels

---

## 5. 🛒 Detail Fitur

---

# 5.1 Keranjang

Menampilkan contoh 1–5 item:

Contoh isi:

1. Pink Hoodie – Rp 150.000
2. Women Heels – Rp 220.000
3. Leather Bag – Rp 300.000
4. Slim Jeans – Rp 180.000

Format sederhana:

```
Nama Product
Harga
Quantity
```

Tidak perlu fitur tambah/hapus (static saja).

---

# 5.2 Product

Product ditampilkan menggunakan JavaScript looping sederhana.

### Data Product Contoh:

* Pink Hoodie
* Women Dress
* Leather Bag
* Sneakers White
* Slim Jeans
* Pink Skirt
* High Heels

Harga random.

Looping menggunakan:

```html
<script>
var products = [5], price = [5];
    
    product[0] = "Pink Hoodie"; 
    product[1] = "Women Dress"; 
    product[2] = "Leather Bag"; 
    product[3] = "Sneakers White"; 
    product[4] = "Slim Jeans"; 
    
    price[0] = "150000"; 
    price[1] = "200000"; 
    price[2] = "300000"; 
    price[3] = "250000"; 
    price[4] = "180000";

for(var i = 0; i < 10; i++){
    document.write("<div class='product-card'>");
    document.write("<h3>" + product[i] + "</h3>");
    document.write("<p>Rp " + price[i] + "</p>");
    document.write("</div>");
}
</script>
```

> document.write diperbolehkan (meskipun deprecated).

---

# 5.3 Contact

Berisi:

Nama Store: Pinky Fashion Store
Alamat: Jl. Mawar No. 123, Jakarta Selatan
No HP: 0812-3456-7890
Email: [pinkystore@email.com](mailto:pinkystore@email.com)
Instagram: @pinkystore

Google Maps tidak perlu (cukup teks lokasi).

---

# 5.4 Store

### Tentang Kami

Pinky Fashion Store adalah marketplace fashion modern dengan konsep stylish dan elegan berwarna pink yang menargetkan anak muda dan dewasa.

---

### Visi

Menjadi marketplace fashion pink terbesar dan terpercaya di Indonesia.

---

### Misi

1. Menyediakan produk fashion berkualitas dengan harga terjangkau.
2. Memberikan pelayanan terbaik kepada pelanggan.
3. Mengikuti tren fashion terkini.
4. Menciptakan pengalaman belanja yang menyenangkan.
5. Mendukung UMKM fashion lokal.

---

## 6. 📁 Struktur Folder

```
/fashion-marketplace
    index.html
    style.css
    images/
```

---

## 7. 🧱 Struktur HTML (High-Level)

```
<header>
    Logo
    Menu Top
</header>

<section class="hero">
    Banner Pink
</section>

<div class="container">
    <aside class="sidebar">
        Menu + Submenu
    </aside>

    <main class="content">
        Isi dinamis (Keranjang / Product / Contact / Store)
    </main>
</div>

<footer>
    Copyright
</footer>
```

---

## 8. 🎨 Styling (CSS Sederhana)

* Flexbox basic
* Tidak perlu responsive mobile
* Font default
* Hover sederhana

Contoh style dasar:

```css
body {
    margin: 0;
    font-family: Arial;
    background-color: #fff0f5;
}

.sidebar {
    width: 250px;
    background-color: #ffc0cb;
    float: left;
}

.content {
    margin-left: 260px;
    padding: 20px;
}
```

---

## 9. ⚙️ Behaviour

* Klik menu sidebar → tampilkan section
* Bisa pakai `display: none` lalu ubah via JS
* Tidak perlu SPA kompleks

---

## 10. 🚫 Non Functional Requirement

* Tidak menggunakan framework (Bootstrap, Tailwind, dll)
* Tidak menggunakan CDN
* Tidak menggunakan library JS
* Tidak menggunakan ES6 modern (gunakan var, bukan let/const)
* document.write diperbolehkan
* Struktur coding seperti pemula (tidak perlu clean code)

---

## 11. 📊 Target User

* Remaja
* Wanita 15–30 tahun
* Pria 18–35 tahun
* Pengguna desktop

---

## 12. 📌 Future Improvement (Optional)

* Add to cart button
* Search product
* Filter kategori
* Responsive layout
* Login / Register
* Backend PHP/MySQL

---

# ✅ Kesimpulan

Website marketplace fashion pink ini:

* Sederhana
* Native HTML + CSS
* JavaScript looping basic
* Layout mirip referensi
* Sidebar lengkap dengan submenu
* Terdapat Keranjang, Product, Contact, Store
* Coding gaya pemula diperbolehkan

---

Kalau kamu mau, saya bisa lanjutkan langsung buatkan:

* ✅ Full index.html
* ✅ Full style.css
* ✅ Dengan layout visual mendekati gambar
* ✅ Siap langsung dibuka di browser

Tinggal bilang aja 🚀
