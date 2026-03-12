import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {


const coffee = useLoaderData();
const {_id, name,quantity,supplier,taste,category,details,photo } = coffee;

 const handleUpdateCoffee = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity= form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo  = form.photo.value;
  const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
  console.log(updatedCoffee);
  //send data to the server
  fetch(`https://coffee-store-espresso-rcgdw5jpn-nusratjahantaifas-projects.vercel.app/coffee/${_id}`,{
    method: 'PUT',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(updatedCoffee)
  })
  .then(res=> res.json())
  .then(data => {
    console.log(data);
    if(data.modifiedCount > 0){
Swal.fire({
  title: 'Success!',
  text: 'coffee updated successfully',
  icon: 'success',
  confirmButtonText: 'Cool'
})
    }
  })
   
  }




    return (
        <div>
           

            <div className="bg-[#F3E3D3] P-24">
            <h1 className="text-3xl font-bold text-[#f89b29] ">Update Coffee: {name} </h1>
        <form onSubmit={handleUpdateCoffee}>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Coffee name"
    name="name"  defaultValue={name} className="input input-bordered w-full" />
  </label>
</div>
        
         <div className="form-control md:w-1/2 ml-8">
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Available Quantity" name="quantity" 
    defaultValue={quantity}  className="input input-bordered w-full " />
  </label>
</div> 
  </div>


   <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier name</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Supplier name" name="supplier"
     defaultValue={supplier}  className="input input-bordered w-full" />
  </label>
</div>
        
         <div className="form-control md:w-1/2 ml-8">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="taste" name="taste"
    defaultValue={taste}  className="input input-bordered w-full " />
  </label>
</div> 
  </div>


   <div className="md:flex mb-8">
               
        
         <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Category" name="category"defaultValue={category}
    className="input input-bordered w-full " />
  </label>
</div> 
 <div className="form-control md:w-1/2 ml-8 ">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
  
    <input type="text"name="details" 
     defaultValue={details}    placeholder="Details"
      className="input input-bordered w-full" />
  </label>
</div>
 </div>
 
  <div className="mb-8"> 
              <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="photo" 
      defaultValue={photo}   placeholder="Photo URL" className="input input-bordered w-full " />
  </label>
</div> 
    
    </div>  
 

<div className="text-center">'
  <input type="submit" value="update Coffee" className="btn bg-[#D4E3F3]"/>
</div>
        </form>
        </div>


        </div>
    );
};

export default UpdateCoffee;