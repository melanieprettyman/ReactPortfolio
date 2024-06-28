import { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function HomePage() {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isInView ? { WebkitMaskImage: visibleMask, maskImage: visibleMask } : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
      transition={{ duration: 1, delay: .3 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      className="header"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: 'linear-gradient(90deg, hsla(339, 100%, 72%, 1) 0%, hsla(197, 100%, 64%, 1) 100%)'
      }}
    >
      <div className="main_nav">
        <div className="container">
          <div className="mobile-toggle"></div>
        </div>
      </div>
      <div className="title">
        <div><span className="typcn typcn-heart-outline icon heading"></span></div>
        <div className="smallsep heading"></div>
        <h1 className="heading"> Melanie Prettyman</h1>
        <h2 className="heading">I design awesome software</h2>
      </div>
    </motion.div>
  );
}
