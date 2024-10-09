import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Aos() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return null;
}

export default Aos;
