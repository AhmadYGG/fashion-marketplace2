const productDataWanita = [
    { kode: '001', nama: 'Tropical Summer Dress', kategori: 'Dress', material: 'Linen Cotton', warna: 'Broken White/Ivory', ukuran: 'All Size (Fit to L)', harga: 249000 },
    { kode: '002', nama: 'Chic Vacation Blouse', kategori: 'Blouse', material: 'Cotton Poplin', warna: 'Pure White', ukuran: 'All Size (Fit to L)', harga: 135000 },
    { kode: '003', nama: 'Minimalist Mock-Neck Sweater', kategori: 'Sweater', material: 'Premium Knit Cotton', warna: '-', ukuran: 'All Size (Fit to L)', harga: 165000 },
    { kode: '004', nama: 'Aura Polka-Kiss Jumpsuit Set', kategori: 'Jumpsuit', material: 'Silk-Rayon Blend', warna: 'Peach Pastel', ukuran: 'All Size (Fit to L)', harga: 249000 },
    { kode: '005', nama: 'Sahara Utility Jumpsuit', kategori: 'Jumpsuit', material: 'Cotton Twill', warna: 'Khaki Sand/Stone Grey', ukuran: '-', harga: 249000 },
    { kode: '006', nama: 'Luna Ribbed Knit Set', kategori: 'Set Outfit', material: 'Cotton-Acrylic Knit', warna: 'Heather Grey/Light Grey', ukuran: 'All Size (M-XL)', harga: 299000 },
    { kode: '007', nama: 'Victory Varsity Bomber Jacket', kategori: 'Jacket', material: 'Cotton Fleece', warna: 'Black/White', ukuran: '-', harga: 165000 },
    { kode: '008', nama: 'Noir High-Rise Flare Slacks', kategori: 'Slacks', material: 'Semi-Wool/Scuba Crepe', warna: 'Onyx Black', ukuran: '-', harga: 115000 },
    { kode: '009', nama: 'Artisan Stitch Tapered Trousers', kategori: 'Trousers', material: 'Semi-Wool/Crepe', warna: 'Almond Latte', ukuran: '-', harga: 99000 },
    { kode: '010', nama: 'Navy Executive Wide-Leg Trousers', kategori: 'Trousers', material: 'Formal Suit Fabric', warna: 'Deep Navy', ukuran: '-', harga: 105000 },
    { kode: '011', nama: 'Amara Satin Pleated Skirt', kategori: 'Skirt', material: 'Silk Satin', warna: 'Bronze Gold/Coffee', ukuran: 'All Size (Elastis)', harga: 125000 },
    { kode: '012', nama: 'Peony Flared-Sleeve Blouse', kategori: 'Blouse', material: 'Soft Chiffon', warna: 'Broken White/Cream', ukuran: '-', harga: 199000 },
    { kode: '013', nama: 'Clara Essential Oxford Shirt', kategori: 'Shirt', material: 'Cotton Oxford', warna: 'Sky Blue/Pastel Blue', ukuran: '-', harga: 105000 },
    { kode: '014', nama: 'Retro-Vibe Denim Overalls', kategori: 'Overalls', material: 'Non-Stretch Denim', warna: 'Light Blue Denim', ukuran: '-', harga: 199000 },
    { kode: '015', nama: 'Nara Tiered Crinkle Dress', kategori: 'Dress', material: 'Crinkle Airflow', warna: '-', ukuran: 'S/M/L/XL', harga: 249000 },
    { kode: '016', nama: 'Valerie Navy Button-Down Midi Dress', kategori: 'Dress', material: 'Cotton Poly-Spandex', warna: 'Midnight Navy', ukuran: 'S/M/L', harga: 299000 },
    { kode: '017', nama: 'Ziva Paisley Artistic Blouse', kategori: 'Blouse', material: 'Silk Rayon', warna: 'White Pattern', ukuran: '-', harga: 129000 },
    { kode: '018', nama: 'Aurelia Blossom Satin Dress', kategori: 'Dress', material: 'Silk Satin', warna: 'Soft Dusty Pink', ukuran: '-', harga: 289000 },
    { kode: '019', nama: 'Elara Cottage Linen Dress', kategori: 'Dress', material: 'Organic Linen Blend', warna: 'Soft Oatmeal/Nude Beige', ukuran: '-', harga: 249000 },
    { kode: '020', nama: 'Sierra Urban Leather Jacket', kategori: 'Jacket', material: 'Vegan Leather', warna: 'Taupe Grey', ukuran: '-', harga: 329000 }
];

