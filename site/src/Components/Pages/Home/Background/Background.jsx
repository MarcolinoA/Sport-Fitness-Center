import background from "./home-image.jpg";
import "./BackgroundStyle.css";
import LogoIcon from "../../../Icons/Logo";

const Background = () => {
  return (
    <div className="bg-container" style={{backgroundImage: `url(${background})`}}>
      <h1 className="bg-title roboto-bold">
        <LogoIcon />
      </h1>
    </div>
  );
}

export default Background;