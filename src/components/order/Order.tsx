import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Order.module.scss";
import api from "../../../api/axiosInstance";
export type formProps = {
    fullName: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    postalCode: number,
    country: string,
    phoneNumber: number
}
const Order = () => {
      const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm<formProps>();
         const onSubmit: SubmitHandler<formProps> = (data) => {
            const formData = {
                shippingAddress:{
                fullName:data.fullName,
                addressLine1:data.addressLine1,
                addressLine2:data.addressLine2,
                city: data.city,
                state: data.state,
                postalCode: data.postalCode,
                country: data.country,
                phoneNumber: data.phoneNumber
                },
                status:"Pending"
            }
            api.post('https://nestjs-ecom.onrender.com/order',formData )
            .then((data) => { 
                if(data.data.data.message){
                    alert('Order already exist')
                } 
                else{
                    alert("Order created");
                } 
                reset()
            })
            .catch((error) => {
                alert(error.response?.data?.message)
                reset()
            });
         }
        //  useEffect(()=>{
        //     useEffect(()=>{
        //         api.get(`https://nestjs-ecom.onrender.com/cart?userid=${userId}`, {
        //                 headers: {
        //                   Authorization: `Bearer ${token}`,
        //                 },
        //               })
        //                 .then(({ data }) => {
        //                   console.log(data.data);
        //                   setCartItems(data.data.items);
        //                 })
        //                 .catch((error) => {
        //                   console.error('There was an error!', error);
        //                 });
        // },[])
        //  },[])
  return (
    <div className="container">
         <div className="row g-5 mt-3">
        {/* <div className="col-md-6 d-flex justify-content-center align-items-center">
         <img src={signupimg} className="img-fluid"/>
        </div> */}
        <div className={`d-flex justify-content-center align-items-center ${styles.form}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Enter your shipping address</h3><br/>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("fullName", { required: "first name is required" })}/>
{errors.fullName && <p className={styles.error}>{errors.fullName.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Addressline1</label>
    <input type="textArea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("addressLine1", { required: "Address line is required" })}/>
    {errors.addressLine1 && <p className={styles.error}>{errors.addressLine1.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail2" className="form-label">Addressline2</label>
    <input type="textArea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("addressLine2")}/>
    {errors.addressLine2 && <p className={styles.error}>{errors.addressLine2.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail3" className="form-label">City</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("city", { required: "City is required" })}/>
{errors.city && <p className={styles.error}>{errors.city.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail4" className="form-label">State</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("state", { required: "State is required" })}/>
{errors.state && <p className={styles.error}>{errors.state.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail5" className="form-label">Postal code</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("postalCode", { required: "Postal code is required" })}/>
{errors.postalCode && <p className={styles.error}>{errors.postalCode.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail6" className="form-label">Country</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("country", { required: "Country is required" })}/>
{errors.country && <p className={styles.error}>{errors.country.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail7" className="form-label">Phone number</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("phoneNumber", { required: "Phone number is required" })}/>
{errors.phoneNumber && <p className={styles.error}>{errors.phoneNumber.message}</p>}
  </div>
  <button type="submit" className="btn btn-primary w-100">Create</button>
</form>
        </div>
        </div>

    </div>
  )
}

export default Order