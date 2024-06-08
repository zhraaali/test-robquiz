
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestStyle.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Newquiz from '../Newquiz/Newquiz';



const Tests = (props) => {

//   const [categories11, setCategories11] = useState([]);
//   const [hasRequestedAPI11, setHasRequestedAPI11] = useState(false);
//   const [isLoading11, setIsLoading11] = useState(true);
//   useEffect(() => {
//     if (!hasRequestedAPI11) {
//       setIsLoading11(true);
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://robert-api.lavetro-agency.com/api/quizzes?category_id=${id}');
//         setCategories11(response.data.data);
//         setHasRequestedAPI11(true);

   

//       } catch (error) {
   
//       }finally {
//         setIsLoading11(false);  
//       }
//     };

//     fetchData();
//   }
// }, [hasRequestedAPI11]);



  const [quizes, setQuizes] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل

  const url = 'https://robert-api.lavetro-agency.com/storage/';
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://robert-api.lavetro-agency.com/api/quizzes?category_id=${id}`);
        setQuizes(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }finally {
        setIsLoading(false); // إخفاء مكون التحميل بعد الانتهاء
      }
    };

    fetchData();
  }, [id]);
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
    <div>
         <div className="hero-test">
            <h3>{quizes[0]?.category?.name}</h3>
        </div>
        <div className="ha-serch">
    <Form>
      <Form.Group className="mt-5 mb-5 d-flex" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Search" />
        <Button variant="primary" className="ms-5 me-5" type="submit">البحث</Button>
      </Form.Group>
    </Form>
    </div>
    {/* <h3 style={{textAlign:'right',width:'100%'}}> {quizes[0]?.category?.name} </h3>

<Slider {...settings}>

{categories11.map((category) => (

<Newquiz key={category.id} id={category.id} img={url + category.image} title={category.ar_name}   links={props.link}/>
    ))}
    </Slider> */}

        <div className='React-slide ho-contianer-test' style={{margin:'50px auto'}}>
       {quizes.length<=4?<div style={{display:'flex',justifyContent:'space-evenly'}}>{quizes.map((quiz) => (
          <Newquiz key={quiz.id} id={quiz.id} img={url + quiz.image} title={quiz.ar_name}  description={quiz.notes} testTime= {quiz.timer} answer ={quiz.answered_count}/>
          
        ))}</div>:<Slider {...settings}>

        
        {quizes.map((quiz) => (
          <Newquiz key={quiz.id} id={quiz.id} img={url + quiz.image} title={quiz.ar_name}  description={quiz.notes} testTime= {quiz.timer} answer ={quiz.answered_count}/>
          
        ))}
      
    
  </Slider>}
        
    </div>
        
    </div>
  )
}

export default Tests