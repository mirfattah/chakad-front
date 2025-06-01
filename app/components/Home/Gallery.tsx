import { Camera, Heart, Share2 } from "lucide-react";
import React, { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      title: "قله برفی آلپ",
      category: "کوهنوردی",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=600&h=400&fit=crop",
      title: "دریاچه کوهستانی",
      category: "طبیعت",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop",
      title: "غروب در کوهستان",
      category: "منظره",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&h=400&fit=crop",
      title: "مسیر کوهنوردی",
      category: "ماجراجویی",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
      title: "کلبه کوهستانی",
      category: "اقامت",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1478662396123-51f6b85e0097?w=600&h=400&fit=crop",
      title: "جنگل کوهستانی",
      category: "طبیعت",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1587502537745-84b86da1204f?w=600&h=400&fit=crop",
      title: "کوهنوردان",
      category: "ماجراجویی",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=600&h=400&fit=crop",
      title: "آبشار کوهستانی",
      category: "طبیعت",
    },
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      {/* Photo Gallery Section */}
      <section
        id="gallery"
        className="py-20"
        style={{ backgroundColor: "#b2c2d4" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#2a4a62" }}
            >
              گالری تصاویر
            </h2>
            <p className="text-xl" style={{ color: "#446b84" }}>
              لحظات زیبا و خاطره‌انگیز از ماجراجویی‌های کوهستانی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 left-4">
                    <h4 className="text-white font-semibold text-lg mb-1">
                      {image.title}
                    </h4>
                    <span
                      className="text-white/80 text-sm px-2 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(122, 176, 200, 0.8)" }}
                    >
                      {image.category}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 flex space-x-2 space-x-reverse">
                    <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="w-5 h-5 text-white opacity-70" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: "#7ab0c8",
                color: "white",
                boxShadow: "0 4px 15px rgba(122, 176, 200, 0.3)",
              }}
            >
              مشاهده همه تصاویر
            </button>
          </div>
        </div>
      </section>
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 left-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeImageModal}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold mb-2">
                {selectedImage.title}
              </h3>
              <span
                className="text-white/80 px-3 py-1 rounded-full text-sm"
                style={{ backgroundColor: "rgba(122, 176, 200, 0.8)" }}
              >
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
