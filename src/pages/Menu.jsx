import { useState } from "react";
import { motion } from "framer-motion";

export default function Menu({ addToCart }) {

  const foods = [
    { category: "Burger", name: "Cheese Burger", price: 25000, desc: "Juicy grilled beef with melted cheese.", img: "https://www.sargento.com/assets/Uploads/Recipe/Image/cheddarbaconcheeseburger__FillWzgwMCw4MDBd.jpg" },
    { category: "Burger", name: "Double Beef Burger", price: 39000, desc: "Double beef, double taste.", img: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg" },
    { category: "Pizza", name: "Pepperoni Pizza", price: 55000, desc: "Hot, cheesy, premium pepperoni.", img: "https://ik.imagekit.io/smithfield/armour/4353bced-f940-00d0-8c6e-13a0a4a7f5c2/2ac60829-5178-4a6e-80cf-6ca43d862cee/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg?tr=w-1160,c-at_max,f-auto" },
    { category: "Pizza", name: "Four Cheese Pizza", price: 60000, desc: "Four premium cheese mix.", img: "https://uk.ooni.com/cdn/shop/articles/FourCheese_Resized.jpg?crop=center&height=800&v=1598453116&width=800" },
    { category: "Lavash", name: "Classic Lavash", price: 26000, desc: "Fresh lavash with chicken.", img: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F03451644-d21e-4e3d-b415-1d3740994394&w=3840&q=75" },
    { category: "Lavash", name: "Cheese Lavash", price: 29000, desc: "Cheesy and delicious.", img: "https://www.revolgreens.com/app/uploads/2022/11/Turkey-Lavash-Wrap-2.jpg" },
    { category: "Somsa", name: "Beef Somsa", price: 7000, desc: "Crispy golden somsa.", img: "https://onestophalal.com/cdn/shop/articles/beef_samosa-1697330921061_1200x.jpg?v=1697330957" },
    { category: "Somsa", name: "Potato Somsa", price: 6000, desc: "Soft and tasty.", img: "https://doctourkyrgyz.com/wp-content/uploads/2025/02/gae1f25b0755084619646654a8ae610f98f4002103518fb6724a5e58aa5690f3c2facda28b0bee547d8f904ed26fb05cef2d29a62885487a294e24d44a7ca7b0f_1280-3566281.jpg" },
  ];

  const [filter, setFilter] = useState("All");

  const filteredFoods = filter === "All" 
    ? foods 
    : foods.filter(f => f.category === filter);

  return (
    <div className="container">
      <h2>Menu</h2>

      {/* FILTER BUTTONS */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
        {["All", "Burger", "Pizza", "Lavash", "Somsa"].map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.1 }}
            style={{
              padding: "10px 20px",
              background: filter === cat ? "#b71c1c" : "#ddd",
              color: filter === cat ? "white" : "black",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* MENU ITEMS */}
      <div className="menu-grid">
        {filteredFoods.map((food, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>
            <p style={{ color: "#555" }}>{food.desc}</p>
            <p style={{ fontWeight: "bold" }}>{food.price} so'm</p>
            <button onClick={() => addToCart({ ...food, qty: 1 })}>
              Add to cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
