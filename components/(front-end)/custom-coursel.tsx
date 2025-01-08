"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
    {
        image: "https://img.freepik.com/premium-photo/dental-patient-black-woman-bed-healthcare-success-with-surgery-procedure-treatment-female-lady-person-with-smile-recovery-oral-mould-mouth-disease-joy-hospital_590464-164355.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid",
        title: "Book now,",
        subtitle: "With Telemedicine",
      },
  {
    image: "https://media.istockphoto.com/id/2150178677/video/discussion-tablet-and-doctor-with-senior-patient-in-hospital-office-for-diagnosis-surgery-or.jpg?s=640x640&k=20&c=YjLrDyA_eoJK-XC1a4_Trts-fPFI_xACWcf2ZB_ALeY=",
    title: "Join Our Network,",
    subtitle: "Transform Healthcare",
  },
  {
    image: "https://media.istockphoto.com/id/2147604439/video/woman-doctor-and-consulting-patient-with-tablet-for-prescription-diagnosis-or-results-at.jpg?s=640x640&k=20&c=OKKMVqRHMtRsxQvA4NgjqrQsy57-kLymaagbEMNyXB8=",
    title: "Empower Patients,",
    subtitle: "Anytime, Anywhere",
  },
 
  {
    image: "https://img.freepik.com/premium-photo/dental-patient-black-woman-bed-healthcare-success-with-surgery-procedure-treatment-female-lady-person-with-smile-recovery-oral-mould-mouth-disease-joy-hospital_590464-164355.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid",
    title: "Book now,",
    subtitle: "With Telemedicine",
  },
];

export default function CustomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-purple-900 rounded-l-lg overflow-hidden">
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-purple-900/50" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col items-center justify-end p-6 text-white">
        <h2 className="text-3xl font-bold mb-2">
          {carouselItems[currentSlide].title}
        </h2>
        <p className="text-xl mb-8">{carouselItems[currentSlide].subtitle}</p>
        <div className="flex space-x-2 mb-4">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors "
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
