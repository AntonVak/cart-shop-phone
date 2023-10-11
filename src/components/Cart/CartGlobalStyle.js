export const styles = {
  section: { paddingTop: "20px", paddingBottom: "20px" },
  title: { textAlign: "center" },
  row: { bgcolor: "background.headerRow" },

  headFirstCell: {
    fontSize: "1.8rem",
    fontWeight: "600",
    width: "500px",
    color: (theme) => ({
      color: theme.status.warning,
    }),
  },

  headCell: { fontSize: "1.8rem", fontWeight: "600", textAlign: "center" },
};
