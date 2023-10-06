import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f9dc5c;

  &:hover {
    border-bottom: 2px solid #f9dc5c;
  }
`;

export const styles = {
  header: {
    backgroundColor: { sm: "#FF5666", md: "#393A10", lg: "#1F3A5F" },
    fontFamily: { sm: "Sora", md: "Encode Sans" },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    display: "flex",
    gap: "3rem",
    fontSize: "2rem",
    fontWeight: "600",
  },
  cartIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: 'none',
  },
};

export const StyledSpan = styled.span`
  /* display: block; */
  /* height: "2rem";
  width: "2rem"; */
  background-color: white;
  color: #F75C03;
  border-radius: 50%;
  font-size: 1.8rem;
  font-weight: 700;

  
`;
