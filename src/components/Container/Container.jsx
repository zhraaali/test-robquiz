import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import Featuredcard from '../Featuredcard/Featuredcard'
import './Container.css'
import Newquiz from "../Newquiz/Newquiz";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const Container = (props) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل
  const [hasRequestedAPI, setHasRequestedAPI] = useState(false);

  const url = 'https://robert-api.lavetro-agency.com/storage/';
  const { id } = useParams();
  useEffect(() => {
    if (!hasRequestedAPI) {
      setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get('https://robert-api.lavetro-agency.com/api/quizzes/featured');
        setCategories(response.data.data);
        setHasRequestedAPI(true);
        // console.log(response.data.data);
        // console.log(categories[0].id);

      } catch (error) {
        console.error(error);
      }finally {
        setIsLoading(false); // إخفاء مكون التحميل بعد الانتهاء
      }
    };

    fetchData();
  }
}, [hasRequestedAPI]);
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay:false,
  autoplayspeed:2,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
  return (
    <div className='zh-container'>
        <h1 style={{textAlign:'right',width:'92%'}}>الاختبارات المميزة</h1>
        <div className='zh-inner-container'>
         {categories.length<=4?<div style={{display:'flex',justifyContent:'space-evenly'}}>{categories.map((category) => (
          <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
          
        ))}</div>: 
        <Slider {...settings} style={{width:'100%'}}>
   
        
        {categories.map((category) => (
          <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
          
        ))}
       
   
    
  </Slider>
  }
        {/* {categories.map((category) => (
        
        <Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
        ))} */}
        
        </div>
        
    </div>
  )
}

export default Container