"use client";
import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  baseClassName?: string;
  classNameInView?: string;
  threshold?: number;
  rootMargin?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  baseClassName = "",
  classNameInView = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  id,
}) => {
  const { ref, isInView } = useInView({ threshold, rootMargin });

  return (
    <div
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all ease-out ${baseClassName} ${
        isInView ? classNameInView : className
      }`}
      style={{
        opacity: isInView ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};
