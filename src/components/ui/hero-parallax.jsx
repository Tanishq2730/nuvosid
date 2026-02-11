"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [-700, 500]),
    springConfig
  );

  const mobileTranslateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 800 : 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? -800 : -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : 15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : 20, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[200vh] xxl:h-[250vh] xl:h-[300vh] lg:h-[300vh] md:h-[300vh] pt-10 pb-20 md:pb-32 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY: isMobile ? mobileTranslateY : translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse gap-8 md:gap-20 mb-10 md:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 md:mb-20 gap-8 md:gap-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse gap-8 md:gap-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
        OUR <br /> WORK
      </h1>
      <p className="max-w-2xl text-left text-base md:text-xl mt-4 md:mt-8 dark:text-neutral-200" style={{ textAlign: "left", padding: "0" }}>
        Turning visionary concepts into structural reality. From award-winning hospitality to complex industrial infrastructure, we deliver precision in every project.
      </p>
    </div>
  );
};


export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 w-[18rem] md:h-96 md:w-[30rem] relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-lg md:rounded-xl"
          alt={product.title}
          quality={75}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg md:rounded-xl"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-medium text-sm md:text-base">
        {product.title}
      </h2>
    </motion.div>
  );
};

