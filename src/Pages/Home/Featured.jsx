import SectionTitle from "../../components/Shared/SectionTitle";
import img from '../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white relative my-20">
      <div className="overlay"></div>
      <SectionTitle
        subHeading={"---check it out---"}
        heading={"FEATURED ITEMS"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-8 px-16">
        <img src={img} alt="" className="w-[400px]" />
        <div className="md:ml-10">

          <p>Aug 1, 2025</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias
            voluptatum id quas officia, saepe voluptas quae enim animi reprehenderit.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white my-5">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
