import { useState } from "react";
import { Link } from "react-router";
import avatar from "@/assets/avatar.png";

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
import { useSelector } from "react-redux";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(true);

  const cartItems = useSelector((state) => state.cart.cartItems);

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
              <img
                className="w-6 h-6 hidden sm:flex cursor-pointer focus-visible:ring-0 focus:ring-0"
                aria-label="User"
                src={avatar}
                alt="avatar"
                srcSet=""
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
          <Link to="/login">
            <LuUser
              className="w-6 h-6 hidden sm:flex cursor-pointer focus-visible:ring-0 focus:ring-0"
              aria-label="User"
            />
          </Link>
        )}

        <MdFavoriteBorder
          className="w-6 h-6 hidden sm:flex cursor-pointer"
          aria-label="Favorites"
        />
        <Link
          className={`flex items-center justify-center gap-4 h-9 sm:w-36 sm:px-0 ${
            cartItems.length > 0
              ? "bg-primary-regular p-2"
              : "sm:bg-primary-regular sm:p-4"
          }  py-0.5 rounded-lg text-black`}
          aria-label="Cart"
          to="/cart"
        >
          <SlBasket className={cartItems.length > 0 ? "size-5" : "size-6"} aria-hidden="true" />

          {cartItems.length > 0 ? (
            <p className="flex">{cartItems.length}</p>
          ) : (
            <p className="hidden sm:flex">Cart</p>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
