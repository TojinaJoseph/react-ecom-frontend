import styles from "./SignIn.module.scss";
import signupimg from "../../assets/dl.beatsnoop 1.png";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
export type formProps = {
  email: string;
  password: string;
};
const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>();
  const onSubmit: SubmitHandler<formProps> = (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("https://nestjs-ecom.onrender.com/auth/sign-in", formData)
      .then(({ data }) => {
        reset();
        const { accessToken, refreshToken } = data.data;
        // Save to localStorage (or cookies)
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        const decoded: any = jwtDecode(accessToken);
        const role = decoded.role;
        localStorage.setItem("role", role);
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.response?.data?.message);
        reset();
      });
  };

  return (
    <div className={`container ${styles.signinContainer}`}>
      <div className="row g-5 mt-3">
        <div
          className={`col-md-6 d-flex justify-content-center align-items-center ${styles.img}`}
        >
          <img src={signupimg} className="img-fluid" />
        </div>
        <div
          className={`col-md-6 d-flex justify-content-center align-items-center ${styles.form}`}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Log In to MegaMart</h3>
            <br />

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                {...register("password", {
                  required: "password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Invalid password",
                  },
                })}
              />
              {errors.password && (
                <p className={styles.error}>{errors.password.message}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
