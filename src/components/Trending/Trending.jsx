import React from 'react';
import Cardslide from '../Cardslide/Cardslide'
import './Trending.css'
import newsimg from './../../assets/images/images.png'
import { Helmet } from 'react-helmet'
const Trending = () => {
 
  return (
    <div className='trending'>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Rob.Quiz website</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <h1 style={{textAlign:'right',width:'100%'}}>الاختبارات الشائعة</h1>
        
        <Cardslide img={newsimg}
            title="zhraa"
            title1="ali"
            difficulty='easy'
            question='quiz'/>
    </div>
  )
}

export default Trending