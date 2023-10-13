import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const styles = {
  footerWr: {
    marginTop: "2rem",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "space-between",
    padding: "0.7rem",
  },
  btnClear: { color: "#B7B5B3", borderColor: "#B7B5B3" },

  total: {
    display: "flex",
    justifyContent: "space-between",
  },

  btnCheck: {
    width: "100%",
    lineHeight: "1",
    marginTop: "1rem",
  },

  continiuShopping: {
    display: "flex",
    marginTop: "1rem",
  },
  arrow: {
    transform: "rotate(180deg)",
    fontSize: '1.8rem',
    
  },
  span: {
    fontSize: '1.5rem',
    paddingLeft: '.5rem',
    textDecoration: 'none',
  }
};
export const LinkStyle = styled(Link)`
 text-decoration: none;
 font-size: 1.5rem;
 color: #B7B5B3;
`;
