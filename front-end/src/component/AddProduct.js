import React from "react";

const AddProduct =()=>{
    const[name,setName]= React.useState("");
    const[price,setPrice]= React.useState("");
    const[category,setCategory]= React.useState("");
    const[company,setCompony]= React.useState("");
    const[error,setError]= React.useState(false)
    
    const addProduct=async ()=>{
   
        console.log(!name);
        if(!name || !price || !category || !company )
        {
            setError(true)
            return false;
        }
     

        
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        let result =  await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "content-Type":"application/json",
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
       result = await result.json();
       console.log(result)
    }
    return(
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter Product name"className="inputBox"
             value={name} onChange={(e)=>{setName(e.target.value)}}
            />
           {error && !name && <span className="invalid-input">Enter valid name </span>}
            <input type="text" placeholder="Enter Product price"className="inputBox"
            value={price} onChange={(e)=>{setPrice(e.target.value)}}
            />
            {error && !price && <span className="invalid-input">Enter valid price </span>}
            <input type="text" placeholder="Enter Product caregory"className="inputBox"
            value={category} onChange={(e)=>{setCategory(e.target.value)}}
            />
            {error && !category && <span className="invalid-input">Enter valid category </span>}
            <input type="text" placeholder="Enter Product company"className="inputBox"
            value={company} onChange={(e)=>{setCompony(e.target.value)}}
            />
             {error && !company && <span className="invalid-input">Enter valid company </span>}
            
            <button onClick={addProduct} className="appbutton">AddProduct</button>
        </div>
    )
}

export default AddProduct