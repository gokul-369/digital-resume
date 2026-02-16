function Fade({
  children,
  start,
  variant = "fade-up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  start: boolean;
  variant?: "fade-down" | "fade-up" | "fade-left" | "fade-right";
  delay?: number;
  className?: string;
}) {
  const variantClasses = {
    "fade-down": `${start ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}`,
    "fade-up": `${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`,
    "fade-left": `${start ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`,
    "fade-right": `${start ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`,
  };
  return (
    <div
      className={`transition-all duration-1000 ease-out delay-${delay} ${
        variantClasses[variant] || variantClasses["fade-up"]
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Fade;
