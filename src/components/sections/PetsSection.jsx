import React from "react";
import Container from "../ui/Container";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PetCard from "../cards/PetCard";

const pets = [
  {
    imageUrl:
      "https://cloud.ukpets.com/oc-content/uploads/3008/selling-cute-kittens-for-sale-1489875.jpg",
    title: "Joe and Kim",
    paragraph:
      "Laura Milholland is by far our first choice when we need a dog sitter. We have used her service on several occasions, the last one for a period of three weeks.  During that time, she kept the house neat and tidy and stayed in communication with us on a regular basis, eliminating the stress of leaving the dogs and house behind. Above all, Laura is trustworthy, and our dogs love her.  We would be happy to provide personal references upon request.",
    location: "Austin, Texas",
  },
  {
    imageUrl:
      "https://cloud.ukpets.com/oc-content/uploads/3008/sprocker-puppies-for-sale-1490008.jpg",
    title: "Brooke",
    paragraph: `I highly recommend Unleashed Pet Sitters! My two cats received the care and attention they needed, and my house was very well kept! In fact, it seemed cleaner when I returned, than the day I left for our trip.  Laura  is very friendly, trustworthy and dependable. You will not be disappointed!`,
    location: "Georgetown, Texas",
  },
  {
    imageUrl:
      "https://cloud.ukpets.com/oc-content/uploads/3008/husky-sheperd-x-thai-ridgeback-1489901.jpg",
    title: "Husky sheperd x thai ridgeback",
    paragraph: `Laura has been an absolute blessing!   Cierra  (my dog) loves Laura and does a happy dance upon her arrival.  She is prompt, reliable, trustworthy and will update me when I’m out of town which is always comforting.  I don’t know what we would do without her!`,
    location: "Austin, Texas",
  },
  {
    imageUrl:
      "https://cloud.ukpets.com/oc-content/uploads/3008/selling-cute-kittens-for-sale-1489875.jpg",
    title: "Madelyn",
    paragraph:
      "love how Laura pays attention to detail.  She wanted to make sure that she knew my little guy: from his treats and his routine down to the way he likes to play ball.  I never worried a minute while I was out of town because she had everything under control.  It was such a comfort knowing that my little guy didn’t have to go stay somewhere else, but could stay in his own routine at home.  I would HIGHLY recommend Laura and her pet sitting services to ALL my friends with furry people. Don’t even worry about stressing or planning for a trip to the kennel, just let Laura come over and take care of your little family at home.  AND, she will update you as often as you’d like regarding your pets and their behavior.  Call her today!!",
    location: "Springwell Village, Gateshead",
  },
];

const PetsSection = () => {
  return (
    <section className="py-10">
      <Container>
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-center text-2xl lg:text-4xl font-bold mb-8"
        >
          <span className="text-primary-500">Pet Owners</span> Trust Us
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
            {pets.map((pet, index) => (
              <SwiperSlide key={index}>
                <PetCard {...pet} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default PetsSection;
