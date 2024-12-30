

const MenuItems = ({item}) => {
  const {image,price,recipe,name} = item;
  return (
    <div className="flex space-x-4 items-center">
      <img src={image} alt="" className="w-[100px] h-[90px]" style={{borderRadius:'0 200px 200px 200px'}} />
      <div>
        <p className="uppercase">{name}--------</p>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">{price}</p>
    </div>
  );
};

export default MenuItems;