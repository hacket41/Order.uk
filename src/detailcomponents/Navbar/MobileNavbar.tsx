// MobileNavbar.jsx
import { MapPin } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart";
import Profile from "../Profile";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price?: number;
}

interface NavbarItem {
  label: string;
  path: string;
}

export default function MobileNavbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<string>(
    "Regent Street, A4, A4201, London"
  );
  const cartItems: CartItem[] = [];

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );

  const NavbarItems: NavbarItem[] = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Browse Menu", path: "/details" },
    { label: "Special Offers", path: "*" },
    { label: "About", path: "/about" },
    { label: "Join The Family", path: "/jointhefamily" },
    { label: "Track Order", path: "*" },
  ];

  const handleNavbarItemClick = (): void => {
    setIsNavOpen(false);
  };

  const onLocationChange = (): void => {
    // TODO: Implement location selection logic
    setLocation("New Location Selected");
    console.log("Location Changed");
  };

  return (
    <div className="block lg:hidden">
      {/* Mobile Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md relative bg-white">
        <img
          src="./logo.png"
          className="w-[154px] h-[38px] object-contain"
          alt="Logo"
        />
        <button
          onClick={() => setIsNavOpen(true)}
          aria-label="Open navigation menu"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          <img
            src="./menuButton.png"
            className="w-[65px] h-[65px]"
            alt="Menu"
          />
        </button>
      </nav>

      {/* Mobile Cart and Profile */}
      <div className="flex flex-row gap-0">
        <Profile />
        <Cart items={cartItems} total={cartTotal} />
      </div>

      {/* Location Button */}
      <div className="flex justify-end w-full">
        <button
          onClick={onLocationChange}
          className="flex items-center gap-2 text-gray-700 hover:text-[#FC8A06] px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Change location"
        >
          <MapPin
            size={14}
            className="text-gray-500 group-hover:text-[#FC8A06] flex-shrink-0 transition-colors duration-200"
          />
          <span className="text-sm font-medium truncate">{location}</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-screen h-screen ml-8 mr-8 max-w-[90vw] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img
                  src="./logo.png"
                  className="w-[160px] h-[55px]"
                  alt="Menu Icon"
                />
              </div>
              <button
                onClick={() => setIsNavOpen(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close navigation menu"
              >
                Close
              </button>
            </div>
            <div className="border-t border-gray-300 mb-6"></div>
            <nav>
              <ul className="space-y-4 font-bold" role="list">
                {NavbarItems.map((item: NavbarItem) => (
                  <li key={item.label} role="listitem">
                    <NavLink
                      to={item.path}
                      onClick={handleNavbarItemClick}
                      className={({ isActive }) =>
                        `block w-full text-left text-lg py-2 px-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isActive
                            ? "bg-[#03081F] text-white"
                            : "text-black hover:text-blue-600 hover:bg-blue-50"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
