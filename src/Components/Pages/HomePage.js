import useFetch from "../../Hooks/useFetch";
import Spinner from "../UI/Spinner";
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("http://localhost:9000/products");

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  if (!products || !Array.isArray(products)) {
    return <div className="text-gray-500">No products available</div>;
  }

  const categories = [
    ...new Set(products.map((product) => product.product_category)),
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6 font-sans">
      <header className="bg-white shadow-md mb-10 p-6 rounded-lg">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-cyan-800 tracking-wide">
            Shop Now
          </h1>
          <div className="space-x-8">
            <span className="text-gray-700 font-semibold hover:text-cyan-600 transition-colors duration-200">
              <Link to="/">Home</Link>
            </span>
            <span className="text-gray-700 font-semibold hover:text-cyan-600 transition-colors duration-200">
              <Link to="/help">Help Center</Link>
            </span>
          </div>
        </nav>
      </header>

      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 border-b-2 border-gray-200 pb-2 mb-6">
            {category}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products
              .filter((product) => product.product_category === category)
              .map((product) => (
                <li
                  key={product.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-xl font-semibold text-orange-800 mb-2">
                      {product.product_name}
                    </h3>
                    <p className="text-gray-600">{product.product_desc}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
