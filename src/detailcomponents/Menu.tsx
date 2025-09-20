import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import Burger from "../assets/images/Burger.png";
import { addToCart } from "../redux/slices/cartSlice";

// Import menu data + helpers
import {
  allMenuCategories,
  type MenuCategory,
  type MenuItem,
} from "../assets/Data/menuData";

interface MenuSectionProps {
  categories?: MenuCategory[];
}

export default function MenuSection({ categories }: MenuSectionProps) {
  const dispatch = useDispatch();

  // Menu items for the navigation
  const menuItems: string[] = allMenuCategories.map((cat) => cat.title);

  // State to track the selected menu category
  const [selectedCategory, setSelectedCategory] = useState<string>(
    menuItems[0] // Default to first category
  );

  // State for search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Use provided categories or fallback to allMenuCategories
  const menuCategories =
    categories && categories.length > 0 ? categories : allMenuCategories;

  // Get the selected category data
  const selectedCategoryData = menuCategories.find(
    (cat) => cat.title === selectedCategory
  );

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return selectedCategoryData?.items || [];
    }
    const allItems = menuCategories.flatMap((cat) => cat.items);
    return allItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, selectedCategoryData, menuCategories]);

  const isSearchMode = searchQuery.trim().length > 0;

  const handleAddItem = (item: MenuItem) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        currency: item.currency,
        quantity: 1,
      })
    );
  };

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedCategory(menuItem);
    setSearchQuery(""); // reset search when switching category
  };

  // Carousel responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="max-w-full bg-gray-50 py-4 lg:py-8">
      {/* Search Bar */}
      <div className="relative z-30 flex justify-center mb-6">
        <div className="w-80">
          <input
            type="text"
            placeholder="Search from menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-center shadow-md"
          />
        </div>
      </div>

      {/* Menu Banner with Carousel */}
      <div className="relative w-full h-24 bg-[#FC8A06] mb-6 lg:mb-8 flex items-center">
        <div className="h-full container mx-auto flex items-center justify-center overflow-visible">
          <Carousel
            responsive={responsive}
            infinite={false}
            arrows
            swipeable
            draggable
            containerClass="relative w-full"
            sliderClass="flex gap-4 lg:gap-6"
            removeArrowOnDeviceType={["mobile"]}
            customLeftArrow={
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-[#FC8A06] w-12 h-12 lg:w-10 lg:h-10 rounded-full shadow-lg border-2 border-gray-100 hover:bg-gray-50 hover:border-[#FC8A06] flex items-center justify-center transition-transform duration-300 hover:scale-110"
                aria-label="Previous"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            }
            customRightArrow={
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-[#FC8A06] w-12 h-12 lg:w-10 lg:h-10 rounded-full shadow-lg border-2 border-gray-100 hover:bg-gray-50 hover:border-[#FC8A06] flex items-center justify-center transition-transform duration-300 hover:scale-110"
                aria-label="Next"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            }
          >
            {menuItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => handleMenuItemClick(item)}
                  className={`px-4 py-2 rounded-full text-base lg:text-xl font-bold transition-colors duration-200 whitespace-nowrap ${
                    selectedCategory === item
                      ? "bg-black text-white"
                      : "text-white hover:text-black"
                  }`}
                >
                  {item}
                </button>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4">
        {selectedCategoryData && (
          <div className="w-full">
            {/* Section Title */}
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
              {isSearchMode
                ? `Search Results for "${searchQuery}"`
                : selectedCategoryData.title}
            </h2>

            {filteredItems.length === 0 ? (
              <div className="text-center py-16 lg:py-60">
                <div className="text-gray-500 text-lg mb-2">
                  {isSearchMode ? "No items found" : "Coming Soon!"}
                </div>
                <div className="text-gray-400 text-sm">
                  {isSearchMode
                    ? "Try a different search term"
                    : `${selectedCategoryData.title} items will be available soon`}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 lg:p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Mobile Layout */}
                    <div className="block lg:hidden space-y-4">
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100">
                        <img
                          src={item.image || Burger}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-xl font-bold text-gray-900">
                            {item.currency} {item.price.toFixed(2)}
                          </div>
                          <button
                            onClick={() => handleAddItem(item)}
                            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex justify-between items-start h-full">
                      <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-gray-900 text-base mb-2 leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="text-lg font-bold text-gray-900">
                          {item.currency} {item.price.toFixed(2)}
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 mb-3 rounded-xl overflow-hidden bg-gray-100">
                          <img
                            src={item.image || Burger}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          onClick={() => handleAddItem(item)}
                          className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
