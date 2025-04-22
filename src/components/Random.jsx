function Random(props) {
  const randomValue =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      Random value between {props.min} and {props.max} =&gt; {randomValue}
    </div>
  );
}

export default Random;
