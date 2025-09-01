// src/components/Products.jsx
import { useState } from "react";
import ProductInfo from "./ProductInfo";

export default function Products() {
  // state: مصفوفة المنتجات
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 20000 },
    { id: 2, name: "Headphones", price: 1200 },
    { id: 3, name: "Mouse", price: 450 },
    { id: 4, name: "Keyboard", price: 750 },
  ]);

  // دالة حذف المنتج - تعدّل الstate في الأب
  const handleDelete = (id) => {
    // نخلي نسخة جديدة من المصفوفة بدون المنتج اللي اترفِع
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Products List</h1>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <ProductInfo
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}
