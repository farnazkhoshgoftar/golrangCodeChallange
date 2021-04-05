import "./card.css";

const Card = ({ name, username, email, phone }) => {
  return (
    <div className="card">
      <h1>
        <span>name:</span>
        {name}
      </h1>
      <p>
        <span>username:</span>
        {username}
      </p>
      <p>
        <span>email:</span>
        {email}
      </p>
      <p>
        <span>phone:</span>
        {phone}
      </p>
    </div>
  );
};
export default Card;
