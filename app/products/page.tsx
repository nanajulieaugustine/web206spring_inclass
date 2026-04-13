"use client"

import Link from "next/link";
import { products } from "../../dummy-data/products";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";
import { Product } from "../../types/product";
import { log } from "console";
import Cart from "../../components/Cart";
import { useCart } from "../hooks/useCart";
import { useFilterProducts } from "../hooks/useFilterProducts";

export default function Products() {
    const { addToCart, cartItems, cartItemCount } = useCart();
    const { search, setSearch, filteredProducts } = useFilterProducts();
    const [liked, setLiked] = useState(false);
    // Opret en custom hook (se slide)
    // flyt kode fra denne komponent til useCart (custom hook'en).
    // Importer de samme funktioner til denne komponent.

    return (
        <div>
            <Cart cart={cartItems} cartItemCount={cartItemCount}></Cart>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <h1>Products</h1>
                <button
                    onClick={() => setLiked(l => !l)}
                    aria-label={liked ? "Unlike" : "Like"}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", lineHeight: 1 }}
                >
                    {liked ? "❤️" : "🤍"}
                </button>
            </div>
            <h2>Item count in cart: {cartItemCount}</h2>
            <input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

            <div className="grid">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} 
                        setCartItemCount={() => addToCart(product)}/>
                ))}
            </div>
            {filteredProducts.length===0 && <p>No products found</p>}

            <Link href="/products/2">Product 2</Link>
        </div>
    );
}