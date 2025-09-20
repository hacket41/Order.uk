import { Clock, ShoppingBag, Star } from "lucide-react";
import Burger from "../assets/images/Burger.png";

interface HeroSectionProps {
  restaurantData?: {
    name: string;
    location: string;
    rating: number;
    reviewCount: number;
    isLoving?: boolean;
    isOpen: boolean;
    openUntil?: string;
    minimumOrder: string;
    deliveryTime: string;
    heroImage: string;
  };
}

export default function HeroSection({ restaurantData }: HeroSectionProps) {
  const defaultData = {
    name: "McDonald's East London",
    location: "East London",
    rating: 3.4,
    reviewCount: 1340,
    isLoving: true,
    isOpen: true,
    openUntil: "3:00 AM",
    minimumOrder: "12 GBP",
    deliveryTime: "20-25 Minutes",
    heroImage: Burger,
  };

  const data = restaurantData || defaultData;

  const formatReviewCount = (count: number): string => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars)
        stars.push(
          <Star key={i} size={14} className="text-yellow-500 fill-current" />
        );
      else if (i === fullStars + 1 && hasHalfStar)
        stars.push(
          <Star
            key={i}
            size={14}
            className="text-yellow-500 fill-current opacity-50"
          />
        );
      else stars.push(<Star key={i} size={14} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className=" container mx-auto relative w-full  ">
      {/* Background + Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 rounded-2xl"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      />
      <div className="absolute inset-0 bg-[#1c1f34]/90 z-10 rounded-2xl" />

      {/* Content */}
      <div className="relative z-20 rounded-2xl">
        {/* Mobile Layout */}
        <div className="block lg:hidden bg-[#1c1f34] pb-4">
          {/* Hero Image */}
          <div className="relative mb-4 h-48 w-full overflow-hidden">
            <img
              src={data.heroImage}
              alt={`${data.name} food`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rating Card */}
          <div className="absolute bottom-57 left-0 bg-white rounded-lg p-2 shadow-md">
            <div className="flex items-center">
              <div className="text-slate-800 text-xl font-bold mr-1">
                {data.rating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center gap-0.5">
                {renderStars(data.rating)}
              </div>
            </div>
            <div className="text-xs text-gray-500 text-center">
              {formatReviewCount(data.reviewCount)} reviews
            </div>
          </div>

          {/* Open Status */}
          {data.isOpen && data.openUntil && (
            <div className="bg-[#FC8A06] text-white px-4 py-2 flex items-center justify-center gap-2 mb-4 mx-4 rounded-lg">
              <Clock size={16} />
              <span className="font-medium">Open until {data.openUntil}</span>
            </div>
          )}

          {/* Text & Info */}
          <div className="px-4 text-center">
            {data.isLoving && (
              <div className="text-orange-400 text-sm font-medium mb-2">
                I'm lovin' it !
              </div>
            )}
            <h1 className="text-xl font-bold mb-3 text-white">{data.name}</h1>
            <div className="flex flex-col gap-2 items-center">
              <div className="flex items-center justify-center gap-2 bg-slate-800 text-white rounded-full px-4 py-2 text-xs">
                <ShoppingBag size={14} />{" "}
                <span>Min Order: {data.minimumOrder}</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-slate-800 text-white rounded-full px-4 py-2 text-xs">
                <Clock size={14} /> <span>Delivery: {data.deliveryTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <div className="relative h-fit text-white w-full rounded-2xl overflow-visible flex">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center p-8">
              {data.isLoving && (
                <div className="text-yellow-400 text-sm font-medium mb-2">
                  I'm lovin' it!
                </div>
              )}
              <h1 className="text-6xl font-bold mb-4">{data.name}</h1>

              <div className="flex gap-3 mb-6">
                <div className="flex items-center justify-center w-64 h-12 border border-white gap-2 bg-slate-700 rounded-full px-4 py-2 text-sm">
                  <ShoppingBag size={16} />{" "}
                  <span>Min Order: {data.minimumOrder}</span>
                </div>
                <div className="flex items-center justify-center w-64 h-12 border border-white gap-2 bg-slate-700 rounded-full px-4 py-2 text-sm">
                  <Clock size={16} /> <span>Delivery: {data.deliveryTime}</span>
                </div>
              </div>
            </div>

            {/* Right Content - Food Image + Rating */}
            <div className="relative h-fit w-1/2 mt-8 mr-8 mb-8 flex-shrink-0">
              <div className="h-full w-full overflow-hidden rounded-lg">
                <img
                  src={data.heroImage}
                  alt={`${data.name} food`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-[-20px] left-[-40px] bg-white rounded-lg p-8 shadow-lg">
                <div className="text-slate-800 text-4xl font-bold text-center">
                  {data.rating.toFixed(1)}
                </div>
                <div className="flex items-center justify-center gap-0.5 mt-1">
                  {renderStars(data.rating)}
                </div>
                <div className="text-xl text-gray-500 mt-1 text-center">
                  {formatReviewCount(data.reviewCount)} reviews
                </div>
              </div>
            </div>
          </div>

          {data.isOpen && data.openUntil && (
            <div className="absolute bottom-[-20px] left-0 bg-[#FC8A06] rounded-br-[12px] rounded-tr-[12px] px-6 py-3 text-white flex items-center gap-2 shadow-lg">
              <Clock size={18} />
              <span className="font-medium text-lg">
                Open until {data.openUntil}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
