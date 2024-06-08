import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewquizslidePopular.css'
import Newquiz from "../Newquiz/Newquiz";
import axios from 'axios';

const NewquizslidePopular = () => {
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
                slidesToScroll:2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };
      const [quizes, setQuizes] = useState([]);
      const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل
  const url = 'https://robert-api.lavetro-agency.com/storage/';
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://robert-api.lavetro-agency.com/api/quizzes/popular`);
        setQuizes(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }finally {
        setIsLoading(false); // إخفاء مكون التحميل بعد الانتهاء
      }
    };

    fetchData();
  }, [id]);
  return (
    <div className='React-slide'>
        <Slider {...settings}>
        {quizes.map((quiz) => (
          <Newquiz key={quiz.id} id={quiz.id} img={url + quiz.image} title={quiz.ar_name}  description={quiz.notes} answer ={quiz.answered_count} />
          
        ))}
        {/* <div>
        <Newquiz />
        </div>
        <Newquiz />
        <Newquiz />
        <Newquiz/>
        <Newquiz/>
        <Newquiz/>
        <Newquiz/> */}
    
  </Slider>
    </div>
  )
}

export default NewquizslidePopular