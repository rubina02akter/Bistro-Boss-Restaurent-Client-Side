import SectionTitle from "../../components/Shared/SectionTitle";
import MenuItems from "../../components/Shared/MenuItems";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {

  const[menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')

  return (
    <section className="mb-12 w-11/12 mx-auto">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {
         popular.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
