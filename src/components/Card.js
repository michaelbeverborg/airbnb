import star from "../images/star.png";

const Card = () => {
  const cards = [
    {
      id: 1,
      pic: "../../images/swim.png",
      rating: 5,
      revCount: 6,
      country: "USA",
      title: "Swimming lessons by Gooba Choobalala",
      price: "€135",
    },
    {
      id: 2,
      pic: "../../images/wed.png",
      rating: 4,
      revCount: 26,
      country: "UK",
      title: "Wedding stuff for weddings when people get married",
      price: "€225+",
    },
    {
      id: 3,
      pic: "../../images/bike.png",
      rating: 3,
      revCount: 16,
      country: "AU",
      title: "Lessons about cycling so you can cycle around",
      price: "€77",
    },
  ];

  return (
    <div className="card-list">
      {cards.map(card => (
        <div className="card">
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
