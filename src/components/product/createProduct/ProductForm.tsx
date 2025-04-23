
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./productForm.module.scss"
import { useEffect } from "react";
import api from "../../../../api/axiosInstance";

export type formProps = {
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  slug: string,
  rate?: number
} 
const ProductForm = () => {
  const token = localStorage.getItem('accessToken');
  const navigate=useNavigate()
  const {
      register,
      handleSubmit,
      reset,
      setValue,
      watch,
      formState: { errors },
  } = useForm<formProps>();
  const titleValue = watch('title');
  
  const onSubmit: SubmitHandler<formProps> = (data) => {

    const formData = new FormData();

    // Append all form fields
    formData.append('title', data.title);
    formData.append('price', data.price.toString());
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('slug', data.slug);
    data.rate&&formData.append('rate', data.rate.toString());
    formData.append('image', data.image[0]); //  Send actual file

    api.post('https://nestjs-ecom.onrender.com/products',formData,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    } )
        .then(() => {    
            alert("Product created successfully");
            reset()
            navigate("/");
        })
        .catch((error) => {
            alert(error.response?.data?.message)
            reset()
        });


        

}

const createSlug=(title:string):string =>{
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Update slug when title changes
useEffect(() => {
if (titleValue !== undefined) {
setValue('slug', createSlug(titleValue));
}
}, [titleValue, setValue]);
  return (
    <div className="container mt-5">
        <h5>Add Product</h5>
        <form className="row g-3 mt-4" onSubmit={handleSubmit(onSubmit)}>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Title</label>
    <input type="text" className="form-control" id="inputEmail5" {...register("title", { required: "title is required" })}/>
    {errors.title && <p className={styles.error}>{errors.title.message}</p>}
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Price</label>
    <input type="number" className="form-control" id="inputPassword5" {...register("price", { required: "price is required" })}/>
    {errors.title && <p className={styles.error}>{errors.title.message}</p>}
  </div>
  <div className="col-12">
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" {...register("description", { required: "description is required" })}></textarea>
  {errors.description && <p className={styles.error}>{errors.description.message}</p>}
</div>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Category</label>
    <input type="text" className="form-control" id="inputAddress2" {...register("category", { required: "category is required" })}/>
    {errors.category && <p className={styles.error}>{errors.category.message}</p>}
  </div>
  <div className="col-md-6">
  <div className="mb-3">
  <label htmlFor="formFile" className="form-label">Image</label>
  <input className="form-control" type="file" id="formFile" {...register("image", { required: "image is required" })}/>
  {errors.image && <p className={styles.error}>{errors.image.message}</p>}
  </div>
</div>
<div className="col-md-3">
    <label htmlFor="inputEmail4" className="form-label">Slug</label>
    <input type="text" className="form-control" id="inputEmail4" {...register("slug", { required: "slug is required" })} readOnly/>
    {errors.slug && <p className={styles.error}>{errors.slug.message}</p>}
  </div>
  <div className="col-md-3">
    <label htmlFor="inputPassword4" className="form-label">Rating</label>
    <input type="number" className="form-control" id="inputPassword4" {...register("rate")}/>
    {/* {errors.rate && <p className={styles.error}>{errors.rate.message}</p>} */}
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Create Product</button>
  </div>
</form>
    </div>
  )
}

export default ProductForm



