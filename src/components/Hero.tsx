import { motion } from "framer-motion";
import { buttons } from "../constants";
import MoodButtons from "../ui/MoodButtons";
import { routeMap } from "../constants";



const HeroSection = () => {
    

   return (
     <section className="min-h-screen flex flex-col items-center justify-start px-4 md:px-6 py-16 md:py-20 text-center font-main">
       <div className="h-[60%] md:h-[40%]">
         <motion.h1
           className="text-4xl md:text-5xl font-bold mb-14 text-white/80"
           initial={{ opacity: 0, y: -30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
           Barten<span className="text-indigo-400">Day</span> HQ <br />{" "}
           <span className="text-2xl">THE ULTIMATE COCKTAIL BIBLE!</span>
         </motion.h1>
         <motion.p
           className="md:text-lg text-gray-400 md:max-w-4xl w-full mb-8"
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
         >
           Yo, listen up! I'm the ghost of Derby parties past, your personal Chaos Cocktail Commander. These ain't
           your grandma's drinks - these are weaponized flavor bombs that'll
           make your tastebuds do the electric slide! So grab your cocktail shaker, put on your best party hat,
           and let's dive into the world where every drink is a story waiting to
           be told!
         </motion.p>

         <motion.p
           className="text-xl md:text-3xl text-indigo-400 md:max-w-4xl w-full mb-8"
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
         >
           Choose your Vibe and let’s get mixing!
         </motion.p>
       </div>

       <MoodButtons buttons={buttons} routeMap={routeMap} />
     </section>
   );
};

export default HeroSection;
