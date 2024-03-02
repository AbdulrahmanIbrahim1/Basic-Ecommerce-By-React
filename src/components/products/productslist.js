import { useEffect, useState } from 'react';
import Product from './product'
function ProductsList() {
  const api_product = 'https://fakestoreapi.com/products';
  const [products, setproducts] = useState([])
  const [category, setcategory] = useState([])
  useEffect(() => {
    get_all_products();
    get_categories();
  }, [])
  const get_all_products = () => {
    fetch(api_product).then((res) => res.json()).then((data) => setproducts(data));
  }
  const get_categories = () => {
    fetch(`${api_product}/categories`)
      .then((res) => res.json())
      .then((json) => setcategory(json))
  }
  return (
    <>
      <h1 className="text-center p-3 mt-2">Our Product</h1>
      <div className="container">
        <button className="btn btn-info" onClick={() => get_all_products()} >All</button>
        {category.map((cat) => {
          return (<button key={cat} className="btn btn-info" onClick={() => {
            fetch(`${api_product}/category/${cat}`)
              .then(res => res.json())
              .then(catData => setproducts(catData))
          }}>{cat}</button>);
        })}
        <div className="row ">
          {products.map((product) => {
            return (
              <div className="col-lg-4 col-sm-6 p-4" key={product.id}>
                <Product product={product} viewButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;