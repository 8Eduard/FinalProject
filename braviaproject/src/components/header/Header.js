import React from "react";
import {
  HeaderBar,
  HeaderLogo,
  SIcon,
  HeaderSearch,
  HeaderSearchInput,
  HeaderOption,
  Navbar,
  FirstOp,
  SecondOp,
  ShopCart,
  ShopCartCount,
} from "./Header.style";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderBar>
      <Link to="/">
        <HeaderLogo
          src="https://www.bravia.ro/html/images/logo.png"
          alt="AiciLogo"
        />
      </Link>

      <HeaderSearch>
        <HeaderSearchInput type="text" placeholder="Type to search" />
        <SIcon>
          <SearchIcon className="header_searchIcon" />
        </SIcon>
      </HeaderSearch>
      {/* Logo */}
      <Navbar>
        <HeaderOption>
          <FirstOp>Despre noi</FirstOp>
          <SecondOp>Informatii</SecondOp>
        </HeaderOption>
        <HeaderOption>
          <FirstOp>Contact</FirstOp>
          <SecondOp>Formular</SecondOp>
        </HeaderOption>
        <HeaderOption>
          <FirstOp>Magazin</FirstOp>
          <SecondOp>Viziteaza-l</SecondOp>
        </HeaderOption>
        <Link to="/checkout">
          <ShopCart>
            <AddShoppingCartIcon />
            <ShopCartCount>0</ShopCartCount>
          </ShopCart>
        </Link>
      </Navbar>
    </HeaderBar>
  );
}

export default Header;
