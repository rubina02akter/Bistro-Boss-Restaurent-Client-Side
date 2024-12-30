import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/Shared/SectionTitle";
import MenuItems from "../../components/Shared/MenuItems";

const PopularMenu = () => {

  const[menu, setMenu] = useState([]);

  useEffect(()=>{
    fetch('menu.json')
    .then(res=>res.json())
    .then(data=>{
      const popularItems = data.filter(item => item.category === 'popular')
      setMenu(popularItems)
    })
  },[])

  return (
    <section className="mb-12 w-11/12 mx-auto">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {
          menu.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
