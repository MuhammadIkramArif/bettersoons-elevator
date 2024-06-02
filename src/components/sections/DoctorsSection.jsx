import React from "react";
import Container from "../ui/Container";
import DoctorCard from "../cards/DoctorCard";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const doctors = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Dr. Alex Müller",
    experience: 15,
    specialization: "General medicine for small animals",
    role: "Urology",
    location: "Springwell Village, Gateshead",
    rating: "4.5",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Dr. Lisa Schmidt",
    experience: 5,
    specialization: "Surgery for small animals",
    role: "Urology",
    location: "Springwell Village, Gateshead",
    rating: "5",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Dr. Chris Wagner",
    experience: 20,
    specialization:
      "House calls and emergency care for small animals, euthanasia at home",
    role: "Urology",
    location: "Springwell Village, Gateshead",
    rating: "4.8",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RG9jdG9yfGVufDB8fDB8fHww",
    name: "Dr. Julia Becker",
    experience: 12,
    specialization: "Managing a small animal practice",
    role: "Urology",
    location: "Springwell Village, Gateshead",
    rating: "3",
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-10">
      <Container>
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-center text-2xl lg:text-4xl font-bold mb-8"
        >
          <span className="text-primary-500">Popular</span> Doctors
        </h1>
        <div data-aos="fade-left" data-aos-duration="1300">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000 }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {doctors.map((doctor, index) => (
              <SwiperSlide key={index}>
                <DoctorCard {...doctor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default DoctorsSection;
