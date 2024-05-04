import React,{useEffect,useState} from 'react';
import ReactConfetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';


const OrderDone = () => {

    const [order,setOrder]=useState({width:window.Width,height:window.Height})

    const navigate = useNavigate()

    const getOrder =()=>{
        setOrder({width:window.innerWidth,height:window.innerHeight})
    }

    useEffect(()=>{
        let time = setTimeout(()=>{
            window.addEventListener('resize',getOrder)
            navigate("/")
        },8000)
       
        return ()=>{
            window.removeEventListener('resize',getOrder)
            clearTimeout(()=>time)

        }
    },[order])


  return (
    <>
    <ReactConfetti 
    width={order.width}
    height={order.height}
    />
    <div className='d-flex justify-content-center align-items-center ' style={{height:"100vh"}}>
    <h1>Your Order is Submit</h1>
    </div>
    </>
  );
};

export default OrderDone;
