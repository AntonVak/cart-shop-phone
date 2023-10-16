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
    fontFamily: {md: "Encode Sans" },
    flexGrow: '1',
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon:{
    display:{sm: 'none', xs: 'flex'},
    marginRight: '1rem',
    flexGrow: '1',
    justifyContent: "space-between",
    
},
  link: {
    display: {sm:"flex", xs:"none"},
    gap: {md:"3rem", sm:'1rem'},
    fontSize: {sm:"1.5rem"},
    fontWeight: "600",
    flexGrow: '1',
    whiteSpace: 'nowrap',
  },
  cartIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: 'none',
    marginRight: '.8rem',
  },
  linkIconCart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cart:{
    fontSize: {sm:"2.6rem", xs:'1.8rem'},
   
  },
  btnLogin:{
    fontSize: {sm:"2.2rem", xs:'1.5rem'},
    color: 'color.text'
  },
};

export const StyledSpan = styled.span`
  display: block;
  height: 1.7rem;
  width: 1.7rem;
  background-color: white;
  color: #F75C03;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.7rem;
  
`;
