export default function Home() {
  const products = [
    { id: 1, name: "Space Apples", price: "₹120/kg", image: "https://via.placeholder.com/250x200/0a0a0a/ffffff?text=🚀+Apples" },
    { id: 2, name: "Galaxy Milk", price: "₹60/L", image: "https://via.placeholder.com/250x200/0a0a0a/ffffff?text=🥛+Milk" },
    { id: 3, name: "Lunar Bread", price: "₹45", image: "https://via.placeholder.com/250x200/0a0a0a/ffffff?text=🍞+Bread" },
    { id: 4, name: "Mars Tomatoes", price: "₹30/kg", image: "https://via.placeholder.com/250x200/0a0a0a/ffffff?text=🍅+Tomatoes" },
  ];

  return (
    <div style={{ fontFamily: "Orbitron, Arial, sans-serif", background: "#0a0a0a", color: "#fff" }}>
      {/* HEADER */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #222" }}>
        <h1 style={{ margin: 0, fontSize: "28px", letterSpacing: "2px" }}>🚀 SpaceMart</h1>
        <input
          type="text"
          placeholder="Search the galaxy..."
          style={{ padding: "10px", width: "40%", borderRadius: "6px", border: "1px solid #444", background: "#111", color: "#fff" }}
        />
        <button style={{ background: "#00e0ff", color: "#000", border: "none", padding: "10px 18px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
          Cart (0)
        </button>
      </header>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px", background: "linear-gradient(180deg, #000, #111)" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Next-Gen Grocery Delivery 🚀</h2>
        <p style={{ fontSize: "18px", color: "#aaa", maxWidth: "600px", margin: "0 auto" }}>
          From Earth to Mars, shop futuristic groceries and cosmic essentials with interplanetary delivery.
        </p>
        <button style={{ marginTop: "30px", padding: "14px 28px", fontSize: "16px", background: "#00e0ff", color: "#000", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
          Start Mission
        </button>
      </section>

      {/* PRODUCTS */}
      <main style={{ padding: "50px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "30px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ background: "#111", padding: "20px", borderRadius: "12px", border: "1px solid #222", textAlign: "center", transition: "0.3s", cursor: "pointer" }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }} />
            <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{p.name}</h3>
            <p style={{ fontWeight: "bold", color: "#00e0ff" }}>{p.price}</p>
            <button style={{ marginTop: "10px", padding: "10px 14px", background: "#00e0ff", color: "#000", border: "none", borderRadius: "6px", fontWeight: "bold" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <footer style={{ background: "#000", color: "#777", textAlign: "center", padding: "20px", borderTop: "1px solid #222" }}>
        <p>© 2025 SpaceMart | Powered by SpaceX Commerce Technologies</p>
        <p>
          <a href="#" style={{ color: "#00e0ff", marginRight: "15px", textDecoration: "none" }}>Mission Control</a>
          <a href="#" style={{ color: "#1adaf3ff", textDecoration: "none" }}>Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}
