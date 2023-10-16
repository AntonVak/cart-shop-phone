export const styles = {
  wrap: {
    display: "grid",
    gridTemplateColumns: {md:"1fr 1fr 1fr", sm:'1fr 1fr', xs:'1fr'} ,

    // justifyContent: 'space-between',
    flexWrap: "wrap",
    gap: "1rem",
    margin: "2rem 1rem",
  },
  card: {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // margin: '1rem auto',
    padding: "1rem",
  },
  title: {
    whiteSpace: "nowrap",
    textAlign: 'center',
    fontSize:{xs:"1.5rem"}
  },
  img: {
    display: "block",
    maxWidth: "100%",
    height: "100%",
    marginTop: "1.5rem",
  },
  cardContent: {
    padding: "0",
    paddingTop: "1rem",
  },
  price: {
    fontSize: "1.5rem",
    fontWeight: "700",
  },
};
