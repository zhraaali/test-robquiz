import React from 'react'

import './random.css'
import img from './../../assets/images/herotest.jpg'
import Random from '../../components/Random/RandomComponent';
const RandomPage = () => {
//   const [quizes, setQuizes] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل

//   const url = 'https://robert-api.lavetro-agency.com/storage/';
//   const { id } = useParams();
//   const { testTime } = useParams();
//   // console.log(id);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://robert-api.lavetro-agency.com/api/quizzes/random`);
//         setQuizes(response.data.survey_details);
//         console.log(response.data.survey_details);
//       } catch (error) {
//         console.error(error);
//       }finally {
//         setIsLoading(false); // إخفاء مكون التحميل بعد الانتهاء
//       }
//     };
//     fetchData();
//   }, [id]);
//   const storedIndexData = localStorage.getItem('indexData');
// const previousIndexData = storedIndexData ? parseInt(storedIndexData) : 1;
//   console.log(storedIndexData);
  return (
    <div className='zh-quiz-page-container'>
      <div className='zh-quiz-page'>
        {/* <img src={img}/> */}
        <Random/>
    </div>
    
    </div>
  )
}

export default RandomPage