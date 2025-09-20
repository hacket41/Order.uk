import React from "react";
import type { MenuCategory, MenuItem } from "../assets/Data/menuData";
import { allMenuCategories } from "../assets/Data/menuData";

interface MenuListProps {
  menus?: MenuItem[];
}

const MenuList: React.FC<MenuListProps> = ({ menus }) => {
  // If menus is passed, group them manually; otherwise use all categories
  const groupedCategories: MenuCategory[] =
    menus && menus.length > 0
      ? [
          {
            title: "Custom Selection",
            items: menus,
          },
        ]
      : allMenuCategories;

  return (
    <div className="container mx-auto px-4 py-6">
      {groupedCategories.map((category) => (
        <div key={category.title} className="mb-10">
          {/* Category Title */}
          <div className="flex items-center mb-4">
            <h3 className="text-4xl font-bold text-gray-800 mr-4">
              {category.title}
            </h3>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {category.items.length === 0 ? (
            <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
              No items available in this category
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.items.map((menu: MenuItem) => (
                <div
                  key={menu.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col h-full"
                >
                  <div className="relative">
                    <img
                      src={menu.image}
                      alt={menu.name}
                      className="w-full h-40 object-cover"
                    />
                    {menu.isPopular && (
                      <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-900 text-base">
                        {menu.name}
                      </h4>
                      <p className="text-lg font-bold text-amber-600 whitespace-nowrap pl-2">
                        {menu.currency} {menu.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
                      {menu.description}
                    </p>
                    {menu.tags && menu.tags.length > 0 && (
                      <div className="mt-auto pt-2">
                        <div className="flex flex-wrap gap-1">
                          {menu.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Fallback if everything is empty */}
      {groupedCategories.every((cat) => cat.items.length === 0) && (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="text-gray-500 text-lg">No menu items available</div>
          <p className="text-gray-400 mt-2">Please check back later</p>
        </div>
      )}
    </div>
  );
};

export default MenuList;
