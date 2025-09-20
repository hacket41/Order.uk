import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import Burger from "../assets/images/Burger.png";
import { addToCart } from "../redux/slices/cartSlice";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

interface MenuSectionProps {
  categories?: MenuCategory[];
}

export default function MenuSection({ categories }: MenuSectionProps) {
  const dispatch = useDispatch();

  // Menu items for the navigation
  const menuItems: string[] = [
    "Burgers",
    "Fries",
    "Pizza",
    "Garlic Bread",
    "Calzone",
    "Kebabs",
    "Salads",
    "Cold Drink",
    "Happy Meal",
    "Deserts",
    "Hot Drinks",
    "Sauses",
    "Orbit",
  ];

  // State to track the selected menu category
  const [selectedCategory, setSelectedCategory] = useState<string>("Burgers");

  // State for search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  const mockBurgersData: MenuItem[] = [
    {
      id: "1",
      name: "Royal Cheese Burger with extra Fries",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: 23.1,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "2",
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: 23.1,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "3",
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: 23.1,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "4",
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: 23.1,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "5",
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: 23.1,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "6",
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: 23.1,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=200&h=200&fit=crop&auto=format",
    },
  ];

  const mockFriesData: MenuItem[] = [
    {
      id: "7",
      name: "Crispy Golden Fries",
      description:
        "Perfectly seasoned crispy golden fries served hot with your choice of sauce",
      price: 4.5,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "8",
      name: "Loaded Cheese Fries",
      description:
        "Golden fries topped with melted cheese, bacon bits, and green onions",
      price: 7.9,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "9",
      name: "Sweet Potato Fries",
      description:
        "Crispy sweet potato fries with a hint of sea salt and rosemary",
      price: 5.5,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "10",
      name: "Garlic Parmesan Fries",
      description:
        "Crispy fries tossed with garlic butter and fresh parmesan cheese",
      price: 6.9,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "11",
      name: "Truffle Fries",
      description: "Premium fries with truffle oil, parmesan, and fresh herbs",
      price: 9.5,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "12",
      name: "Spicy Cajun Fries",
      description:
        "Seasoned fries with cajun spices and served with spicy mayo",
      price: 5.9,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=200&h=200&fit=crop&auto=format",
    },
  ];

  const mockPizzaData: MenuItem[] = [
    {
      id: "13",
      name: "Margherita Pizza",
      description:
        "Fresh mozzarella, tomato sauce, basil, olive oil on crispy crust",
      price: 18.5,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "14",
      name: "Pepperoni Pizza",
      description: "Classic pepperoni with mozzarella cheese and tomato sauce",
      price: 21.0,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "15",
      name: "Veggie Supreme",
      description: "Bell peppers, mushrooms, onions, olives, tomatoes",
      price: 19.5,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200&h=200&fit=crop&auto=format",
    },
  ];

  const mockDrinksData: MenuItem[] = [
    {
      id: "16",
      name: "Coca Cola",
      description: "Classic refreshing cola drink, ice cold",
      price: 3.5,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "17",
      name: "Fresh Orange Juice",
      description: "Freshly squeezed orange juice, 100% natural",
      price: 4.0,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&h=200&fit=crop&auto=format",
    },
    {
      id: "18",
      name: "Iced Coffee",
      description: "Premium coffee served over ice with milk",
      price: 4.5,
      currency: "GBP",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop&auto=format",
    },
  ];

  // All available categories with mock data
  const allCategories: MenuCategory[] = [
    { title: "Burgers", items: mockBurgersData },
    { title: "Fries", items: mockFriesData },
    { title: "Pizza", items: mockPizzaData },
    { title: "Garlic Bread", items: [] },
    { title: "Calzone", items: [] },
    { title: "Kebabs", items: [] },
    { title: "Salads", items: [] },
    { title: "Cold Drink", items: mockDrinksData },
    { title: "Happy Meal", items: [] },
    { title: "Deserts", items: [] },
    { title: "Hot Drinks", items: [] },
    { title: "Sauses", items: [] },
    { title: "Orbit", items: [] },
  ];

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

  const handleAddItem = (item: MenuItem) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        currency: item.currency,
        quantity: 1, // default to 1 when adding
      })
    );
  };

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedCategory(menuItem);
    setSearchQuery(""); // Clear search when selecting a category
  };

  // Use provided categories or fallback to mock data
  const menuCategories =
    categories && categories.length > 0 ? categories : allCategories;

  // Get the selected category data
  const selectedCategoryData = menuCategories.find(
    (cat) => cat.title === selectedCategory
  );

  // Filter items based on search query - only on name (food title)
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return selectedCategoryData?.items || [];
    }

    // Search across all categories if there's a search query, filter only by name
    const allItems = menuCategories.flatMap((cat) => cat.items);
    return allItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, selectedCategoryData, menuCategories]);

  // Determine if we're in search mode
  const isSearchMode = searchQuery.trim().length > 0;

  return (
    <div className="max-w-full bg-gray-50 py-4 lg:py-8">
      {/* Search Bar - Centered  */}
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
            showDots={false}
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

      {/* Menu Content Container */}
      <div className="container mx-auto px-4 ">
        {selectedCategoryData && (
          <div className="w-full">
            {/* Section Title */}
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
              {isSearchMode
                ? `Search Results for "${searchQuery}"`
                : selectedCategoryData.title}
            </h2>

            {/* Check if category has items */}
            {filteredItems.length === 0 ? (
              /* No items available message */
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
              /* Menu Grid - Responsive */
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 lg:p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Mobile Layout (Vertical Stack) */}
                    <div className="block lg:hidden space-y-4">
                      {/* Food Image - Full width on mobile */}
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100">
                        <img
                          src={item.image || Burger}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        {/* Item Name */}
                        <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                          {item.name}
                        </h3>

                        {/* Item Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>

                        {/* Price and Add Button Row */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-xl font-bold text-gray-900">
                            {item.currency} {item.price.toFixed(2)}
                          </div>

                          <button
                            onClick={() => handleAddItem(item)}
                            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                            aria-label={`Add ${item.name} to cart`}
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout (Horizontal) - Hidden on mobile */}
                    <div className="hidden lg:flex justify-between items-start h-full">
                      {/* Left Content */}
                      <div className="flex-1 pr-4">
                        {/* Item Name */}
                        <h3 className="font-semibold text-gray-900 text-base mb-2 leading-tight">
                          {item.name}
                        </h3>

                        {/* Item Description */}
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Price */}
                        <div className="text-lg font-bold text-gray-900">
                          {item.currency} {item.price.toFixed(2)}
                        </div>
                      </div>

                      {/* Right Content - Image and Add Button */}
                      <div className="flex flex-col items-center">
                        {/* Food Image */}
                        <div className="w-20 h-20 mb-3 rounded-xl overflow-hidden bg-gray-100">
                          <img
                            src={item.image || Burger}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Add Button */}
                        <button
                          onClick={() => handleAddItem(item)}
                          className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                          aria-label={`Add ${item.name} to cart`}
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
