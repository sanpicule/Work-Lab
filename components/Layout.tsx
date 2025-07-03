import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutProps } from '@/types/types';
import { useRouter } from 'next/router';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <div className="bg-white text-gray-800">
      <NavBar />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          key={router.asPath}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear' }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
