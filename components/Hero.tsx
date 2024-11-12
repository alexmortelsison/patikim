import Image from "next/image";
import React from "react";
import SearchForm from "./SearchForm";

const Hero = ({}) => {
  return (
    <div className="flex items-center justify-center lg:absolute lg:mx-auto lg:ml-48 lg:px-0 px-24 lg:mt-0 pt-48 lg:pt-24">
      <section className="flex flex-col items-center justify-center lg:items-start">
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={300}
          height={300}
          className=""
        />
        <p className="text-muted-foreground font-semibold text-sm lg:text-lg text-center lg:text-start">
          "Savor the Heart and Soul of Filipino Food, Bringing Every Flavorful
          Dish and Tradition from Our Islands to Your Kitchen, One Recipe at a
          Time"
        </p>
        <SearchForm />
      </section>
      <section className="flex-1.5">
        <Image
          src={"/hero.png"}
          alt={"hero"}
          width={1200}
          height={1200}
          className="rounded-l-full overflow-hidden object-fit ml-24 hidden lg:flex relative border-l-lime-500 border-l-[80px]"
        />
      </section>
    </div>
  );
};

export default Hero;
