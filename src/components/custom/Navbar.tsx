import { FC } from "react";

const Navbar: FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">GOODEE</div>
        <nav className="flex gap-4">
          {["Holiday", "Best Sellers", "New Arrivals", "Gifts", "Garden", "Household", "Decor", "Dining", "Furniture", "Lifestyle"].map((item) => (
            <a key={item} href="#" className="text-gray-700 hover:text-black">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;