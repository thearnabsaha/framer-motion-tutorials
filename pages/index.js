import { motion } from "framer-motion"
const buttonAnimation={
  whileHover:{scale:1.5,backgroundColor:"red",color:"white",border:"none"},
  ending:{x:100},
}
const headingAnimation={
  starting:{
    x:"100vw",y:-10
  },
  ending:{fontSize:"50px",color:"#ff2994",x:100,y:-10, transition:{delay:1,duration:5,type:"spring",stiffness:120}},
  
}
const index = () => {
  return (
    <motion.div animate={{marginTop:"20px"}}>
      <motion.h2 variants={headingAnimation} initial="starting" animate="ending">arnab saha</motion.h2>
      <motion.button variants={buttonAnimation} animate="ending">submit</motion.button>
    </motion.div>
  );
}

export default index;