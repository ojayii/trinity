import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Your Headline Here</h1>
      <div className="cta-buttons">
        <motion.button whileHover={{ scale: 1.05 }}>Primary</motion.button>
        <motion.button whileHover={{ scale: 1.05 }}>Secondary</motion.button>
      </div>
    </motion.section>
  );
};