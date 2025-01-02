import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login')

  return (
    <div>
      <div>
        {
          noHeaderFooter || <NavBar></NavBar>
        }
      </div>
      {/* Main content with padding to avoid overlap */}
      <div className="min-h-[calc(100vh-232px)] container mx-auto">
        <Outlet />
      </div>
      <div>
        {
          noHeaderFooter || <Footer></Footer>
        }
      </div>
 
    </div>
  );
};

export default MainLayout;