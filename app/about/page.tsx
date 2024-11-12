import { Facebook, FacebookIcon, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className="lg:flex lg:absolute lg:mx-auto lg:ml-48 lg:px-0 px-12 lg:mt-24 mt-44 sm:mt-12 items-center justify-center">
      <section className="lg:justify-center md:flex md:flex-col md:items-center lg:items-start">
        <Image src={"/logo.png"} alt={"logo"} width={300} height={300} />
        <p className="text-muted-foreground font-semibold text-sm lg:text-lg text-center lg:text-start lg:w-[800] mb-4 tracking-tighter">
          Welcome to Patikim, your gateway to the rich and vibrant world of
          Filipino cooking! Our blog celebrates the heart and soul of Filipino
          cuisine, known for its unique blend of flavors, textures, and cultural
          influences. Here, we share cherished recipes that have been passed
          down through generations, as well as modern takes on classic dishes,
          all designed to give you a taste of the Philippines, right in your own
          kitchen. From hearty stews like adobo and sinigang to sweet treats
          like halo-halo and bibingka, each recipe on Patikim is crafted to
          bring the warmth and spirit of Filipino hospitality to your table.
          Whether you’re a seasoned cook or a curious foodie, our step-by-step
          guides make it easy to dive into the delicious world of Filipino
          cooking. So come along and tikman (taste) the flavors of the
          Philippines with us!
        </p>
        <div className="flex gap-2 font-bold items-center justify-center lg:justify-start mt-12">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </section>
      <section className="flex-1.5">
        <Image
          src={"/about-bg.png"}
          alt={"hero"}
          width={1200}
          height={1200}
          className="rounded-l-full overflow-hidden object-fit hidden lg:flex relative h-[40vw]"
        />
      </section>
    </div>
  );
};

export default About;
