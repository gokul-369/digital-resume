import { motion } from "framer-motion";
export default function MovingGradient() {
  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0
  bg-[radial-gradient(800px_circle_at_50%_50%,rgba(99,102,241,0.22),transparent_70%)]"
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
      />
    </div>
  );
}
