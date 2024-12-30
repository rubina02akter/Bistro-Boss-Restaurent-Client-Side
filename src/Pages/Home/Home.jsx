import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Slider from "./Slider";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;