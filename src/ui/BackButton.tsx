// src/ui/BackButton.tsx
import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "/icons/undo.svg?url";

interface BackButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  to?: string; // specific path or use history back
  /** className applied to the outer container (same as passing `className`) */
  containerClassName?: string;
  /** className applied to the inner button */
  buttonClassName?: string;
  /** optional extra props to spread on the button element */
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const BackButton = forwardRef<HTMLDivElement, BackButtonProps>(function BackButton(
  {
    to,
    containerClassName = "md:max-w-md",
    buttonClassName =
      "px-10 md:px-6 h-12 rounded-md backdrop-blur-sm border border-white/20 text-white/80 font-medium cursor-pointer transition duration-300 ease-out hover:backdrop-blur-md hover:border-white/30 flex items-center",
    className,
    buttonProps,
    ...rest
  },
  ref
) {
  const navigate = useNavigate();
  const { mood } = useParams<{ mood?: string }>();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // call any provided onClick first
    if (buttonProps && typeof buttonProps.onClick === "function") {
      (buttonProps.onClick as React.MouseEventHandler<HTMLButtonElement>)(e);
    }

    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  // Dynamic button text based on context
  const buttonText = mood ? `Back to ${mood.replace("-", " ")} Vibe` : "Back to Home";

  const outerClasses = `${containerClassName} ${className ?? ""}`.trim();

  return (
    <motion.div
      ref={ref}
      className={outerClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8}}
      {...(rest as unknown as React.ComponentProps<typeof motion.div>)}
    >
      <motion.button
        type="button"
        onClick={handleClick}
        className={buttonClassName}
        whileHover={{ boxShadow: "0 0 6px rgba(127,156,245,0.6)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        {...(buttonProps as unknown as React.ComponentProps<typeof motion.button>)}
      >
        {/* Left arrow SVG */}
        <img src={Icon} alt="Left Arrow" className="w-6 h-6 md:w-8 md:h-8h-8 mr-5" />

        <span className="text-sm md:text-md md:pt-1">{buttonText}</span>
      </motion.button>
    </motion.div>
  );
});

BackButton.displayName = "BackButton";

export default BackButton;