const productDataPria = [
    { no: 1, nama: "Men's Carlo Casual Top", kategori: 'Kaos Casual', warna: 'Cokelat', material: 'Katun Premium', fit_ukuran: 'Regular Fit', harga: 89000 },
    { no: 2, nama: "Lamont Men's Top", kategori: 'Atasan Semi-Formal', warna: '-', material: 'Material Berkualitas Tinggi', fit_ukuran: '-', harga: 125000 },
    { no: 3, nama: 'Ultra Shirt Men', kategori: 'Kemeja Formal', warna: '-', material: 'Breathable Fabric', fit_ukuran: 'Slim Fit', harga: 175000 },
    { no: 4, nama: 'Chetwode Blue Casual Shirt', kategori: 'Kemeja Casual', warna: 'Biru', material: 'Katun Premium', fit_ukuran: '-', harga: 95000 },
    { no: 5, nama: 'Cardinal Kemeja Lengan Panjang Slim Fit', kategori: 'Kemeja Formal', warna: '-', material: '-', fit_ukuran: 'Slim Fit', harga: 119000 },
    { no: 6, nama: "Men's Carlo Casual Top Series 6", kategori: 'Kaos Casual', warna: 'Cokelat', material: 'Katun Premium', fit_ukuran: 'Regular Fit (S-XXL)', harga: 89000 },
    { no: 7, nama: "Lamont Men's Top Series 7", kategori: 'Atasan Semi-Formal', warna: '-', material: 'Material Berkualitas Tinggi', fit_ukuran: 'S-XXL', harga: 125000 },
    { no: 8, nama: 'Ultra Shirt Men Series 8', kategori: 'Kemeja Formal', warna: '-', material: 'Breathable Fabric', fit_ukuran: 'Slim Fit (S-XXL)', harga: 175000 },
    { no: 9, nama: 'Chetwode Blue Casual Shirt Series 9', kategori: 'Kemeja Casual', warna: 'Biru', material: 'Katun Premium', fit_ukuran: 'S-XXL', harga: 95000 },
    { no: 10, nama: 'Cardinal Kemeja Lengan Panjang Slim Fit Series 10', kategori: 'Kemeja Formal', warna: '-', material: '-', fit_ukuran: 'Slim Fit (S-XXL)', harga: 119000 },
    { no: 11, nama: "Men's Carlo Casual Top Series 11", kategori: 'Kaos Casual', warna: 'Hitam', material: 'Katun Premium', fit_ukuran: 'Regular Fit (S-XXL)', harga: 89000 },
    { no: 12, nama: "Lamont Men's Top Series 12", kategori: 'Atasan Semi-Formal', warna: '-', material: 'Material Berkualitas Tinggi', fit_ukuran: 'S-XXL', harga: 125000 },
    { no: 13, nama: 'Ultra Shirt Men Series 13', kategori: 'Kemeja Formal', warna: '-', material: 'Breathable Fabric', fit_ukuran: 'Slim Fit (S-XXL)', harga: 175000 },
    { no: 14, nama: 'Chetwode Blue Casual Shirt Series 14', kategori: 'Kemeja Casual', warna: 'Biru Putih', material: 'Katun Premium', fit_ukuran: 'S-XXL', harga: 95000 },
    { no: 15, nama: 'Cardinal Kemeja Lengan Panjang Slim Fit Series 15', kategori: 'Kemeja Formal', warna: '-', material: '-', fit_ukuran: 'Slim Fit (S-XXL)', harga: 119000 },
    { no: 16, nama: "Men's Carlo Casual Top Series 16", kategori: 'Kaos Casual', warna: 'Cokelat', material: 'Katun Premium', fit_ukuran: 'Regular Fit (S-XXL)', harga: 89000 },
    { no: 17, nama: "Lamont Men's Top Series 17", kategori: 'Atasan Semi-Formal', warna: '-', material: 'Material Berkualitas Tinggi', fit_ukuran: 'S-XXL', harga: 125000 },
    { no: 18, nama: 'Ultra Shirt Men Series 18', kategori: 'Kemeja Formal', warna: '-', material: 'Breathable Fabric', fit_ukuran: 'Slim Fit (S-XXL)', harga: 175000 },
    { no: 19, nama: 'Chetwode Pink Casual Shirt Series 19', kategori: 'Kemeja Casual', warna: 'Pink', material: 'Katun Premium', fit_ukuran: 'S-XXL', harga: 95000 },
    { no: 20, nama: 'Cardinal Kemeja Lengan Panjang Slim Fit Series 20', kategori: 'Kemeja Formal', warna: '-', material: '-', fit_ukuran: 'Slim Fit (S-XXL)', harga: 119000 }
];

