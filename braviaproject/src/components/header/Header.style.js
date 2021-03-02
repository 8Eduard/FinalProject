import styled from "styled-components";

export const HeaderBar = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderLogo = styled.img`
  width: 120px;
  object-fit: contain;
  margin: 0 20px;
  margin-bottom: 18px;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;

export const HeaderSearchInput = styled.input`
  height: 12px;
  padding: 14px;
  border: none;
  width: 100%;
`;

export const SIcon = styled.div`
  height: 28px;
  padding: 5px;
  background-color: #f36d38;
`;

export const ShopCart = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  height: 28px;
  background-color: #f36d38;
  margin-top: 3px;
  margin-right: 20px;
`;

export const ShopCartCount = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export const FirstOp = styled.div`
  font-size: 13px;
`;

export const SecondOp = styled.div`
  font-size: 18px;
  font-weight: 800;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 30px;
  color: white;
`;
