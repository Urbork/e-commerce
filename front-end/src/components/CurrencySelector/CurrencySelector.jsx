import styles from "./CurrencySelector.module.css";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES } from "../../constants/currencies";

export function CurrencySelector() {
  const [currency, setCurrency] = useContext(CurrencyContext);

  return (
    <>
      <select
        onChange={(e) => {
          setCurrency(e.currentTarget.value);
          localStorage["selected_currency"] = e.currentTarget.value;
        }}
        className={styles.currencySelector}
        value={currency}
      >
        <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
        <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
      </select>
    </>
  );
}
