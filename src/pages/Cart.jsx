import { motion } from "framer-motion";

export default function Cart({ cart, setCart }) {

  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    setCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].qty > 1) updated[index].qty -= 1;
    setCart(updated);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: "40px", marginBottom: "20px" }}
      >
        Shopping Cart
      </motion.h2>

      {cart.length > 0 && (
        <motion.button
          onClick={clearCart}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            padding: "12px 24px",
            background: "#b71c1c",
            color: "white",
            border: "none",
            borderRadius: "10px",
            marginBottom: "30px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Clear All
        </motion.button>
      )}

      {cart.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ fontSize: "20px" }}
        >
          Your cart is empty.
        </motion.p>
      ) : (
        cart.map((item, i) => (
          <motion.div
            key={i}
            className="cart-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              padding: "20px",
              borderRadius: "20px",
              background: "white",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              marginBottom: "25px",
            }}
          >

            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "15px",
                objectFit: "cover",
              }}
            />

            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "26px", marginBottom: "10px" }}>{item.name}</h3>
              <p style={{ fontSize: "16px", color: "#444" }}>{item.desc}</p>

              <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                {item.price} so'm × {item.qty}  
                <span style={{ color: "#b71c1c", marginLeft: "10px" }}>
                  = {item.price * item.qty} so'm
                </span>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                onClick={() => increaseQty(i)}
                style={{
                  padding: "8px 16px",
                  background: "#d32f2f",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                +
              </button>

              <p style={{ margin: "10px 0", fontSize: "22px", fontWeight: "bold" }}>
                {item.qty}
              </p>

              <button
                onClick={() => decreaseQty(i)}
                style={{
                  padding: "8px 16px",
                  background: "#555",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                –
              </button>
            </div>

            <motion.button
              onClick={() => removeItem(i)}
              whileHover={{ scale: 1.1 }}
              style={{
                padding: "10px 20px",
                background: "#7f0000",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                height: "50px"
              }}
            >
              Delete
            </motion.button>
          </motion.div>
        ))
      )}

      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: "30px",
            padding: "25px",
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            fontSize: "26px",
            fontWeight: "bold",
          }}
        >
          Total:  
          <span style={{ color: "#b71c1c", marginLeft: "10px" }}>
            {total} so'm
          </span>
        </motion.div>
      )}
    </div>
  );
}
