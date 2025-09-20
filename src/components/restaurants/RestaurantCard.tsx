import React from 'react';

type Props = {
  name: string;
  discount: string;
  image?: string;
};

const RestaurantCard: React.FC<Props> = ({ name, discount, image }) => (

  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
    {/* background image or fallback grey */}
    {image ? (
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />
    ) : (
      <div className="absolute inset-0 bg-gray-200" />
    )}

    {/* discount badge */}
    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
      {discount}
    </span>

    {/* name strip */}
    <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur px-3 py-2">
      <p className="text-sm font-semibold truncate">{name}</p>
    </div>
  </div>
);

export default RestaurantCard;
