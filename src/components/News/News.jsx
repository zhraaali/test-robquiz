import './News.css'
import './../Hero/Hero.css'
import { Helmet } from 'react-helmet'
const News = (props) => {
  
  return (

    
    <div className='promotion'>
      
     <Helmet>
                <meta charSet="utf-8" />
                <title>Rob.Quiz website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className='promotion-content'>
            <h4>{props.title} </h4>
            <h2>{props.title2}</h2>

            <p>{props.desc}</p>

            {/* <button>{props.btn}</button> */}
        </div>

        <div className='promotion-img'>
            <img src={props.img}/>
        </div>
    </div>
   
  )
}

export default News