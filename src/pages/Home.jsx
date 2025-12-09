import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to Red Flame Restaurant
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Taste the finest dishes prepared with passion, fresh ingredients, 
          and world-class chefs. Experience quality like never before.
        </motion.p>
      </motion.div>

      {/* FEATURES */}
      <div className="container">
        <h2 style={{ marginBottom: "20px" }}>Why Choose Us?</h2>

        <div className="menu-grid">
          <motion.div
            className="card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3>Fresh & Organic</h3>
            <p>We cook with natural ingredients, locally sourced products and clean recipes.</p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>World-Class Chefs</h3>
            <p>Our chefs create magical flavors with years of international experience.</p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Cozy Atmosphere</h3>
            <p>Enjoy your meal in a relaxing, modern, premium interior.</p>
          </motion.div>
        </div>
      </div>

      {/* SPECIAL OFFERS */}
      <div className="container">
        <h2 style={{ marginBottom: "20px" }}>Special Offers</h2>

        <div className="menu-grid">
          <motion.div
            className="card"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <img src="https://i.imgur.com/4QfKuz1.jpeg" alt="pizza" />
            <h3>Buy 1 Get 1 Pizza</h3>
            <p>Every Friday, get double pizza for the price of one!</p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg" alt="burger" />
            <h3>Free Drink With Burger</h3>
            <p>Order any burger and receive a drink absolutely free.</p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F03451644-d21e-4e3d-b415-1d3740994394&w=3840&q=75" alt="lavash" />
            <h3>20% OFF Lavash</h3>
            <p>Lavash lovers enjoy a special discount all month!</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
