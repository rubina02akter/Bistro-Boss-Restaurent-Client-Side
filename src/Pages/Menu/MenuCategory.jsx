import Cover from "../../components/Shared/Cover";
import MenuItems from "../../components/Shared/MenuItems";

const MenuCategory = ({ items,title,img }) => {
  return (
    <div className="pt-8 ">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16 w-11/12 mx-auto">
        {
        items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))
        }
      </div>
    </div>
  );
};

export default MenuCategory;
