import Swal from 'sweetalert2'

const AddCoffee = () => {

  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity= form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo  = form.photo.value;
  const newCoffee = {name,quantity,supplier,taste,category,details,photo}
  console.log(newCoffee);
  //send data to the server
  fetch('http://localhost:5000/coffee',{
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(newCoffee)
  })
  .then(res=> res.json())
  .then(data => {
    console.log(data);
    if(data.insertId){
Swal.fire({
  title: 'Success!',
  text: 'coffee added successfully',
  icon: 'success',
  confirmButtonText: 'Cool'
})
    }
  })
   
  }
    return (
        <div className="bg-[#F3E3D3] P-24">
            <h1 className="text-3xl font-bold text-[#f89b29] ">Add a coffee</h1>
        <form onSubmit={handleAddCoffee}>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Coffee name"name="name" className="input input-bordered w-full" />
  </label>
</div>
        
         <div className="form-control md:w-1/2 ml-8">
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered w-full " />
  </label>
</div> 
  </div>


   <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier name</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Supplier name" name="supplier" className="input input-bordered w-full" />
  </label>
</div>
        
         <div className="form-control md:w-1/2 ml-8">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="taste" name="taste" className="input input-bordered w-full " />
  </label>
</div> 
  </div>


   <div className="md:flex mb-8">
               
        
         <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Category" name="category"
    className="input input-bordered w-full " />
  </label>
</div> 
 <div className="form-control md:w-1/2 ml-8 ">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
  
    <input type="text"name="details" placeholder="Details" className="input input-bordered w-full" />
  </label>
</div>
 </div>
 
  <div className="mb-8"> 
              <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full " />
  </label>
</div> 
    
    </div>  
 

<div className="text-center">'
  <input type="submit" value="Add Coffee" className="btn bg-[#D4E3F3]"/>
</div>
        </form>
        </div>
    );
};

export default AddCoffee;