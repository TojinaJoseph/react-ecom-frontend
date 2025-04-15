
const ProductForm = () => {
  return (
    <div className="container mt-5">
        <h5>Add Product</h5>
        <form className="row g-3 mt-4">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Title</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Price</label>
    <input type="number" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
</div>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Category</label>
    <input type="text" className="form-control" id="inputAddress2"/>
  </div>
  <div className="col-md-6">
  <div className="mb-3">
  <label htmlFor="formFile" className="form-label">Image</label>
  <input className="form-control" type="file" id="formFile"/>
  </div>
</div>
<div className="col-md-3">
    <label htmlFor="inputEmail4" className="form-label">Slug</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputPassword4" className="form-label">Rating</label>
    <input type="number" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Create Product</button>
  </div>
</form>
    </div>
  )
}

export default ProductForm