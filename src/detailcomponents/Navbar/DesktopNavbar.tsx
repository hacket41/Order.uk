// DesktopNavbar.jsx
import { MapPin, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price?: number;
}

export default function DesktopNavbar() {
  const location = "Regent Street, A4, A4201, London";

  const desktopMenuItems: { label: string; path: string }[] = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Browse Menu", path: "/details" },
    { label: "Special Offers", path: "*" },
    { label: "About", path: "/about" },
    { label: "Join The Family", path: "/jointhefamily" },
    { label: "Track Order", path: "*" },
  ];

  const cartItems: CartItem[] = [];

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );

  return (
    <div className="hidden lg:block container mx-auto px-4 mb-4">
      {/* Top Bar */}
      <div className="bg-[#FAFAFA] flex h-[70px] text-sm">
        <div className="flex items-center gap-1 flex-1 justify-start px-4">
          <span className="text-yellow-500">⭐</span>
          <span className="text-gray-700">Get 5% Off your first order.</span>
          <span className="text-[#FC8A06] font-medium">Promo: ORDER5</span>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end px-4">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={16} />
            <span>{location}</span>
            <button className="text-[#FC8A06] hover:underline">
              Change Location
            </button>
          </div>
          <Cart items={cartItems} total={cartTotal} />
        </div>
      </div>
      {/* Main Navbar */}
      <div className="bg-white flex items-center justify-between mt-4 px-4 py-2">
        {/* Logo */}
        <div>
          <img
            src="./logo.png"
            alt="logo"
            className="w-[215px] h-[53px] object-contain"
          />
        </div>

        {/* Navigation & Login */}
        <div className="flex items-center space-x-8">
          <nav>
            <ul className="flex items-center space-x-6">
              {desktopMenuItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-6 py-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap ${
                        isActive
                          ? "bg-[#FC8A06] text-white"
                          : "text-gray-700 hover:text-[#FC8A06]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            <div className="bg-[#FC8A06] rounded-full w-5 h-5 flex items-center justify-center">
              <User size={12} />
            </div>
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  );
}
