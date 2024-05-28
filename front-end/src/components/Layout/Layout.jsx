import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MainContent } from "../MainContent/MainContent";
import { TopBar } from "../TopBar/TopBar";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { IconMenu } from "../IconMenu/IconMenu";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { Footer } from "../Footer/Footer";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES } from "../../constants/currencies";

export function Layout() {
  const [currency, setCurrency] = useState(
    localStorage["selected_currency"] || CURRENCIES.PLN
  );

  return (
    <>
      <CurrencyContext.Provider value={[currency, setCurrency]}>
        <MainContent>
          <TopBar>
            <MainMenu />
            <Logo />
            <div>
              <CurrencySelector />
              <IconMenu />
            </div>
          </TopBar>
          <CategoryMenu />
          <Outlet />
        </MainContent>
        <Footer />
      </CurrencyContext.Provider>
    </>
  );
}
