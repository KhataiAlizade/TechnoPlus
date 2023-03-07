import React, { useEffect, useLayoutEffect, useState } from "react"
import "./Sebet.css"
import { json, NavLink, useNavigate } from "react-router-dom"
import { addToCard, getProducts, getProductLaptop } from './services/api';

const WishList = () => {
    let LStorage = window.localStorage;

    const [posts, SetPosts] = useState(() => {
        return JSON.parse(LStorage.getItem("posts")) || []
    });
    const [likedArray, SetLikedArray] = useState(() => {
        return JSON.parse(LStorage.getItem("likedArray")) || []
    });
    const [lastPosts, SetLastPosts] = useState([]);
    const [course, SetCourse] = useState(() => {
        return JSON.parse(LStorage.getItem("determinedCourse")) || "dollar";
    });
    const [totalValue, SetTotalValue] = useState(0);

    const [basketArray, setBasketArray] = useState(() => {
        return JSON.parse(LStorage.getItem("basketArray")) || []
    });
    const navigate = useNavigate();


    useLayoutEffect(() => {

        SetTotalValue(old_value => 0);
        if (course === "dollar") {
            posts.forEach(row => {

                SetTotalValue(old_value => JSON.parse(old_value) + JSON.parse(row.price) * JSON.parse(row.number));

            });
        } else if (course === "manat") {
            posts.forEach(row => {

                SetTotalValue(old_value => JSON.parse(old_value) + JSON.parse(row.price) * JSON.parse(row.number) * 1.7);

            });
        } else {
            posts.forEach(row => {

                SetTotalValue(old_value => JSON.parse(old_value) + JSON.parse(row.price) * JSON.parse(row.number) / 1.1);

            });
        }

    })


    useEffect(() => {
        

        getProductList();

        if (likedArray.length == 0) {
            navigate("/")
        }
        console.log(likedArray)
    }, [basketArray, lastPosts])
    LStorage.setItem("basketArray", JSON.stringify(basketArray));

    const getProductList = async () => {
        let currentPosts = [];

        if (LStorage.getItem('posts') == null) {

            currentPosts = await getProducts();
            let temp_array2=await getProductLaptop();

            let products = [];
            for (let elem of likedArray) {
                currentPosts.forEach(row => {
                    if (elem === row.title) {
                        products.push(row);
                    }
                });

            }
            for (let elem of likedArray) {
                temp_array2.forEach(row => {
                    if (elem === row.title) {
                        products.push(row);
                    }
                });

            }
            products.map(row => row.number = 1);
            console.log(products);
            SetPosts(old_data => products);

        } else {
            let temp_array = await getProducts();
            let temp_array2=await getProductLaptop();
            currentPosts = JSON.parse(LStorage.getItem('posts'));


            let products = [];
            for (let elem of likedArray) {
                temp_array.forEach(row => {
                    if (elem === row.title) {
                        products.push(row);

                    }
                });
            }
            for (let elem of likedArray) {
                temp_array2.forEach(row => {
                    if (elem === row.title) {
                        products.push(row);

                    }
                });
            }
            products.map(row => row.number = 1);
            for (let elem of currentPosts) {
                if (elem.number > 1) {
                    products.map(row => row.title == elem.id ? row.number = JSON.parse(elem.number) : '')

                }
            }

            LStorage.setItem("posts", JSON.stringify(products));
            SetPosts(old_data => products);
            console.log(basketArray,temp_array);

        }

    }


    function basketProduct(productId) {

        if (basketArray.indexOf(productId) === -1) {
            setBasketArray(old_ids => [...old_ids, productId]);

            LStorage.setItem("basketArray", JSON.stringify(basketArray));
        } else {
            let temp_arr = basketArray.filter(id => id !== productId);

            LStorage.setItem("basketArray", JSON.stringify(basketArray));

            setBasketArray(old_array => temp_arr);

        }

    }




    const goToUpdate = (id) => {
        navigate('/postIn', {
            state: {
                dataId: id
            }
        })
    }
    const fromLowerToUpper = () => {

        let temp_posts = posts;
        let temp2_posts = posts
        let temp_arr = [];
        let sorted_arr = [];
        let sortedPosts = []
        for (let row in temp_posts) {
            temp_arr.push(temp_posts[row].price);
            sorted_arr = temp_arr.sort(function (a, b) { return a - b });
        }

        for (let i = 0; i < sorted_arr.length; i++) {

            for (let t = 0; t < temp_posts.length; t++) {

                if (sorted_arr[i] == temp_posts[t].price) {
                    sortedPosts.push(temp2_posts[t]);

                    temp_posts[t].price = 34220.3420
                }
            }
        };
        for (let i = 0; i < sorted_arr.length; i++) {
            sortedPosts[i].price = sorted_arr[i];

        }

        SetPosts(old_data => sortedPosts);
    }



    const fromUpperToLower = () => {

        let temp_posts = posts;
        let temp2_posts = posts
        let temp_arr = [];
        let sorted_arr = [];
        let sortedPosts = []
        for (let row in temp_posts) {
            temp_arr.push(temp_posts[row].price);
            sorted_arr = temp_arr.sort(function (a, b) { return b - a });
        }


        for (let i = 0; i < sorted_arr.length; i++) {

            for (let t = 0; t < temp_posts.length; t++) {

                if (sorted_arr[i] == temp_posts[t].price) {
                    sortedPosts.push(temp2_posts[t]);


                    temp_posts[t].price = 34220.3420
                }
            }
        };
        for (let i = 0; i < sorted_arr.length; i++) {
            sortedPosts[i].price = sorted_arr[i];
        }

        SetPosts(old_data => sortedPosts);
    }



    function sortPosts(e) {
        if (e.target.value === 'fromMinimum') {
            fromLowerToUpper();

        } else if (e.target.value === 'fromMaximum') {
            fromUpperToLower()
        }
    }


    const goToMore = (id) => {
        navigate('/postIn', {
            state: {
                dataId: id
            }
        })
    }


    const determineCourse = (e) => {
        SetCourse(old_data => e.target.value)
        LStorage.setItem("determinedCourse", JSON.stringify(e.target.value));

    }

    const setNumber = (e) => {
        let temp_arr = posts;

        let data_id = e.target.id
        temp_arr.map(row => row.title == data_id ? row.number = JSON.parse(e.target.value) : row.number = row.number)

        SetPosts(old_data => temp_arr);


        LStorage.setItem('posts', JSON.stringify(posts));
        SetLastPosts(old_data => posts);
    }
    const submitBasket=()=>{
        LStorage.clear();
        alert("Mehsullar Qebul edildiiiiii");
    }

    return (
        <>

            <div className="yekee_div">

                <div className="div1">
                    <select className="sorting_selection" onChange={sortPosts}>
                        <option selected disabled>Sorting</option>
                        <option value={'fromMinimum'}>From minimum</option>
                        <option value={'fromMaximum'}>From maximum</option>

                    </select>
                    <select className="sorting_selection2" onChange={determineCourse}>
                        <option value={'dollar'}>$</option>
                        <option value={'manat'}>₼</option>
                        <option value={'euro'}>€</option>
                    </select>
                    <span className="totalValue">Total value: {(Math.round(totalValue * 100) / 100).toFixed(2)}</span>

                </div>
                <div className="div231">
                    {
                        posts?.map(row => {
                            return (
                                <>
                                    <div className="div230">
                                        <img className="img833" onClick={() => { goToMore(row.title) }} src={row.thumbnail} />

                                        <h5 className="soz1" onClick={() => goToMore(row.title)}>{row.title}</h5>{course === 'dollar' ?

                                        <h3 className="soz2">{(Math.round(row.price * row.number * 100) / 100).toFixed(2)}$</h3> : course === 'manat' ? <h3 >{(Math.round(row.price * row.number * 1.7 * 100) / 100).toFixed(2)}₼</h3> : <h3 >{(Math.round(row.price * row.number / 1.1 * 100) / 100).toFixed(2)}€</h3>}


                                        <button className="soz3" onClick={() => basketProduct(row.title)}><img width={'30px'} height={'30px'} src={basketArray.indexOf(row.title) === -1 ? "https://cdn-icons-png.flaticon.com/512/34/34627.png" : 'https://w7.pngwing.com/pngs/462/263/png-transparent-shopping-cart-computer-icons-icon-design-shopping-cart.png'} /></button>

                                        <p className="soz4" onClick={() => goToMore(row.title)}>{row.description}</p>

                                        <p className="soz5"><small className="text-muted">{row.category}</small></p>
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

export default WishList;