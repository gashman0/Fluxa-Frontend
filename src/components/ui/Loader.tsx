import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#2D120D] z-50">
      <div className="flex items-center gap-3">
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            className="w-3 h-3 rounded-full bg-[#FFF8CA]"
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: dot * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;