import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu";


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="OUR Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="OUR Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="OUR Menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;