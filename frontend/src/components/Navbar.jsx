import { useState } from "react";
import { Link } from "react-router";

import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(true);

  return (
    <nav className="flex justify-between items-center sm:gap-10 px-5 sm:px-10 py-6 shadow-md">
      <div className="flex items-center justify-start w-full sm:max-w-[400px] gap-4 sm:gap-[2/5]">
        <Link to="/">
          <HiMenuAlt1 className="w-6 h-6 cursor-pointer" aria-label="Menu" />
        </Link>

        <div className="bg-[#EAEAEA] w-full min-w-40 h-9 flex items-center justify-start gap-5 px-3 py-2 rounded-md">
          <label htmlFor="search" className="cursor-pointer">
            <IoIosSearch className="w-6 h-6" aria-label="Search" />
          </label>
          <input
            id="search"
            type="text"
            placeholder="What are you looking for?"
            className="max-w-[296px] w-full font-secondary text-base pr-4 outline-0"
            aria-label="Search input"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {currentUser ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <LuUser
                className="w-6 h-6 hidden sm:flex cursor-pointer focus-visible:ring-0 focus:ring-0"
                aria-label="User"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer">
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Orders
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Cart page
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Checkout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>User</>
        )}

        <MdFavoriteBorder
          className="w-6 h-6 hidden sm:flex cursor-pointer"
          aria-label="Favorites"
        />
        <Link
          className="flex items-center justify-center sm:gap-4 h-9 sm:w-36 pl-5 sm:px-0 sm:bg-primary-regular py-0.5 rounded-lg text-black"
          aria-label="Cart"
          to="/cart"
        >
          <SlBasket className="w-6 h-6" aria-hidden="true" />
          <p className="hidden sm:flex">Cart</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
