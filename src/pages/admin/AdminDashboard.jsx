import React,{useState} from 'react'
 
const AdminDashboard = () => {
 
    // making a state for product
    const[productName, setProductName] = useState('')
    const[productPrice, setProductPrice] = useState('')
    const[productCatagory, setProductCatagory] = useState('')
    const[productDescription, setProductDescription] = useState('')
    // image state
    const[productImage, setProductImage] = useState(null)
    const[previewImage,setPreviewImage] = useState(null)


    //function to uplod and preview image
    const handelImageUpload =(event)=>{
      //0-file,1-name,2-size
      const file =event.target.files[0]
      setProductImage(file)
      setPreviewImage(URL.createObjectURL(file))
    }

    //handel submit
    const handelSubmit = (e) => {
      e.preventDefault()
      console.log(productName,productPrice,productCatagory,productDescription,productImage)
    }
 
 
  return (
    <>
      <div className='container' />
      <div className='d-flex justify-content-between mt-2'>
        <h2 >Admin Dashboard</h2>
 
 
     
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Product
        </button>
 
       
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add new product!</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="">
 
                  <label >Product Name</label>
                  <input onChange={(e) => setProductName(e.target.value)} type='text' className='form-control'placeholder='Enter Product Name'/>
 
                  <label className='mt-2'> product Price </label>
                  <input onChange={(e) => setProductPrice(e.target.value)} type='text' className='form-control'placeholder='Enter Product Price'/>
 
          
                  <div className='mt-2'>
                    <label>Select category</label>
                    <select onChange={(e) => setProductCatagory(e.target.value)}className=' form-control'></select>
                    <select className='form-control'>
                      <option value="plants">Plants</option>
                      <option value="gagets">Gagets</option>
                      <option value="electronics">Electronics</option>
                      <option value="mobile">Mobile</option>
                    </select>
                  </div>
                  <label className='mt-2'> type product description</label>
                  <textarea onChange={(e) => setProductDescription(e.target.value)} className='form-control'></textarea>
 
                  <label>Product Image</label>
                  <input onChange={handelImageUpload} type='file' className='form-control'></input>

                  {/* prievew image */}
                  {
                  previewImage && (
                    <div className=''>
                      <img src={previewImage} alt="preview image" className='img-fluid rounded object fit-cover mt-3'/>
                      
                    </div>
                  )
                  }
 
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={handelSubmit}type="button" class="btn btn-primary">Add Products</button>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <table className='table mt-3'>
        <thead className='table-dark'>
          <tr>
            <th>Product image</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img height={'40px'} width={'40px'} src="https://th.bing.com/th/id/R.3175dc540dfe6b9e4ac00517086e4700?rik=N5QK4nhTaaewfA&riu=http%3a%2f%2fwww.forestwander.com%2fwp-content%2foriginal%2f2011_02%2fbeautiful-pink-flower.jpg&ehk=odzj%2bukR0ES%2bVffERmcJ08qxlxnGZlOdQfyrBzhZj3A%3d&risl=&pid=ImgRaw&r=0" alt='' />
            </td>
            <td>Sunflower</td>
            <td> NRS.200 </td>
            <td>Plants</td>
            <td>Imported from Canada</td>
            <td>
              <div className='btn-group' role='group'>
                <button className='btn btn-success '>Edit</button >
                <button className='btn btn-danger'>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
 
 
    </>
  )
}
 
export default AdminDashboard