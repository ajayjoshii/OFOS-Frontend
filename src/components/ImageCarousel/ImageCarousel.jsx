import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    {
        url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/24/5c/77/1d/chicken-thali-set-signature.jpg",
        title: "Thakali Set",
    },
    {
        url: "https://honeyguideapps.com/sites/default/files/kothey_0.jpg",
        title: "Momo",
    },
    {
        url: "https://v.greattibettour.com/photos/2021/07/selroti-12-63179.jpg",
        title: "Sel Roti",
    }
];

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    }, 3000); // 3000 = 3 seconds

    return () => clearInterval(interval);
}, []);

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <div className="relative w-full max-w-7xl sm:h-165 h-96  mt-18 rounded-xl mx-auto overflow-hidden shadow-xl group transition-all duration-500">
            <img
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                className="w-full object-cover transform h-180 transition-transform duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-opacity-30 flex items-center justify-between px-4">
                <button
                    onClick={prevSlide}
                    className="bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full text-xl transition"
                >
                    {/* <FaArrowLeft /> */}

                     <ChevronLeft size={24} strokeWidth={2} />
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full text-xl transition"
                >
                    {/* <FaArrowRight /> */}

                        <ChevronRight size={24} strokeWidth={2} />

                </button>
            </div>
            <div className="absolute top-44 sm:top-80 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold bg-opacity-50 px-4 py-1 rounded-full">
                {images[currentIndex].title}
            </div>
        </div>
    );
}
