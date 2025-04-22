function IdCard(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <img src={props.picture} alt="Profile" style={{ height: "100px" }} />
      <div>
        <p>
          <strong>First name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height}cm
        </p>
        <p>
          <strong>Birth:</strong> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
