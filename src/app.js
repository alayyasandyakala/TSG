document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Buket Tulip", img: "produk5.jpg", price: 75000 },
      { id: 2, name: "Buket Mawar Merah", img: "produk.jpg", price: 85000 },
      { id: 3, name: "Buket Lavender", img: "produk4.jpg", price: 55000 },
      { id: 4, name: "Buket Mawar Putih", img: "produk7.jpg", price: 85000 },
      { id: 5, name: "Buket Aster ", img: "produk2.jpg", price: 70000 },
      { id: 6, name: "Buket Mawar Ungu", img: "produk3.jpg", price: 85000 },
      { id: 7, name: "Buket Mix", img: "produk6.jpg", price: 75000 },
      {
        id: 8,
        name: "Buket Mawar (per-satuan)",
        img: "produk8.png",
        price: 25000,
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      //jika belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
        this.items = this.items.map((item) => {
          //jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            //jika barang sudah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += newItem.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      //ambil item yang mau diremove berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);

      //jika item lebih dari 1
      if (cartItem.quantity > 1) {
        //telusuri 1 1
        this.items = this.items.map((item) => {
          //jika bukan barang yang diklik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

//konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
