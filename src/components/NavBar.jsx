import { Button } from "@/components/ui/button";

import { Home } from "lucide-react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-indigo-950/50 bg-black/80 text-indigo-50 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"} className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-indigo-400" />
          <span className="text-xl font-bold text-indigo-400">StayEase</span>
        </Link>
        <nav className="hidden space-x-10 md:flex">
          <NavItems text={"Home"} to={"/#home"} />
          <NavItems text={"Facilities"} to={"/#facilities"} />
          <NavItems text={"Rooms"} to={"/#rooms"} />
          <NavItems text={"About"} to={"/#about"} />
          <NavItems text={"Contact"} to={"/#contact"} />
        </nav>
        <Link to={"/signin"} className="items-center space-x-2">
          <Button
            size="md"
            className="transform rounded-full bg-indigo-700 px-7 py-2 text-white transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-800 hover:shadow-lg"
          >
            Sign in
          </Button>
        </Link>
      </div>
    </header>
  );
}

function NavItems({ text, to }) {
  return (
    <Link
      to={to}
      className="cursor-pointer text-sm font-medium transition-colors hover:text-indigo-400"
    >
      {text}
    </Link>
  );
}

export default NavBar;
