const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#1e1e2d",
    width: "96%",
    alignItems: "center",
    margin: "0 auto",
    marginTop: 16,
    padding: "16px 0",
    borderRadius: 8,
    color: "white",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  },
  containerBlock: {
    flex: 1,
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontWeight: 500,
    fontSize: 20,
    flexWrap: "wrap"
  },
  button: {
    display: "flex",
    overflow: "hidden",
    padding: "6px 32px",
    borderRadius: 25,
    textAlign: "center",
    whiteSpace: "nowrap",
    color: "white",
    backgroundColor: "#08CF6F",
    cursor: "pointer",
    margin: 12
  },
  gameTitleInput: {
    outline: 0,
    backgroundColor: "transparent",
    border: 0,
    fontSize: 20,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 600,
    color: "white",
    borderBottom: "2px solid rgb(8, 207, 111)"
  }
};

export default styles;
