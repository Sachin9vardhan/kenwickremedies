import { useState, useEffect } from "react";
import ImageModal from "./ImageModal";

export default function ProductGallery() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const imageModules = import.meta.glob(
      "../assets/images/*.{jpg,jpeg,png,webp}",
      { eager: true }
    );

    const loadedImages = Object.values(imageModules).map(
      (module) => module.default
    );

    setImages(loadedImages);
  }, []);

  return (
    <section
      id="products"
      className="py-20 px-15 relative"
    >
      <div className="max-w-7xl mx-auto relative">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Products & Gallery
        </h2>

        {/* IMAGE POPUP BELOW TITLE */}
        {currentIndex !== null && (
          <ImageModal
            images={images}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            onClose={() => setCurrentIndex(null)}
          />
        )}

        {/* Scrollable Container */}
        <div
          className="
            h-[600px]
            overflow-y-auto
            pr-4
            scrollbar-thin
          "
        >
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              lg:grid-cols-4
              gap-8
            "
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-xl
                  shadow-lg
                  p-3
                  hover:shadow-2xl
                  transition
                  cursor-pointer
                "
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={img}
                  alt={`Product ${index}`}
                  className="
                    rounded-lg
                    w-full
                    h-36
                    md:h-40
                    lg:h-44
                    object-cover
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}