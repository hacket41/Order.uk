// menuData.ts
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const mockBurgersData: MenuItem[] = [
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
    name: "Big Mac Special",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 23.1,
    currency: "GBP",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "4",
    name: "Deluxe Combo",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 23.1,
    currency: "GBP",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "5",
    name: "Premium Burger",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 23.1,
    currency: "GBP",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "6",
    name: "Ultimate Feast",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 23.1,
    currency: "GBP",
    image:
      "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=200&h=200&fit=crop&auto=format",
  },
];

export const mockFriesData: MenuItem[] = [
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
    description: "Seasoned fries with cajun spices and served with spicy mayo",
    price: 5.9,
    currency: "GBP",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=200&h=200&fit=crop&auto=format",
  },
];

export const mockPizzaData: MenuItem[] = [
  {
    id: "13",
    name: "Margherita Pizza",
    description:
      "Fresh mozzarella, tomato sauce, basil, olive oil on crispy crust",
    price: 18.5,
    currency: "GBP",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop&auto=format",
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

export const mockDrinksData: MenuItem[] = [
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
export const allMenuCategories: MenuCategory[] = [
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

// Helper functions to get menu data
export const getAllMenuItems = (): MenuItem[] => {
  return allMenuCategories.flatMap((category) => category.items);
};

export const getMenuItemsByCategory = (categoryTitle: string): MenuItem[] => {
  const category = allMenuCategories.find((cat) => cat.title === categoryTitle);
  return category?.items || [];
};

export const getMenuItemById = (id: string): MenuItem | undefined => {
  return getAllMenuItems().find((item) => item.id === id);
};
