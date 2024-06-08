import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Cardslide.css'
import Newquiz from "../Newquiz/Newquiz";


import Card from "../Card/Card";
const Cardslide = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
      const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل
      const [isLoading21, setIsLoading21] = useState(true); // حالة لمؤشر التحميل
      const [isLoading23, setIsLoading23] = useState(true); // حالة لمؤشر التحميل
      const [isLoading22, setIsLoading22] = useState(true); // حالة لمؤشر التحميل
      const [isLoading11, setIsLoading11] = useState(true); // حالة لمؤشر التحميل
      const [isLoadingp, setIsLoadingp] = useState(true); // حالة لمؤشر التحميل
      const [hasRequestedAPI, setHasRequestedAPI] = useState(false);
      const [hasRequestedAPI21, setHasRequestedAPI21] = useState(false);
      const [hasRequestedAPI23, setHasRequestedAPI23] = useState(false);
      const [hasRequestedAPI22, setHasRequestedAPI22] = useState(false);
      const [hasRequestedAPI11, setHasRequestedAPI11] = useState(false);
      const [hasRequestedAPIp, setHasRequestedAPIp] = useState(false);
      const [categories, setCategories] = useState([]);
      const [categories21, setCategories21] = useState([]);
      const [categories23, setCategories23] = useState([]);
      const [categories22, setCategories22] = useState([]);
      const [categories11, setCategories11] = useState([]);
      const [popular, setPopular] = useState([]);
      const url = 'https://robert-api.lavetro-agency.com/storage/';
      const { id } = useParams();
      useEffect(() => {
        if (!hasRequestedAPI) {
          setIsLoading(true);
        const fetchData = async () => {
          try {
            const response = await axios.get('https://robert-api.lavetro-agency.com/api/quizzes?category_id=10');
            setCategories(response.data.data);
            setHasRequestedAPI(true);

            // console.log(response.data.data);
            // console.log(categories[0].id);
    
          } catch (error) {
            // console.error(error);
          }finally {
            setIsLoading(false); // إخفاء مكون التحميل بعد الانتهاء
          }
        };
    
        fetchData();
      }
    }, [hasRequestedAPI]);
      useEffect(() => {
        if (!hasRequestedAPI21) {
          setIsLoading21(true);
        const fetchData = async () => {
          try {
            const response = await axios.get('https://robert-api.lavetro-agency.com/api/quizzes?category_id=21');
            setCategories21(response.data.data);
            setHasRequestedAPI21(true);

            // console.log(response.data.data);
            // console.log(categories[0].id);
    
          } catch (error) {
            // console.error(error);
          }finally {
            setIsLoading21(false); // إخفاء مكون التحميل بعد الانتهاء
          }
        };
    
        fetchData();
      }
    }, [hasRequestedAPI21]);
      useEffect(() => {
        if (!hasRequestedAPIp) {
          setIsLoadingp(true);
        const fetchData = async () => {
          try {
            const response = await axios.get('https://robert-api.lavetro-agency.com/api/quizzes/popular');
            setPopular(response.data.data);
            setHasRequestedAPIp(true);

            // console.log(response.data.data);
            // console.log(categories[0].id);
    
          } catch (error) {
            // console.error(error);
          }finally {
            setIsLoadingp(false); // إخفاء مكون التحميل بعد الانتهاء
          }
        };
    
        fetchData();
      }
    }, [hasRequestedAPIp]);
   
      useEffect(() => {
        if (!hasRequestedAPI11) {
          setIsLoading11(true);
        const fetchData = async () => {
          try {
            const response = await axios.get('https://robert-api.lavetro-agency.com/api/quizzes?category_id=11');
            setCategories11(response.data.data);
            setHasRequestedAPI11(true);

            // console.log(response.data.data);
            // console.log(categories[0].id);
    
          } catch (error) {
            // console.error(error);
          }finally {
            setIsLoading11(false); // إخفاء مكون التحميل بعد الانتهاء
          }
        };
    
        fetchData();
      }
    }, [hasRequestedAPI11]);
      useEffect(() => {
        if (!hasRequestedAPI23) {
          setIsLoading23(true);
        const fetchData = async () => {
          try {
            const response = await axios.get('https://robert-api.lavetro-agency.com/api/quizzes?category_id=23');
            setCategories23(response.data.data);
            setHasRequestedAPI23(true);

            // console.log(response.data.data);
            // console.log(categories[0].id);
    
          } catch (error) {
            // console.error(error);
          }finally {
            setIsLoading23(false); // إخفاء مكون التحميل بعد الانتهاء
          }
        };
    
        fetchData();
      }
    }, [hasRequestedAPI23]);
      useEffect(() => {
        if (!hasRequestedAPI22) {
          setIsLoading23(true);
        const fetchData = async () => {
          try {
            const response = await axios.get('https://robert-api.lavetro-agency.com/api/quizzes?category_id=22');
            setCategories22(response.data.data);
            setHasRequestedAPI22(true);

            // console.log(response.data.data);
            // console.log(categories[0].id);
    
          } catch (error) {
            // console.error(error);
          }finally {
            setIsLoading22(false); // إخفاء مكون التحميل بعد الانتهاء
          }
        };
    
        fetchData();
      }
    }, [hasRequestedAPI22]);
    console.log(popular)
  return (
    <div className='React-slide'>
       <Slider {...settings}>
        {/* <div> */}
        {popular.map((category) => (
        
        <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
            ))}
   
  </Slider>
      <h3 style={{textAlign:'right',width:'100%'}}>رياضة  </h3>

        <Slider {...settings}>
        {/* <div> */}
        {categories.map((category) => (
        
        <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
            ))}
   
  </Slider>
  <h3 style={{textAlign:'right',width:'100%'}}>معلومات عامة </h3>

        <Slider {...settings}>
        {/* <div> */}
        {categories21.map((category) => (
        
        <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
            ))}
            </Slider>
            <h3 style={{textAlign:'right',width:'100%'}}>جغرافيا  </h3>

        <Slider {...settings}>
        {/* <div> */}
        {categories11.map((category) => (
        
        <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
            ))}
   
  </Slider>
        {/* <div> */}
        <h3 style={{textAlign:'right',width:'100%'}}>التصنيفات العالمية  </h3>

        <Slider {...settings}>

        {categories23.map((category) => (
        
        <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
            ))}
   
  </Slider>
  <h3 style={{textAlign:'right',width:'100%'}}>شعارات  </h3>

        <Slider {...settings}>

        {categories22.map((category) => (
        
        <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
            ))}
   
  </Slider>
    </div>
  )
}

export default Cardslide