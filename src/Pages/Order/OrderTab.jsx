import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Updated path
import "swiper/css";
import "swiper/css/pagination";

import FoodCard from "../../components/Shared/FoodCard";

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid md:grid-cols-3 gap-10">
                        {items.map((item) => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderTab;
