import React, { useEffect, useState } from "react";
// import { skillsData } from "../components/skillData";
import "../styles/product.css"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


// const skillUrl = "http://localhost:3001/api/skill";
const fakeApi = "https://fakestoreapi.com/products";


const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [product, setProduct] = useState([]);
  const [myProductData, setMyProductData] = useState([]);
  const length = product.length;
  const length1 = myProductData.length;

  const showProduct = async () => {
    const res = await fetch(fakeApi);
    const productData = await res.json();
    localStorage.setItem("productData", JSON.stringify(productData));
    return setProduct(productData);
  };

  const moveLeft = (e) => {
    e.preventDefault();
    setCurrent(current <= 0 ? length - 1 : current - 1);
  };
  const moveLeft1 = (e) => {
    e.preventDefault();
    setCurrent(current <= 0 ? length1 -1 : current - 1);
  };
  const moveRight = (e) => {
    e.preventDefault();
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const moveRight1 = (e) => {
    e.preventDefault();
    setCurrent(current === length1 - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    showProduct();
  }, [current]);

  useEffect(() => {
    const productsData = JSON.parse(localStorage.getItem("productData"));
    productsData && setProduct(productsData);
    // setMyProductData(skillsData);
    console.log(product);
},[])
console.log(product);
  return (
    <>
      <div className="container py-20">
        <h2 className="skill_main_title-stop text-4xl font-bold text-center mb-8 capitalize">some details of my skills</h2>
        <div class="skill_container">
            <div class="area_definer">
                    <div class="skills1 slider">
                    <div>
                        {
                            product.map((product, i) => {
                                const { id, category:ctry,image:img, price,description:desc, rating,title} = product;
                                return (
                                    <div
                                    className={i === current ? "slide active" : "slide"}
                                    key={id}
                                    >
                                        <div><img src={img} alt="product image" /></div>
                                        <div className="p-4">
                                            <h2 className="skill_title-stop text-2xl font-bold text-left text-blue-700">{title}</h2>
                                            {/* <p className="skill_desc">{desc}</p> */}
                                            <div className="text-left">
                                                <h3 className="skill_exp-stop ">
                                                    Price : {price}$
                                                </h3>
                                                <h3>Rating : {rating.rate}</h3>
                                            </div>
                                            <h3>{ctry}</h3>
                                        </div>
                                    </div>
                                )
                                })
                        }
                    </div>
                    {
                        product.length  > 0 ? <div class="skill_navigate_container">
                        <button
                        class="slider__btn slider__btn--left"
                        onClick={moveLeft}
                        >
                        <FaAngleLeft className="icon" />
                        </button>
                        <button
                        class="slider__btn slider__btn--right"
                        onClick={moveRight}
                        >
                        <FaAngleRight className="icon" />
                        </button>
                    </div> : <div class="skill_navigate_container">
                        <button
                        class="slider__btn slider__btn--left"
                        onClick={moveLeft1}
                        >
                        <FaAngleLeft className="icon" />
                        </button>
                        <button
                        class="slider__btn slider__btn--right"
                        onClick={moveRight1}
                        >
                        <FaAngleRight className="icon" />
                        </button>
                    </div> 
                    }
                    
                    </div>
            </div>
        </div>
      </div>

    </>
  );
};

export default Slider;