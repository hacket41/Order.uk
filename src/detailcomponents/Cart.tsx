import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import forwardButton from "../assets/images/forwardButton.png";
import { clearCart, removeFromCart } from "../redux/slices/cartSlice";
import type { RootState } from "../redux/store";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // get cart items from Redux store
  const {items} = useSelector((state: RootState) => state.cart);
  const currency = "GBP";

  // calculate totals dynamically
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce(
    (sum, item) => sum + (item.price ?? 0) * item.quantity,
    0
  );

  const onCartClick = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Cart Bar */}
      <div className="hidden lg:flex bg-green-600 items-center h-full rounded-b-[12px] divide-x divide-white/40">
        {/* Cart Items Count */}
        <button
          onClick={onCartClick}
          className="flex items-center gap-2 text-white px-3 h-full hover:bg-green-700 hover:rounded-[12px] transition-all"
        >
          <ShoppingCart size={20} className="text-white" />
          <span className="font-medium">{totalItems} Items</span>
        </button>

        {/* Cart Total */}
        <div className="flex items-center text-white px-3 h-full">
          <span className="font-medium">
            {currency} {total.toFixed(2)}
          </span>
        </div>

        {/* Forward Icon */}
        <button
          onClick={onCartClick}
          className="flex items-center justify-center px-3 h-full hover:bg-green-700 hover:rounded-[12px] transition-all"
        >
          <img
            src={forwardButton}
            alt="forward"
            className="w-[38px] h-[38px] object-contain"
          />
        </button>
      </div>

      {/* Mobile Cart Button */}
      <div className="lg:hidden basis-1/2 flex items-center justify-center bg-green-500 p-4">
        <button onClick={onCartClick}>
          <img
            src="./cart.png"
            alt="Cart"
            className="w-[40px] h-[40px] object-contain"
          />
        </button>
      </div>

      {/* Cart Drawer */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4 z-50">
          <button onClick={onCartClick} className="text-red-500 font-bold mb-4">
            Close
          </button>
          <h2 className="text-lg font-bold">Your Cart</h2>
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="py-2">
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span>
                      {item.quantity} × {currency}{" "}
                      {item.price?.toFixed(2) || "0.00"}
                    </span>
                  </div>
                  <button
                    className="text-sm text-red-500"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex justify-between">
            <p className="font-bold">
              Total: {currency} {total.toFixed(2)}
            </p>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => dispatch(clearCart())}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </>
  );
}
