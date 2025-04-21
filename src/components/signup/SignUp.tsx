import styles from "./SignUp.module.scss";
import signupimg from "../../assets/dl.beatsnoop 1.png";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export type formProps = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
const SignUp = () => {
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<formProps>();

    const onSubmit: SubmitHandler<formProps> = (data) => {
        const formData = {
            firstName:data.firstName,
            lastName:data.lastName,
            email: data.email,
            password: data.password,
            role:"user"
        }
        axios.post('https://nestjs-ecom-api.onrender.com/users',formData )
            .then(() => {    
                alert("User created successfully");
                reset()
                navigate("/signin");
            })
            .catch((error) => {
                alert(error.response?.data?.message)
                reset()
            });
    }
  return (
    <div className={styles.signupContainer}>
        <div className="img ">
         <img src={signupimg}/>
        </div>
        <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Create an account</h3><br/>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("firstName", { required: "first name is required" })}/>
{errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("lastName", { required: "last name is required" })}/>
    {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email", {
                            required: "Email is required", pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}/>
     {errors.email && <p className={styles.error}>{errors.email.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" {...register("password", {
                            required: "password is required", pattern: {
                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "Invalid password"
                            }
                        })}/>
                        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
  </div>
  <button type="submit" className="btn btn-primary w-100">Create Account</button>
</form>
        </div>
    </div>
  )
}

export default SignUp