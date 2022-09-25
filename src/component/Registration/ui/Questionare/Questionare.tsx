import { useState } from "react";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import SlideOver from "../SlideOver";
import styles from "./Questionare.module.css";

const Questionare = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpen} className={styles.button}>
        Welcome
      </button>
      <SlideOver open={open} onClose={handleClose} fullScreen>
        <RegistrationPage />
      </SlideOver>
    </div>
  );
};

export default Questionare;
