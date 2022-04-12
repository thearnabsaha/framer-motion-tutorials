import { motion,AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from 'next/link';
const headingAnimation={
  starting:{
    x:"100vw",y:-10
  },
  ending:{fontSize:"50px",color:"#ff2994",x:100,y:-10, transition:{delay:1,duration:5,type:"spring",stiffness:120}},
}
const index = () => {
  const [showTitle, setShowTitle] = useState(true)
  return (
    <motion.div animate={{marginTop:"20px"}}>
      <motion.h2 variants={headingAnimation} initial="starting" animate="ending">arnab saha</motion.h2>
      <motion.button animate={{x:100}} whileHover={{scale:1.5,backgroundColor:"red",color:"white",border:"none", transition:{yoyo:Infinity,duration:0.4}}} onClick={()=>{setShowTitle(false)}}>Go</motion.button>
      <motion.button animate={{x:100}} whileHover={{scale:1.5,backgroundColor:"red",color:"white",border:"none", transition:{yoyo:Infinity,duration:0.4}}} onClick={()=>{setShowTitle(true)}}>Come</motion.button>
      <AnimatePresence>{showTitle && (<motion.h3 exit={{y:-1000,transition:{duration:1}}} initial={{y:-1000}} animate={{x:100,y:1}} transition={{duration:1,type:"tween"}}>pokemon</motion.h3>)}</AnimatePresence>
    </motion.div>
  );
}

export default index;