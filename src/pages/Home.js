import { Link } from "react-router-dom";
import BannerImage from "../assets/guitare.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Music Shop </h1>
        <p> good quality</p>
        <Link to="/basket">
          <button> SHOP NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
