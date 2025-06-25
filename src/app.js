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
});
