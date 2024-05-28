import styles from "./FavouriteProduct.module.css";
import { useFetcher } from "react-router-dom";
import { Price } from "../Price/Price";
import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/bag.svg";

export function FavouriteProduct({ favourite }) {
  const product = favourite.product;
  const { Form } = useFetcher();

  const price = <Price product={product} />;

  return (
    <>
      <div className={styles.favouriteProduct}>
        <img src={product.photos[0]} alt="" />
        <div className={styles.favouriteProductInfo}>
          <div className={styles.topRow}>
            <h3>
              {product.brand} {product.productName}
            </h3>
            <p>{price}</p>
          </div>
          <p className={styles.priceRow}>
            <span>Cena: </span>
            {price}
          </p>
          <div className={styles.buttonRow}>
            <Form
              action={`/delete-from-favourites/${favourite.id}`}
              method="DELETE"
            >
              <button>
                <img src={REMOVE_ICON} />
                Usuń
              </button>
            </Form>
            <button>
              <img src={BAG_ICON} />
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
