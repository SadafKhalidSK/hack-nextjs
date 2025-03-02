// 


"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

// Sanity Client Setup
const sanity = createClient({
  projectId: "g10kg7bk",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// Define Product Interface
interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

// ProductCards Component
const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch Products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }
      `;

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  // Add Product to Cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  const removeFromCart = (index: number) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
};











  // Truncate Description Function
  const truncateDescription = (description: string, length: number = 50) => {
    return description.length > length
      ? description.substring(0, length) + "..."
      : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">
        Products from API
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-red-400">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags &&
                  product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-400 text-black rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
              {/* Add to Cart Button */}
              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-black text-red">Cart Summary</h2>
    {cart.length > 0 ? (
        <ul className="space-y-4">
            {cart.map((item, index) => (
                <li
                    key={index}
                    className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
                >
                    <div>
                        <p className="font-medium text-slate-800">{item.title}</p>
                        <p className="text-sm text-blue-400">${item.price.toFixed(2)}</p>
                    </div>

                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="rounded-md"
                    />

                    {/* Remove Button */}
                    <button
                        className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                        onClick={() => removeFromCart(index)}
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    ) : (
        <p className="text-black text-center">
            Your cart is empty, please add products.
        </p>
    )}
</div>

    </div>
  );
};

export default ProductCards;
