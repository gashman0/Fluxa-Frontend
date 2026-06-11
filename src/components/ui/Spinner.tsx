import { motion } from "framer-motion";

const Spinner = ({ size = 20 }) => {
  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-full border-2 border-[#642409]"
      />

      <motion.div
        className="absolute inset-0 rounded-full border-t-2 border-[#FFF8CA]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Spinner;