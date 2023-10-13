export const styles = {
  section: { paddingTop: "20px", paddingBottom: "20px" },
  title: { textAlign: "center" },
  row: {  },

  headFirstCell: {
    fontSize: "1.8rem",
    fontWeight: "600",
    width: "500px",
    color: (theme) => ({
      color: theme.status.warning,
    }),
    textTransform: 'uppercase',
  },

  headCell: { fontSize: "1.8rem", fontWeight: "600", textAlign: "center", textTransform: 'uppercase', },
  card: {},
  img: {height: '180px', width: '100px'},
  nameTitle: {fontWeight: 600},
  descTitle: {fontSize: '1.5rem', paddingBottom: '2rem'},
  price:{ display: 'block' },
  total:{}
};