function getProductDescription(productName, isWanita = true) {
    const descriptions = {
        'Tropical Summer Dress': 'Dress musim panas yang sempurna dengan motif tropis yang cerah. Terbuat dari bahan linen cotton yang ringan dan breathable, cocok untuk cuaca panas. Desain yang stylish dan nyaman untuk aktivitas sehari-hari maupun liburan.',
        'Chic Vacation Blouse': 'Blouse chic yang elegan dengan desain modern. Cocok untuk liburan atau acara santai. Material cotton poplin premium yang lembut di kulit dengan cutting yang flattering dan nyaman dipakai seharian.',
        'Minimalist Mock-Neck Sweater': 'Sweater mock-neck minimalis dengan desain yang simple namun elegant. Material rajut premium yang lembut dan hangat. Perfect untuk cuaca dingin atau layering di musim semi.',
        'Aura Polka-Kiss Jumpsuit Set': 'Jumpsuit set dengan motif polka yang playful dan cute. Desain yang comfortable dan stylish. Cocok untuk berbagai acara casual maupun semi-formal dengan tampilan yang fresh.',
        'Sahara Utility Jumpsuit': 'Jumpsuit utility Sahara dengan desain yang praktis dan stylish. Material cotton twill yang durable dan nyaman. Perfect untuk outdoor activities atau casual weekend wear.',
        'Luna Ribbed Knit Set': 'Set knit ribbed yang nyaman dan stylish. Terdiri dari atasan dan bawahan yang matching dengan warna heather grey yang versatile. Perfect untuk tampilan casual yang tetap fashionable dan comfortable.',
        'Victory Varsity Bomber Jacket': 'Jaket bomber varsity dengan desain sporty yang trendy. Material cotton fleece yang tebal dan hangat. Cocok untuk tampilan casual yang cool dan modern.',
        'Noir High-Rise Flare Slacks': 'Celana slacks high-rise dengan model flare yang timeless. Warna hitam yang versatile, mudah dipadukan dengan berbagai atasan. Material berkualitas tinggi yang tidak mudah kusut.',
        'Artisan Stitch Tapered Trousers': 'Celana tapered dengan detail jahitan artisan yang unik. Desain yang modern dan comfortable. Cocok untuk daily wear maupun acara semi-formal.',
        'Navy Executive Wide-Leg Trousers': 'Celana wide-leg executive dengan warna navy yang professional. Perfect untuk office wear. Material formal suit fabric yang tidak mudah kusut dan tahan lama.',
        'Amara Satin Pleated Skirt': 'Rok pleated satin Amara dengan desain yang feminine. Material satin yang mengkilap dan mewah. Cocok untuk acara formal maupun semi-formal dengan tampilan yang elegant.',
        'Peony Flared-Sleeve Blouse': 'Blouse dengan lengan flare dan motif peony yang cantik. Desain yang romantic dan elegant. Material soft chiffon yang lembut dan breathable, cocok untuk berbagai acara.',
        'Clara Essential Oxford Shirt': 'Kemeja oxford Clara yang essential untuk wardrobe. Desain classic yang timeless. Material cotton oxford berkualitas tinggi yang tahan lama dan mudah dirawat.',
        'Retro-Vibe Denim Overalls': 'Overall denim dengan vibe retro yang fun dan playful. Desain yang casual dan comfortable. Perfect untuk weekend outfit atau casual activities.',
        'Nara Tiered Crinkle Dress': 'Dress tiered Nara dengan material crinkle yang unik dan breathable. Desain yang flowing dan comfortable. Cocok untuk berbagai acara dari casual hingga semi-formal.',
        'Valerie Navy Button-Down Midi Dress': 'Dress midi navy Valerie dengan button-down detail yang elegant. Desain yang versatile dan professional. Perfect untuk office atau acara formal dengan tampilan yang sophisticated.',
        'Ziva Paisley Artistic Blouse': 'Blouse artistic Ziva dengan motif paisley yang eye-catching. Desain yang unique dan stylish. Material silk rayon premium yang nyaman dan berkilau.',
        'Aurelia Blossom Satin Dress': 'Dress satin dengan motif bunga Aurelia yang cantik. Desain yang feminine dan elegan, cocok untuk acara formal maupun semi-formal. Material satin yang mengkilap dan mewah.',
        'Elara Cottage Linen Dress': 'Dress linen cottage Elara dengan desain yang natural dan comfortable. Material organic linen blend yang breathable. Perfect untuk summer atau casual weekend wear.',
        'Sierra Urban Leather Jacket': 'Jaket kulit urban Sierra dengan desain yang edgy dan modern. Material vegan leather berkualitas tinggi. Cocok untuk tampilan yang bold dan stylish.',
        
        "Men's Carlo Casual Top": 'Kaos casual pria dengan desain Carlo yang modern dan trendy. Bahan cotton premium yang nyaman dan tidak panas. Cocok untuk daily wear maupun casual activities.',
        "Lamont Men's Top": 'Atasan pria Lamont dengan desain yang simple namun stylish. Material berkualitas tinggi yang breathable dan comfortable. Perfect untuk casual activities dan everyday wear.',
        'Ultra Shirt Men': 'Kemeja pria Ultra dengan kualitas premium dan desain yang modern. Material breathable fabric yang tidak mudah kusut. Cocok untuk berbagai acara dari casual hingga semi-formal.',
        'Chetwode Blue Casual Shirt': 'Kemeja casual Chetwode Blue dengan warna biru yang menenangkan. Cocok untuk berbagai acara casual. Material cotton premium dengan cutting yang modern dan comfortable.',
        'Cardinal Kemeja Lengan Panjang Slim Fit': 'Kemeja lengan panjang Cardinal dengan model slim fit yang modern. Desain yang professional dan elegan. Cocok untuk ke kantor atau acara formal dengan tampilan yang sophisticated.',
    };
    
    return descriptions[productName] || 'Produk fashion berkualitas tinggi dengan desain yang stylish dan material premium. Cocok untuk berbagai acara dan aktivitas sehari-hari.';
}

function getProductById(productId, isWanita = true) {
    const data = isWanita ? productDataWanita : productDataPria;
    return data[productId] || null;
}
