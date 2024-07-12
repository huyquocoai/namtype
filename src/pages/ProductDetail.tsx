import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "~/apis";
import { TProduct } from "~/interfaces/Product";

type Props = {};

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${id}`);
      setProduct(data);
    };
    getProduct();
  }, []);
  return (
    <div>
      <h2>{product?.title}</h2>
      <img src={product?.thumbnail} alt={product?.title} />
      <div>
        {product?.images &&
          product.images.map((item) => <img width={100} src={item} />)}
      </div>
      <p>Gia: {product?.price}</p>
      <p>Mo ta: {product?.description}</p>
    </div>
  );
};

export default ProductDetail;
