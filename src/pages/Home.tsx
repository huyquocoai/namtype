import { TProduct } from "~/interfaces/Product";
import { Link } from "react-router-dom";

type Props = {
  products: TProduct[];
};
const Home = ({ products }: Props) => {
  return (
    <>
      <div className="row">
        {products.map((item) => (
          <div className="col col-sm-12 col-md-6 col-lg-4">
            <div className="productCard">
              <Link to={`/shop/${item.id}`}>
                <img src={item.thumbnail} alt={item.title} />
              </Link>
              <div className="productContent">
                <h2>{item.title}</h2>
                <p>Gia san pham: {item.price}</p>
                <p>{item.description}</p>
                <button className="btn btn-primary">Add to card</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
