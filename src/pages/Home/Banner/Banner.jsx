import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <div className="mb-28">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2000}>
        <div data-src="https://i.ibb.co/Mg9NYyL/img1.jpg"/>
        <div data-src="https://i.ibb.co/YhVh4SX/img2.jpg"/>
        <div data-src="https://i.ibb.co/BfvXjWj/img3.jpg"/>
        <div data-src="https://i.ibb.co/41MJKyp/img4.jpg"/>
        <div data-src="https://i.ibb.co/zNSvWKs/img5.jpg"/>
        <div data-src="https://i.ibb.co/g6vTmL3/img6.jpg"/>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
