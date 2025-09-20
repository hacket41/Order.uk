import React from 'react';

type Props = { image?: string; title: string; count: number };

export default function CategoryCard({ image, title, count }: Props) {
  return (
    <figure className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
      <img
        src={image || ''}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-[#03081F]/90 text-white px-3 py-2 text-center">
        <p className="text-sm font-semibold truncate">{title}</p>
        <p className="text-xs">{count} Restaurants</p>
      </figcaption>
    </figure>
  );
}
