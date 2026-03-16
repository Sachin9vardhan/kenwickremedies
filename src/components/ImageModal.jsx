import { useEffect } from "react";

export default function ImageModal({
  images,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-20
        flex
        justify-center
        backdrop-blur-md
        bg-white/10
        p-6
        rounded-xl
        z-40
      "
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute -top-4 -right-4 bg-white shadow-md rounded-full w-10 h-10"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl"
        >
          ❮
        </button>

        {/* Image */}
        <img
          src={images[currentIndex]}
          className="w-full max-h-[65vh] object-contain rounded-lg shadow-xl"
        />

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl"
        >
          ❯
        </button>
      </div>
    </div>
  );
}