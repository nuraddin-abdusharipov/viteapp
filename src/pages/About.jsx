import { motion } from "framer-motion"; 

export default function About() {
  return (
    <div className="container">

      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        About Our Restaurant
      </motion.h2>

      <motion.div
        className="about-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          Red Flame Restaurant was established in 2010 with one 
          simple mission: bring world-class taste, quality and hospitality 
          to our community. Our chefs come from Italy, Turkey, and France, 
          offering unique flavors you can’t find anywhere else.
        </p>
      </motion.div>

      <h2 style={{ marginTop: "40px" }}>Our Team</h2>

      <div className="menu-grid">
        {[
          { name: "Chef Marco", role: "Italian Chef", img: "https://i.imgur.com/W1pYxTJ.jpeg" },
          { name: "Chef Osman", role: "Turkish Grill Master", img: "https://i.imgur.com/W1pYxTJ.jpeg" },
          { name: "Chef Claire", role: "French Pastry Chef", img: "https://i.imgur.com/W1pYxTJ.jpeg" }
        ].map((t, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <img src={t.img} alt="" />
            <h3>{t.name}</h3>
            <p>{t.role}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="about-box"
        style={{ marginTop: "40px" }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h3>Our Mission</h3>
        <p>
          We strive to deliver unforgettable dining experiences 
          with a mix of creativity, passion, and authenticity.
        </p>
      </motion.div>
    </div>
  );
}
