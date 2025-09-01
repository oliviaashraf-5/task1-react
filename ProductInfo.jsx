// src/components/ProductInfo.jsx
export default function ProductInfo({ product, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ddd",
        padding: "10px 14px",
        marginBottom: 8,
        borderRadius: 8,
      }}
    >
      <div>
        <div style={{ fontWeight: 600 }}>{product.name}</div>
        <div style={{ color: "#555" }}>Price: {product.price} EGP</div>
      </div>

      <button
        onClick={() => onDelete(product.id)}
        style={{
          background: "#e3342f",
          color: "#fff",
          border: "none",
          padding: "6px 12px",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}
