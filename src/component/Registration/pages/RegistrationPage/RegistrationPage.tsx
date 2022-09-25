import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../../RegistrationContext";
import styles from "./RegistrationPage.module.css";

type Inputs = {
  gender: string;
  name: string;
  height: string;
  weight: string;
  goal: string;
};

const StartPage = () => {
  const { setUser } = useContext(RegistrationContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setUser(data);
    navigate("/signup");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <h2 className="text-[35px] lg:text-[45.94px] leading-[76.04px] text-secondary-500 font-[700]">
        Enter Your Info
      </h2>

      <input
        {...register("name")}
        className={styles.input}
        placeholder={"Name"}
      />

      <input
        {...register("weight")}
        className={styles.input}
        placeholder="Weight"
      />

      <input
        {...register("height")}
        className={styles.input}
        placeholder="Height"
      />

      <select
        {...register("gender")}
        className={styles.input}
        defaultValue={"Select A Gender"}
      >
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>

      <textarea
        {...register("goal")}
        className={styles.inputArea}
        placeholder={"Enter Your Goal"}
      />

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default StartPage;
