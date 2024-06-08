import Slider from 'react-slick'
import './Featuredcard.css'
import { Link } from 'react-router-dom'
import Newquiz from '../Newquiz/Newquiz'
import { useState } from 'react'

const Featuredcard = (props) => {
  // const [categories, setCategories] = useState([]);

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 5,
  //   autoplay:false,
  //   autoplayspeed:2,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll:1
  //       }
  //     }
  //   ]
  // };
    // const class1 = "zh-smcards-container"
  return (
    // <div className={props.class || class1 }>
    <Link to={props.type== 'quizz'?`/quizpage/${props.id}`:`/category/test/${props.id}`} className='ha-link' >
    
    <div className='zh-smcard'>
        <div className='zh-smcard-img'>
            <img className='zh-img-bigscreen' src={props.smcardimg1} style={props.style}/>
            <img className='zh-img-smscreen' src={props.smcardimg1sm} style={props.style}/>
        </div>

        <div className='zh-smcard-info'>
            <h5 className='zh-h5-bigscreen'  >{props.title1} </h5> 
            <h5 className='zh-h5-smscreen' >{props.title1sm} </h5>
            <h6 className='zh-h6-bigscreen'>{props.desc1}</h6>
            <h6 className='zh-h6-smscreen'>{props.desc1sm}</h6>
            {/* <p>{props.date}</p> */}
            {/* <button className='zh-btn-bigscreen'>{props.btn}</button>
            <button className='zh-btn-smscreen'>{props.btnsm}</button> */}
        </div>
    </div>
    
   
  
    </Link>
    
  )
}

export default Featuredcard