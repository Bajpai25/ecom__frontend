import React,{useContext,createContext,useState, useEffect} from "react";


// create a cart context
const CartContext=createContext();


// create a cart context provider

const CartContextProvider=({children})=>{
    const [state,setstate]=useState([]);
    const getcart=()=>{
        let cart={};
        for(let i=0;i<state.length+1;i++){
            cart[i]=0;
        }
        return cart;
        
    }
    const [cartItem,setcartitem]=useState(getcart());

    useEffect(()=>{
   async function getproducts(){
    const response =await fetch('https://stylis-backend.onrender.com/getproducts',{
        method:'GET',
        headers:{'Content-Type':'application/json'}
    })
    const data=await response.json();
    setstate(data.data);

    if(localStorage.getItem('auth-token')){
        async function getcart(){
            const response=await fetch('https://stylis-backend.onrender.com/getcart',{
                method:'POST',
                headers:{Accept:"application/form-data",
                          "auth-token":`${localStorage.getItem('auth-token')}`,
                        "Content-Type":"application/json"},
                body:""
            })
            const data=await response.json();
            console.log(data);
            setcartitem(data);
        }
         getcart();
    }
   }
   getproducts()
},[])
    

    const addtocart=(id)=>{
        setcartitem((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
        if(localStorage.getItem('auth-token')){
           const response= fetch('https://stylis-backend.onrender.com/addcart',{
                method:'POST',
                headers:{Accept:'application/form-data',
                        'Content-Type':'application/json',
                        'auth-token':`${localStorage.getItem('auth-token')}`
            },
            body:JSON.stringify({
                "itemid":id
            })
            })
            const data=response.json();
            if(response.status===200){
                alert('Welcome back!');
            }
            else{
                console.log('error');
            }
        }
    }
    
    
    const removefromcart=(id)=>{
        setcartitem((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) - 1) }));
        if(localStorage.getItem('auth-token')){
         const response=fetch('https://stylis-backend.onrender.com/deletecart',{
                method:'POST',
                headers:{Accept:'application/form-data',
                        'Content-Type':'application/json',
                        'auth-token':`${localStorage.getItem('auth-token')}`
            },
            body:JSON.stringify({
                "itemid":id
            })
            })
            const data=response.json();
            
        }
        
    }
    return (
        <CartContext.Provider value={{state,setstate,cartItem,addtocart,removefromcart}}>
            {children}
        </CartContext.Provider>
    )
}



 
 // ceate a custom hook for using cart context
 const useCart=()=>{
    return (
        useContext(CartContext)
    )
 }
 export {useCart,CartContextProvider};