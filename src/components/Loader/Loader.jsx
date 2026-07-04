import { motion } from "framer-motion";
import "./Loader.css";

function Loader() {
    return (
        <div className="loader-wrapper">
            <motion.div
                className="loader-logo"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                A
            </motion.div>
        </div>
    );
}

export default Loader;