import "./App.css";
import Accordian from "./Components/Accordian";
import ImageSlider from "./Components/ImageSlider";
import RandomColor from "./Components/RandomColor";
import StarRating from "./Components/StarRating";

function App() {
  return (
    <>
      {/* accordian component */}

      {/* <Accordian /> */}

      {/* random Color Component */}
      
      {/* <RandomColor/> */}

      {/* star rating */}

    {/* <StarRating noOfStars={10}/> */}
    {/* image slider component */}
    <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={10}/>
    </>
  );
}

export default App;
