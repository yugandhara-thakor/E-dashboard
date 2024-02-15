import React, { useEffect } from "react";
import { useParams ,useNavigate, Navigate} from 'react-router-dom'

const UpdateProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompony] = React.useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();

    }, [])
    const getProductDetails = async () => {
        console.log(params)
        let result = await fetch(`http://127.0.0.1:5000/product/${params.id}`,{
            headers: {
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        // console.log(result);
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompony(result.company)
    }



    const updateProduct = async () => {
        console.log(name, price, category, company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "Put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': "Application/json",
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json()
        if(result){
            navigate("/")
        }
    
 }
    return (
        <div className="product">
            <h1> Update Product</h1>
            <input type="text" placeholder="Enter Product name" className="inputBox"
                value={name} onChange={(e) => { setName(e.target.value) }}
            />

            <input type="text" placeholder="Enter Product price" className="inputBox"
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />

            <input type="text" placeholder="Enter Product caregory" className="inputBox"
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />

            <input type="text" placeholder="Enter Product company" className="inputBox"
                value={company} onChange={(e) => { setCompony(e.target.value) }}
            />


            <button onClick={updateProduct} className="appbutton">UpdateProduct</button>
        </div>
    )
}

export default UpdateProduct
