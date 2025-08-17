import "./../header/header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FirstHeader from "./componentHeader/FirstHeader";
import SecondHeader from "./componentHeader/SecondHeader";
import 'swiper/css'; // базові стилі

export default function Header() {
  return (
    <header>
      <div className="line_header"></div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Показувати по 1 слайду
        autoplay={{
          delay: 5000, // 5 секунд між слайдами
          disableOnInteraction: false, // не зупиняти при натисканні
        }}
        loop={true} // безкінечна прокрутка
      >
        <SwiperSlide><FirstHeader /> </SwiperSlide>
        <SwiperSlide><SecondHeader /></SwiperSlide>
      </Swiper>
      
    </header>
  );
}
