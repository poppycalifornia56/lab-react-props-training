function Greetings(props) {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      {greetings[props.lang]} {props.children}
    </div>
  );
}

export default Greetings;
