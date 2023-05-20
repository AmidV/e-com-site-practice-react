import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Logo = styled.img`
  width: 45px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  margin: 0 13px;
  padding: 5px 3px;
  cursor: pointer;
`;
