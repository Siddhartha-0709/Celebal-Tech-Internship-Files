import React, { useEffect, useState } from 'react'
import Order from './Order'

function App() {
  const [orderId, setOrderId] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const getOrderDetails = () => {
    let orderID = prompt("Please product ID:", "X0020202");
    let quantity = prompt("Please quantity:", "1");
    let productName = prompt("Please product name:", "Image");
    let price = prompt("Please product price:", "1000");
    if (orderID !== null && orderID !== "") {
      setOrderId(orderID);
      setQuantity(quantity);
      setProductName(productName);
      setPrice(price);
    } else {
      alert("User cancelled the prompt.");
      getOrderDetails();
    }
  }
  useEffect(() => {
    getOrderDetails();
  }, [])
  return (
    <>
      <div className='bg-gray-950 h-full p-20 text-black'>
        <div className='bg-gray-100 container mx-auto p-0 max-w-lg border rounded-lg shadow-lg'>
          <h1 className='text-3xl font-bold m-4 text-center'>Product Checkout</h1>
          <hr className='' style={{ border: '2px solid gray' }} />
          <div className='flex flex-col p-4 bg-gray-300 m-2 rounded-lg '>
            <h2 className='text-xl mb-2'><span className='font-bold'>Product Name:</span> {productName}</h2>
            <h2 className='text-xl mb-2'><span className='font-bold'>Order ID:</span> {orderId}</h2>
            <h2 className='text-xl mb-2'><span className='font-bold'>Quantity:</span> {quantity}</h2>
            <h2 className='text-xl mb-2'><span className='font-bold'>Price:</span> {price}</h2>
          </div>
          <img src='/assets/1.jpg' alt='Product' className='mx-auto w-80 h-80 object-cover mb-4 rounded-xl' />
          <div className='paypall buttons'>
            <Order orderId='x0020202' quantity={1} price={1000} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App