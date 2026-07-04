import { motion } from "framer-motion";
import Aklogo from "../../assets/Logo.png";
import "./PageLoader.css";

function PageLoader() {
    return (
        <motion.div
            className="loader-wrapper"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="loader-content">
                <div className="loader-circle">
                    <div className="loader-ring"></div>
                    <img
                        src={Aklogo}
                        alt="Logo"
                        className="loader-logo"
                    />
                </div>
                <p>Loading Portfolio...</p>
            </div>
        </motion.div>
    );
}

export default PageLoader;