import { Button } from "@/components/ui/button";

import { Home } from "lucide-react";
function NavBar({
  scrollToSection,
  contactRef,
  homeRef,
  aboutRef,
  roomsRef,
  facilitiesRef,
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-indigo-950/50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <p className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-indigo-400" />
          <span className="text-xl font-bold text-indigo-400">StayEase</span>
        </p>
        <nav className="hidden space-x-10 md:flex">
          <NavItems
            text={"Home"}
            scrollToSection={scrollToSection}
            refSection={homeRef}
          />
          <NavItems
            text={"Facilities"}
            scrollToSection={scrollToSection}
            refSection={facilitiesRef}
          />
          <NavItems
            text={"About"}
            scrollToSection={scrollToSection}
            refSection={aboutRef}
          />
          <NavItems
            text={"Contact"}
            scrollToSection={scrollToSection}
            refSection={contactRef}
          />
        </nav>
        <Button
          size="md"
          className="transform rounded-full bg-indigo-700 px-7 py-2 text-white transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-800 hover:shadow-lg"
        >
          Sign in
        </Button>
      </div>
    </header>
  );
}

function NavItems({ text, scrollToSection, refSection }) {
  return (
    <p
      className="cursor-pointer text-sm font-medium transition-colors hover:text-indigo-400"
      onClick={() => scrollToSection(refSection)}
    >
      {text}
    </p>
  );
}

export default NavBar;
