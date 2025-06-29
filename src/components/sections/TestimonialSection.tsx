"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function TestimonialSection() {
  return (
    <section className="w-full py-20 lg:py-24 relative bg-white">
      <div className="relative z-10 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="mb-12 text-center">
          <div className="text-sm uppercase text-yellow-600 tracking-widest font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            100% of Our Clients Trust Our Service
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our dedication to exceptional chauffeur services has earned us a
            reputation for trust, elegance, and reliability. Hear it directly
            from our clients.
          </p>
        </div>

        {/* Infinite Moving Testimonials */}
        <div className="h-[28rem] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "To be, or not to be, that is the question... To die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune...",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely...",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
