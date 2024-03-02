import { Link } from 'react-router-dom'

function Product(props) {
  // console.log(props)
  const { product, viewButton } = props
  return (
    <>
      <div className="card mt-3 p-5" style={{ minHeight: "600px" }} >
        <img src={product.image} className="card-img-top img-fluid" style={{ maxHeight: "300px" }} alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h6 className="card-title">Price : {product.price}$</h6>
          <p className="card-text" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{product.description}</p>
          {viewButton && <Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>}

        </div>
      </div >
    </>
  );
}

export default Product;