import styles from "./CartProduct.module.css";
import { Price } from "../Price/Price";
import REMOVE_ICON from "../../assets/remove.svg";

export function CartProduct({ product }) {
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
            {price}zł
          </p>
          <div className={styles.buttonRow}>
            <button>
              <img src={REMOVE_ICON} />
              Usuń
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
