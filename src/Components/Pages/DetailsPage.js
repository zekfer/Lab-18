import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Spinner from "../UI/Spinner";

function DetailsPage() {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useFetch(`http://localhost:9000/products/${productId}`);

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!product) {
    return <div className="text-gray-500">Product not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <img
          src={product.product_image}
          alt={product.product_name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <h1 className="text-3xl font-bold text-teal-800 mt-4">
          {product.product_name}
        </h1>
        <p className="text-gray-700 mt-4">{product.product_desc}</p>
        <p className="text-teal-700 text-xl mt-4">
          Price: ${product.product_price}
        </p>
      </div>
    </div>
  );
}

export default DetailsPage;
