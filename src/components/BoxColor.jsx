function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: "black",
    padding: "20px",
    margin: "10px",
    border: "1px solid black",
  };

  return (
    <div style={divStyle}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor;
