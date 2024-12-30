import featuredImg from  '../../assets/home/featured.jpg';
import SectionTitle from "../../components/Shared/SectionTitle";
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured-item text-white'>
       <SectionTitle
        subHeading={"---check it out---"}
        heading={"FEATURED ITEMS"}
      ></SectionTitle>
   
      <div className='md:flex justify-center items-center py-8 px-16'>
        <div><img src={featuredImg} alt="" className='w-[500px]' /></div>
        <div className='md:ml-10'>
          <p>Aug 1 , 2025</p>
          <p className='uppercase'>Where can i get some ?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias voluptatum id quas officia, saepe voluptas quae enim animi reprehenderit.</p>
          <button className='btn btn-outline'>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;