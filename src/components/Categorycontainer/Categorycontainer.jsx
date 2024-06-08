import Categories from '../Categories/Categories';
import './Categorycontainer.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import Slider from "react-slick";


const Categorycontainer = () => {
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
        const response = await axios.get('https://robert-api.lavetro-agency.com/api/categories');
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
  slidesToShow: 6,
  slidesToScroll: 5,
  autoplay:false,
  autoplayspeed:2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
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
        slidesToShow: 1,
        slidesToScroll:1
      }
    }
  ]
};

  return (
    <div className='zh-ca-container'>
      <h1 style={{textAlign:'right',width:'92%'}}>التصنيفات</h1>
      <div className='zh-ca-inner'>
           <div style={{width:'100%'}}>
            <Slider {...settings}>
        {categories.map((category) => (
          <Categories key={category.id} id={category.id}
           img={url + category.image} title={category.name} 

           />
          
        ))}
       </Slider>
       </div>
      </div>
    </div>
  );
};

export default Categorycontainer;