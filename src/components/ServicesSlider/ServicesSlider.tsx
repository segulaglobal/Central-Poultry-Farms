import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import ServiceSlide from './ServicesSlide';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./ServicesSlider.scss";

export default function ServicesCarousel() {
  const services = [
    {
      image: '/assets/egg-crate.png',
      title: 'High Quality Eggs',
      description: 'Track health, feed, and movement of your animals in real time.',
    },
    {
      image: '/assets/manure.png',
      title: 'Manure for Farms',
      description: 'Scan and verify livestock history with a simple QR code.',
    },
    {
      image: '/assets/feed.png',
      title: 'Poultry Feed',
      description: 'Visualize performance metrics and manage your farm efficiently.',
    },
    {
      image: '/assets/chick.png',
      title: 'Hatchery',
      description: 'Receive automated alerts for health, feed, and environmental changes.',
    },
  ];

  return (
    <div className="md:px-20 py-8 swiper-container">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full h-full"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="h-auto">
            <ServiceSlide {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}