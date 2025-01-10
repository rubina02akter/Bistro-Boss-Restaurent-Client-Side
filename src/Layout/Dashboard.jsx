import { FaAddressBook, FaCircle, FaCuttlefish, FaHome, FaShoppingCart, FaTable } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
  const[cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054] py-12">
     <ul className="menu p-4">
     <li>
      <NavLink to='/dashboard/userHome'><FaHome></FaHome>User Home</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/reservation'><FaHome></FaHome>Reservation</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>My cart ({cart.length})</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/review'><FaAddressBook></FaAddressBook>Add Review</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/bookings'><FaAddressBook></FaAddressBook>My bookings</NavLink>
      </li>
      <div className="divider"><FaCircle></FaCircle></div>
     <li>
      <NavLink to='/'><FaHome></FaHome>Home</NavLink>
      </li>
     <li>
      <NavLink to='/menu'><FaTable></FaTable>Menu</NavLink>
      </li>
     <li>
      <NavLink to='/order/salad'><FaCuttlefish></FaCuttlefish> Order</NavLink>
      </li>
     </ul>
      </div>

      <div className="flex-1 py-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;