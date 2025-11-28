// src/ui/MoodButtons.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface MoodButtonsProps {
  buttons: string[];
  routeMap?: Record<string, string>; // optional for navigation
  onClick?: (label: string) => void; // optional for single-page interactions
  containerClassName?: string;
  buttonClassName?: string;
}

const MoodButtons = ({
  buttons,
  routeMap,
  onClick,
  containerClassName = "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl w-full",
  buttonClassName = "px-6 py-3 h-14 md:h-20 rounded-md backdrop-blur-sm border border-white/20 text-white/80 font-medium cursor-pointer transition duration-300 ease-out hover:backdrop-blur-md hover:border-white/30",
}: MoodButtonsProps) => {
  const navigate = useNavigate();

  const handleButtonClick = (label: string) => {
    // Call onClick if provided (single-page interaction)
    if (onClick) {
      onClick(label);
      return;
    }

    // Otherwise navigate using routeMap if provided
    if (routeMap && routeMap[label]) {
      navigate(routeMap[label]);
    }
  };

  return (
    <motion.div
      className={containerClassName}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.55,
            delayChildren: 0, // no delay when used in mood pages
          },
        },
      }}
    >
      {buttons.map((label) => (
        <motion.button
          key={label}
          onClick={() => handleButtonClick(label)}
          className={buttonClassName}
          whileHover={{
            boxShadow: "0 0 6px rgba(127,156,245,0.6)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          aria-label={label}
        >
          {label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default MoodButtons;
