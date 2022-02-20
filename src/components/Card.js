import star from "../images/star.png";

const Card = () => {
  const cards = [
    {
      id: 1,
      pic: "../../images/bike.png",
      rating: 5,
      revCount: 6,
      country: "USA",
      title: "Lessons about cycling so you can cycle around",
      price: "€135",
      openSpots: 0,
    },
    {
      id: 2,
      pic: "../../images/bike.png",
      rating: 4,
      revCount: 26,
      country: "UK",
      title: "Lessons about cycling so you can cycle around",
      price: "€225+",
      openSpots: 1,
    },
    {
      id: 3,
      pic: "../../images/bike.png",
      rating: 3,
      revCount: 16,
      country: "AU",
      title: "Lessons about cycling so you can cycle around",
      price: "€77",
      openSpots: 1,
    },
  ];

  return (
    <div className="card-list">
      {cards.map(card => (
        <div className="card">
          {card.openSpots === 0 && <div className="card-badge">Sold Out</div>}

          <img src={card.pic} className="card-photo" alt="A person" />
          <div className="card-stats">
            <img src={star} className="card-star" alt="Star" />
            <span>{card.rating} </span>
            <span className="gray">&nbsp;({card.revCount}) - </span>
            <span className="gray">{card.country}</span>
          </div>
          <p className="card.title">{card.title}</p>
          <p>
            <span className="bold">{card.price}</span> / person
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
