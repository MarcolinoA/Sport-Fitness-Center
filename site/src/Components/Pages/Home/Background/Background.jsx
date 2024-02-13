import background from "./home-image.jpg";
import "./BackgroundStyle.css";

const Background = () => {
  return (
    <div className="bg-container" style={{backgroundImage: `url(${background})`}}>
      <h1 className="bg-title roboto-bold">
        Il tuo <br/> futuro <br/> è qui!
      </h1>
    </div>
  );
}

export default Background;