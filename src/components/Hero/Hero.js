// import styles from "./Hero.module.scss";

// export default function Hero() {
//   return (
//     <section className={styles.hero}>
//       <div className="container">
//         <div className={styles.inner}>
//           <h1>
//             Building resilient futures
//             <br />
//             through design and engineering.
//           </h1>
//           <p>
//             Nuvosid delivers end-to-end Architecture, Engineering & Construction
//             services for ambitious clients.
//           </p>
//           <div className={styles.actions}>
//             <a href="/projects" className={styles.buttonPrimary}>View Projects</a>
//             <a href="/contact" className={styles.buttonSecondary}>Get in touch</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import styles from "./Hero.module.scss";
import { Section } from "lucide-react";

export default function Hero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const speedFactor = 0.4; // smaller means faster

const pathLengthFirst = useTransform(scrollYProgress, [0, speedFactor], [0.2, 1.2]);
const pathLengthSecond = useTransform(scrollYProgress, [0, speedFactor], [0.15, 1.2]);
const pathLengthThird = useTransform(scrollYProgress, [0, speedFactor], [0.1, 1.2]);
const pathLengthFourth = useTransform(scrollYProgress, [0, speedFactor], [0.05, 1.2]);
const pathLengthFifth = useTransform(scrollYProgress, [0, speedFactor], [0, 1.2]);


  return (
    <section>
      <div className={`${styles.heroBanner}`}>
        <div
          className="h-[170vh] w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
          ref={ref}
        >
          <GoogleGeminiEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
