
import React from "react";
import { cn } from "@/lib/utils";

type GraphicElementProps = {
  type: "circle" | "square" | "dots" | "line";
  color?: "blue" | "pink" | "green" | "yellow" | "purple" | "peach";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const GraphicElement = ({ 
  type, 
  color = "blue", 
  size = "md", 
  className 
}: GraphicElementProps) => {
  // Map colors to Tailwind classes
  const colorClasses = {
    blue: "bg-pastel-blue",
    pink: "bg-pastel-pink",
    green: "bg-pastel-green",
    yellow: "bg-pastel-yellow",
    purple: "bg-pastel-purple",
    peach: "bg-pastel-peach",
  };
  
  // Map sizes to Tailwind classes
  const sizeClasses = {
    circle: {
      sm: "h-6 w-6 rounded-full",
      md: "h-12 w-12 rounded-full",
      lg: "h-24 w-24 rounded-full",
    },
    square: {
      sm: "h-6 w-6 rounded-md",
      md: "h-12 w-12 rounded-md",
      lg: "h-24 w-24 rounded-md",
    },
    dots: {
      sm: "h-6 w-6",
      md: "h-12 w-12",
      lg: "h-24 w-24",
    },
    line: {
      sm: "h-1 w-16",
      md: "h-1 w-32",
      lg: "h-1 w-48",
    },
  };

  // Render specific graphic type
  const renderGraphic = () => {
    switch (type) {
      case "circle":
      case "square":
        return (
          <div className={cn(
            colorClasses[color],
            sizeClasses[type][size],
            className
          )} />
        );
      case "dots":
        return (
          <div className={cn("grid grid-cols-3 gap-1", sizeClasses[type][size], className)}>
            {Array(9).fill(0).map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "rounded-full",
                  colorClasses[color],
                  size === "sm" ? "h-1 w-1" : size === "md" ? "h-2 w-2" : "h-4 w-4"
                )} 
              />
            ))}
          </div>
        );
      case "line":
        return (
          <div className={cn(
            colorClasses[color],
            sizeClasses[type][size],
            "rounded-full",
            className
          )} />
        );
      default:
        return null;
    }
  };

  return renderGraphic();
};

export default GraphicElement;
