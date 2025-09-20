import { useNavigate } from "react-router";
import heroBack from "../assets/heroback.jpg";
import MenuList from "../detailcomponents/MenuList";

export default function MenuPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative h-[40vh] min-h-[300px] max-h-[500px] w-full mb-8">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-lg"></div>
        <div className="h-full w-full overflow-hidden rounded-lg">
          <img
            src={heroBack}
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Our Menu
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-2xl drop-shadow-lg">
            Discover our delicious offerings crafted with passion
          </p>
          <button
            onClick={() => navigate("/details")}
            className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
          >
            ORDER NOW
          </button>
        </div>
      </div>
      <MenuList menus={[]} />
    </>
  );
}
