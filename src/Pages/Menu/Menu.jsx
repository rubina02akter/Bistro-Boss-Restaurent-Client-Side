import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/Shared/SectionTitle";
import MenuCategory from "./MenuCategory";



const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="OUR Menu"></Cover>
      <SectionTitle     
        subHeading={"---don't miss---"}
        heading={"today's offer"}></SectionTitle>
       {/* offered menu items */}
        <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory items={dessert} title='dessert' img={dessertImg}></MenuCategory>
     {/* pizza menu items */}
      <MenuCategory items={pizza} title='pizza' img={pizzaImg}></MenuCategory>
     {/* soup menu items */}
      <MenuCategory items={soup} title='soup' img={soupImg}></MenuCategory>
     {/* salad menu items */}
      <MenuCategory items={salad} title='salad' img={saladImg}></MenuCategory>
   
    </div>
  );
};

export default Menu;