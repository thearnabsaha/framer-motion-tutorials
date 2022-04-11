import { motion } from "framer-motion"
const index = () => {
  return (
    <motion.div animate={{marginTop:"20px"}}>
      <motion.h2 initial={{x:"100vw",y:-10}} animate={{fontSize:"50px",color:"#ff2994",x:100,y:-10}}transition={{delay:1,duration:5,type:"spring",stiffness:120}} >arnab saha</motion.h2>
      <motion.button animate={{rotateZ:180}} >submit</motion.button>
    </motion.div>
  );
}

export default index;