// src/components/ServiceSlide.jsx
export default function ServiceSlide({ image, title, description }) {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white text-gray-800">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}