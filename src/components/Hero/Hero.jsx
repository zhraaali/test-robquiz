import './Hero.css'
import heroimg from './../../assets/images/heroimg.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="zh-hero">
        <div className='zh-hero-top'>
        <div className="zh-hero-content">
          <div className='zh-quiz-time'>
            {/* <h1>Quiz Time</h1> */}
          </div>
          <div>
          <h1 style={{ textAlign:'center'}}>
          مرحبًا بكم في موقعنا الذي يقدم أكبر مجموعة من الألعاب الثقافية والمسابقات! اختبر معلوماتك أو قم بإنشاء مسابقاتك الخاصة وشاركها مع العالم
          </h1>
          </div>
        </div>

        {/* <div className='zh-hero-img'>
        <img
            src={heroimg}
        />
        </div> */}
        </div>
        <Link to='/page-random'>
        <button className='zh-hero-btn'>البدء باختبار عشوائي</button>
        </Link>
      </div>
  )
}

export default Hero