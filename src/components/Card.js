import star from "../images/star.png";

const Card = props => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} className="card-photo" />
      <div className="card-stats">
        <img src={star} className="card-star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • &nbsp;</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
