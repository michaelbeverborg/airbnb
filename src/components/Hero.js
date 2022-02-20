import grid from "../images/grid.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={grid} className="grid" alt="" />
      <h2>Online Experiences</h2>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts. All
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
