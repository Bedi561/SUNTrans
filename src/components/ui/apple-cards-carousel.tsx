"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  // IconArrowNarrowLeft,
  // IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => { },
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  // const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  // const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      // checkScrollability();
    }
  }, [initialScroll]);

  // const checkScrollability = () => {
  //   if (carouselRef.current) {
  //     const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
  //     setCanScrollLeft(scrollLeft > 0);
  //     setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  //   }
  // };

  // const scrollLeft = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  //   }
  // };

  // const scrollRight = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //   }
  // };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="w-full flex justify-start py-10 overflow-x-auto md:py-20 md:justify-center"
          ref={carouselRef}
        // onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-8 pl-4 md:justify-center md:pl-0",
              "mx-auto w-7xl",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        {/* Navigation buttons - commented out */}
        {/* <div className="mr-10 flex justify-end gap-2">
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
            </button>
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
            </button>
          </div> */}
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
       {open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Enhanced backdrop with better blur and transition */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 bg-black/60 backdrop-blur-md"
      onClick={handleClose}
    />
    
    {/* Improved modal container */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.23, 1, 0.32, 1],
        layout: { duration: 0.3 }
      }}
      ref={containerRef}
      layoutId={layout ? `card-${card.title}` : undefined}
      className="relative z-[60] w-full max-w-4xl max-h-[90vh] bg-[#1F2937] shadow-2xl overflow-hidden dark:bg-neutral-900 dark:shadow-black/50"
    >
      {/* Enhanced header with better positioning */}
      <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#1F2937] backdrop-blur-sm border-b border-neutral-200 dark:bg-neutral-900/95 dark:border-neutral-700">
        <div className="flex-1">
          <motion.p
            layoutId={layout ? `category-${card.title}` : undefined}
            className="text-sm font-medium text-neutral-100 uppercase tracking-wider dark:text-neutral-400"
          >
            {card.category}
          </motion.p>
          <motion.h2
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-1 text-2xl font-bold text-neutral-900 md:text-3xl dark:text-white"
          >
            {card.title}
          </motion.h2>
        </div>
        
        {/* Enhanced close button */}
        <button
          onClick={handleClose}
          className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-all duration-200 hover:bg-neutral-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
          aria-label="Close modal"
        >
          <IconX className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
        </button>
      </div>
      
      {/* Improved content area with better scrolling */}
      <div className="overflow-y-auto max-h-[calc(90vh-140px)] custom-scrollbar">
        <div className="p-6 md:p-8">
          {card.content}
        </div>
      </div>
    </motion.div>
    
    {/* Custom scrollbar styles */}
    <style jsx>{`
      .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #d1d5db;
        border-radius: 3px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #9ca3af;
      }
      .dark .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #4b5563;
      }
      .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #6b7280;
      }
    `}</style>
  </div>
)}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        whileHover={{
          scale: 1.05,
          rotateX: 5,
          rotateY: -5,
          transition: { duration: 0.1 }, // Smooth, quick response
        }}
        whileTap={{ scale: 0.98 }}
        className="relative z-10 flex h-72 w-56 sm:h-80 sm:w-64 md:h-96 md:w-72 lg:h-[28rem] lg:w-[20rem] overflow-hidden shadow-xl transition-all duration-300 bg-white dark:bg-neutral-900"
      >
        <motion.div
          className="absolute inset-0 border-2 border-transparent z-50"
          whileHover={{
            borderColor: '#9F96FF',
            boxShadow: `0 0 30px rgba(159, 150, 255, 0.3)`
          }}
          transition={{ duration: 0.3 }}
        />
        <div className="pointer-events-none absolute inset-0 z-30 h-full w-full bg-black/50" />

        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>

        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.button>

    </>
  );
};
export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};