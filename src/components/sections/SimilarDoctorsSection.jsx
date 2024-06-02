import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BookAppointmentModal from "../modals/BookAppointmentModal";

const doctors = [{}, {}, {}, {}, {}, {}];

const SimilarDoctorsSection = () => {
  return (
    <section className="bg-white p-4 md:p-6">
      <div>
        <h3 className="text-center text-2xl font-bold sm:text-3xl text-primary-500">
          Similar Doctors
        </h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{ clickable: true }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1350: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="pt-8 pb-10"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={`review-${index}`}>
              <div className="p-4 bg-gray-50 rounded-md shadow">
                <div className="flex gap-3">
                  <div>
                    <span className="block bg-white   rounded-lg h-14 w-14 min-w-[3.5rem]">
                      <img
                        className="block h-full w-full rounded-lg object-cover"
                        src="https://d1t78adged64l7.cloudfront.net/images/profile-pics/doctors/80-1642664127_whatsappimage2022-01-18at7-44-04pm.jpg?t=1678366097215"
                        alt="..."
                      />
                    </span>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-base text-black capitalize font-semibold line-clamp-1">
                      Dr. Nabeel Iqbal
                    </h5>
                    <p className="text-sm text-gray-500 line-clamp-1">
                      8 years experience
                    </p>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <span className="inline-block h-2 w-2 bg-green-400 rounded-full" />
                      <span>Available today</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 w-full">
                  <BookAppointmentModal />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SimilarDoctorsSection;
