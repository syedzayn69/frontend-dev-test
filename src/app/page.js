import Image from "next/image";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import PopularCities from "./components/PopularCities";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className=" max-w-screen-2xl m-auto flex flex-col justify-between">
        <Navbar />
      </div>
      <Slider />
      <div className=" max-w-screen-2xl m-auto flex flex-col justify-between">
        <Categories />
      </div>

      <div>
        <h1 className=" text-2xl text-center">Popular Cities In Texas</h1>
        <div className=" flex p-10 border-b max-w-screen-xl m-auto justify-center">
          <p className="pb-4 m-2 max-w-26 border-b text-purple-800">For Sale</p>
          <p className="pb-4 m-2 max-w-26 border-b">For Rent</p>
        </div>
      </div>
      <PopularCities />
      <Footer />
    </>
  );
}
