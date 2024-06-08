import React from 'react'
import Quiz from '../../components/Quiz/Quiz'
// import './Quizpage.css'
import img from './../../assets/images/herotest.jpg'
const Quizpage = () => {
  

  return (
    <div className='zh-quiz-page-container'>
        <div className='zh-quiz-page'>
        {/* <img src={img}/> */}
        <Quiz/>
        </div>
    
    </div>

  )
}

export default Quizpage