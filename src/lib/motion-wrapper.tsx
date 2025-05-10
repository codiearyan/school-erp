"use client";

import React from "react";

// Mock motion implementation for simplified animations
interface MotionProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
  variants?: any;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

// Create a basic implementation of motion components
function createMotionComponent(Component: any) {
  return React.forwardRef<HTMLElement, MotionProps>(
    ({ children, className, style, ...props }, ref) => {
      return (
        <Component
          ref={ref}
          className={className}
          style={{
            ...style,
            transition: "all 0.3s ease",
          }}
          {...props}
        >
          {children}
        </Component>
      );
    }
  );
}

// Create basic motion components
export const motion = {
  div: createMotionComponent("div"),
  span: createMotionComponent("span"),
  button: createMotionComponent("button"),
  a: createMotionComponent("a"),
  ul: createMotionComponent("ul"),
  li: createMotionComponent("li"),
  p: createMotionComponent("p"),
  h1: createMotionComponent("h1"),
  h2: createMotionComponent("h2"),
  h3: createMotionComponent("h3"),
  h4: createMotionComponent("h4"),
  img: createMotionComponent("img"),
  section: createMotionComponent("section"),
  article: createMotionComponent("article"),
  header: createMotionComponent("header"),
  footer: createMotionComponent("footer"),
  main: createMotionComponent("main"),
  nav: createMotionComponent("nav"),
};