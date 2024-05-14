import { MainContent } from "../MainContent/MainContent";
import { TopBar } from "../TopBar/TopBar";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { IconMenu } from "../IconMenu/IconMenu";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { Footer } from "../Footer/Footer";

export function Layout({ children }) {
  return (
    <>
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
        {children}
      </MainContent>
      <Footer />
    </>
  );
}
