import React, { useEffect, useLayoutEffect, useState } from "react"
import "./index.css"
import { json, NavLink, useNavigate } from "react-router-dom"
import { getProducts } from "../../../services"
import { DeleteDataFromList } from "../../../services"

const MarketPlace=()=>{

    const [posts, SetPosts]=useState();
    const [course, SetCourse]=useState('dollar');
    const [basketArray, setBasketArray]=useState(() => {
        return JSON.parse(localStorage.getItem("basketArray")) || []
    });
    const navigate=useNavigate();

    let LStorage=window.localStorage;
    useLayoutEffect(()=>{
        
    })
  
    useEffect(()=>{     
        
        getProductList();

    },[])
    LStorage.setItem("basketArray",JSON.stringify(basketArray));


    function basketProduct(productId){
           
        if(basketArray.indexOf(productId)===-1 ){
            setBasketArray(old_ids=>[...old_ids, productId] );
            
            console.log(basketArray);
            LStorage.setItem("basketArray",JSON.stringify(basketArray));
        }else{
            let temp_arr=basketArray.filter(id=> id!==productId);

            LStorage.setItem("basketArray",JSON.stringify(basketArray));
            
            setBasketArray(old_array=>temp_arr);
            
        }

        console.log(JSON.parse(localStorage.getItem("likedArray")));

    }
    


    const goToUpdate=(id)=>{
        navigate('/postIn',{
            state:{
                dataId:id
            }
        })
    }

    const getProductList=async()=>{
        let currentPosts= await getProducts();

        SetPosts(old_data=> currentPosts);
    }

    return(
        <>
        
        
        <select className="sorting_selection" onChange={sortPosts}>
            <option selected disabled>Sorting</option>
            <option value={'fromMinimum'}>From minimum</option>
            <option  value={'fromMaximum'}>From maximum</option>

        </select>
            <select onChange={determineCourse}>
                <option value={'dollar'}>$</option>
                <option value={'manat'}>₼</option>
                <option value={'euro'}>€</option>
            </select>
 
            <hr/>
            <NavLink to={'/BasketPage'}><img className="basketLink" src="https://cdn-icons-png.flaticon.com/512/34/34627.png"/></NavLink>
            
            
            <div className="container">
            <div className="row market_row">
                { 
                    posts?.map(row=>{
                        return(
                        <>
                                    <div className="card marketCard store_card">
                                    <div className="row g-0">   
                                        <div className="col-md-4">
                                        <a href={row.image} data-fancybox="gallery" data-caption="Optional caption"  >
                                        <img src={row.image} className="img-fluid rounded-start" />
                                        </a>
                                        
                                        </div>
                                        <div className="col-md-8">
                                        <div >
                                            <h5 className="card-title card_title">{row.title}</h5>
                                           { course==='dollar' ?   <h3>{row.price}$</h3> : course==='manat' ? <h3>{Math.floor(row.price/1.7)}₼</h3> : <h3>{Math.floor(row.price*1.1)}€</h3>}
                                           
                                           <button className="basket_button" onClick={()=>basketProduct(row.id)}><img width={'30px'} height={'30px'} src={basketArray.indexOf(row.id)===-1 ?  "https://cdn-icons-png.flaticon.com/512/34/34627.png" : 'https://w7.pngwing.com/pngs/462/263/png-transparent-shopping-cart-computer-icons-icon-design-shopping-cart.png'}/></button>
                                        <hr/>
                                                <p className="card-text card_description">{row.description}</p>
                                                <p className="card-text"><small className="text-muted">{row.category}</small></p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                </>
                    
                        )
                    })
                }
            </div>
            </div>

            
        </>
    )
}

export default MarketPlace;