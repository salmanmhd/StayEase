import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Home,
  Users,
  Shield,
  Coffee,
  Wifi,
  DollarSign,
  Dumbbell,
  Table,
  Gamepad2,
  Utensils,
  Sparkles,
  MapIcon,
  Wrench,
} from "lucide-react";
import NavBar from "../components/NavBar";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Homepage() {
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const facilitiesRef = useRef(null);
  const roomsRef = useRef(null);
  const aboutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#facilities" && facilitiesRef.current) {
      facilitiesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#rooms" && roomsRef.current) {
      roomsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div ref={homeRef} className="min-h-screen bg-black text-gray-300">
      <NavBar />
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Add your background image here */}
          {/* <img src="../assets/" */}
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/95 to-indigo-950/20"></div>
        <div className="relative z-20 mx-auto max-w-4xl space-y-8 px-4 text-center">
          <h1 className="animate-gradient-x bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-6 text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Welcome to StayEase
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400 sm:text-2xl">
            Experience luxury living with comfort, convenience, and an active
            lifestyle. Your perfect PG solution awaits.
          </p>
          <Link
            to="/signup"
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              size="xl"
              variant="outline"
              className="mt-2 transform rounded-full border-indigo-700 bg-indigo-950/50 px-12 py-3 text-xl text-indigo-100 transition-all duration-300 hover:scale-105 hover:border-2 hover:bg-indigo-900 hover:text-indigo-100"
            >
              Get Started
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-indigo-100">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Spacious Rooms",
                description:
                  "Single, double, and triple-sharing options available, each room designed for comfort.",
              },
              {
                icon: DollarSign,
                title: "Best Price",
                description:
                  "Competitive rates in the market without compromising on quality.",
              },
              {
                icon: Shield,
                title: "24/7 Security",
                description:
                  "Your safety is our priority. We provide round-the-clock surveillance and security.",
              },
              {
                icon: Wifi,
                title: "High-Speed Wi-Fi",
                description:
                  "Stay connected with our complimentary high-speed internet.",
              },
              {
                icon: Utensils,
                title: "Delicious Meals",
                description:
                  "Nutritious and home-cooked meals served daily to keep you healthy and energized.",
              },
              {
                icon: Sparkles,
                title: "Housekeeping Services",
                description:
                  "Cleanliness is key! Regular housekeeping ensures a tidy and fresh environment.",
              },
              {
                icon: MapIcon,
                title: "Prime Location",
                description:
                  "Situated in the heart of Noida, close to major landmarks and institutions.",
              },
              {
                icon: Wrench,
                title: "Maintenance Support",
                description:
                  "Our maintenance team is just a call away for any repairs or issues.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="animate-fade-up border-indigo-900/50 bg-indigo-950/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <feature.icon className="mb-2 h-8 w-8 text-indigo-400" />
                  <CardTitle className="text-indigo-100">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section ref={facilitiesRef} id="facilities" className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-indigo-100">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Coffee,
                title: "Common Areas",
                description:
                  "Spacious common areas for relaxation and socializing.",
              },
              {
                icon: Dumbbell,
                title: "Fitness Center",
                description: "Stay fit with our fully-equipped gym.",
              },
              {
                icon: Table,
                title: "Sports Facilities",
                description: "Enjoy table tennis, badminton, and more.",
              },
              {
                icon: Gamepad2,
                title: "Indoor Games",
                description:
                  "Relax with chess, carrom, and other indoor games.",
              },
              {
                icon: Utensils,
                title: "Dining Area",
                description:
                  "Comfortable dining space for enjoying your meals.",
              },
              {
                icon: Sparkles,
                title: "Laundry Services",
                description: "On-site laundry facilities for your convenience.",
              },
            ].map((facility, index) => (
              <Card
                key={index}
                className="animate-fade-up border-indigo-900/50 bg-indigo-950/30 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <facility.icon className="mb-2 h-8 w-8 text-indigo-400" />
                  <CardTitle className="text-indigo-100">
                    {facility.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {facility.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section
        ref={roomsRef}
        id="rooms"
        className="bg-indigo-950/20 py-24 sm:py-32"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-indigo-100">
            Our Rooms
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {["Single", "Double", "Triple"].map((roomType, index) => (
              <Card
                key={index}
                className="overflow-hidden border-indigo-900/50 bg-indigo-950/30"
              >
                <div className="flex h-48 items-center justify-center bg-indigo-900/30">
                  <span className="text-lg text-indigo-200">
                    {roomType} Room
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-indigo-100">
                    {roomType} Room
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    Comfortable {roomType.toLowerCase()}-sharing accommodation
                    with modern amenities.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-indigo-100">
            About StayEase
          </h2>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-gray-300">
                StayEase is more than just a PG; it&#39;s a community where
                comfort meets convenience. We understand the needs of students
                and young professionals, and we&#39;ve crafted our living spaces
                to cater to those needs.
              </p>
              <p className="mb-4 text-gray-300">
                Our mission is to provide a home away from home, where you can
                focus on your goals while we take care of your living needs.
                With our prime location, top-notch facilities, and commitment to
                your well-being, StayEase is the perfect choice for your stay in
                Noida.
              </p>
              <Button className="bg-indigo-700 text-indigo-100 hover:bg-indigo-600">
                Learn More
              </Button>
            </div>
            <div className="relative flex h-64 items-center justify-center rounded-lg bg-indigo-950/30 md:h-auto">
              <span className="text-lg text-indigo-200">About StayEase</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="bg-indigo-950/20 py-24 sm:py-32"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-indigo-100">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-indigo-900/50 bg-indigo-950/30">
              <CardHeader>
                <CardTitle className="text-indigo-100">Get in Touch</CardTitle>
                <CardDescription className="text-gray-400">
                  We&#39;d love to hear from you. Send us a message and
                  we&#39;ll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="border-indigo-900 bg-indigo-950/50 text-gray-200 placeholder:text-gray-500"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="border-indigo-900 bg-indigo-950/50 text-gray-200 placeholder:text-gray-500"
                  />
                  <Input
                    placeholder="Subject"
                    className="border-indigo-900 bg-indigo-950/50 text-gray-200 placeholder:text-gray-500"
                  />
                  <textarea
                    className="min-h-[100px] w-full rounded-md border border-indigo-900 bg-indigo-950/50 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black"
                    placeholder="Your Message"
                  ></textarea>
                  <Button
                    type="submit"
                    className="w-full bg-indigo-700 text-indigo-100 hover:bg-indigo-600"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="border-indigo-900/50 bg-indigo-950/30">
              <CardHeader>
                <CardTitle className="text-indigo-100">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-300">
                    123 PG Street, Noida, Uttar Pradesh
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-300">+91 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-300">info@stayease.com</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-950 bg-black">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-8 sm:flex-row">
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-indigo-400" />
            <span className="text-xl font-bold text-indigo-400">HomeSpace</span>
          </div>
          <div className="mt-4 text-sm text-gray-500 sm:mt-0">
            © 2024 HomeSpace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
