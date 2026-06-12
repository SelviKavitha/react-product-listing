import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  console.log(products, 'list');
  if (products?.length === 0) {
    return <p className="no-products">No Products Found</p>;
  }

  return (
 
    <div className="product-grid">
      {products?.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;