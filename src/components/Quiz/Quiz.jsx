import React, { useEffect, useRef, useState } from 'react'
import {  useParams,useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../Newquizslide/Newquizslide.css';
import './Quiz.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Newquizslide from '../Newquizslide/Newquizslide'
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import img2 from './../../assets/images/heroimg.jpg'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
// import Backbutton from './../Backbutton/Backbutton'
// import { useForm } from 'react-hook-form';



const Quiz = () => {



  // const [isInputSticky, setIsInputSticky] = useState({position:'sticky',top:'12%'});

  // const handleFocus =()=> {
  //   setIsInputSticky({
  //     ...isInputSticky,
  //   position:'sticky',
  //   top:'50%'})
  // };

  // const handleBlur = () => {
  //   setIsInputSticky(false);
  // };



  const [quizes, setQuizes] = useState([]);
  const [quizesTime, setQuizesTime] = useState([]);
  const [resultAnswer, setResultAnswer] = useState([]);
  const url = 'https://robert-api.lavetro-agency.com/storage/';
  const { id } = useParams();
  const { testTime } = useParams();
  // console.log(id);
    let [time, setTime] = useState( 1000);

  const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل
  const [isLoadingQuize, setIsLoadingQuize] = useState(true); // حالة لمؤشر التحميل
  const [quizTitle, setQuizTitle] = useState([]); // حالة لمؤشر التحميل

  useEffect(() => {
    const fetchDatatime = async () => {
      try {
        const response = await axios.get(`https://robert-api.lavetro-agency.com/api/survey/show/${id}`);
        const surveyTimer = response.data?.survey[0]?.timer;
        const title = response.data?.survey;
        
  
        // تأخير التحميل لمدة زمنية محددة (مثلاً 2 ثانية)
        await new Promise((resolve) => setTimeout(resolve, 2000));
  
        setQuizesTime(surveyTimer);
        localStorage.setItem('quizesTime', surveyTimer);
        const storedQuizesTime = localStorage.getItem('quizesTime');
        const parsedTime =  parseInt(surveyTimer) * 60 ;
        setTime(parsedTime);
        setQuizTitle(title);
        console.log(title);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // إخفاء مكون التحميل بعد الانتهاء
      }
    };
  
    fetchDatatime();
  }, [id]);
  const [dataFetched, setDataFetched] = useState(false);

console.log(quizTitle)
  useEffect(() => {
    if (!dataFetched) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://robert-api.lavetro-agency.com/api/survey/show/${id}`);
          await new Promise((resolve) => setTimeout(resolve, 3000));
          setQuizes(response.data.survey_details);
          setDataFetched(true);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoadingQuize(false);
        }
      };
      fetchData();
    }
  }, [id, dataFetched]);
  const [survey, setSurvey] = useState([]);
  const [surveyname, setSurveyName] = useState([]);
  const [IsLoadingSurvey, setIsLoadingSurvey] = useState(true); // حالة لمؤشر التحميل

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://robert-api.lavetro-agency.com/api/survey/show/${id}`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const surveyType = response.data?.survey[0]?.survey_type;
        const surveyName = response.data?.survey[0]?.ar_name;
        // console.log(surveyName);
        setSurvey(surveyType)
        setSurveyName(surveyName)
        // console.log(response.data.survey[0]?.survey_type);
      } catch (error) {
        console.error(error);
      }finally {
        setIsLoadingSurvey(false); // إخفاء مكون التحميل بعد الانتهاء
      }
    };
    fetchData();
  }, [id]);
  const [answer, setAnswer] = useState([]);
  const [IsLoadingAnswer, setIsLoadingAnswer] = useState(true); // حالة لمؤشر التحميل

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://robert-api.lavetro-agency.com/api/survey/show/${id}`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        let surveyAnswer = [];
        for (let i = 0; i < response.data.survey_details?.length; i++) {
          const questionId = response.data.survey_details[i]?.question?.id;
          const answers = response.data.survey_details[i]?.question?.answers;
        
          if (questionId && answers) {
            surveyAnswer[questionId] = answers;
          }
        }
        setAnswer(surveyAnswer);
        // console.log(surveyAnswer);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingAnswer(false); // إخفاء مكون التحميل بعد الانتهاء
      }
    };
  
    fetchData();
  }, [id]);

  
  // let datatime= quizesTime;
    
  let [index, setIndex] = useState(0);
  let [questiontest, setQuestion] = useState(quizes[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
 

  console.log(index)
  const [isButtonClicked, setButtonClicked] = useState(false);
  useEffect(() => {
    if (isButtonClicked) {
      const timertest = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          clearInterval(timertest);
        }
      }, 1000);
  
      return () => clearInterval(timertest);
    }
  }, [isButtonClicked, time]);


  
  
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const minutesString = minutes.toString().padStart(2, '0');
const secondsString = seconds.toString().padStart(2, '0');
    // let Option1 = useRef(null);
    // let Option2 = useRef(null);
    // let Option3 = useRef(null);
    // let Option4 = useRef(null);

    // let optionArray = [Option1, Option2, Option3, Option4];
    const next3 = () => {
      if (lock) {
      if (index === quizes.length - 1) {
      setResult(true);
      return 0;
      }
      setIndex(prev => prev + 1);
      setQuestion(quizes[index + 1]);
      setLock(false);
     
      // setIsFormEnabled(true); // تمكين النموذج بعد الانتقال إلى السؤال التالي
      // setIsQuestionSubmitted(false); // إعادة تعيين قيمة isQuestionSubmitted إلى false بعد الانتقال إلى السؤال التالي
      // setIsAnswerCorrect(true); // إعادة تعيين قيمة isAnswerCorrect إلى true بعد الانتقال إلى السؤال التالي
      // setUserAnswer('');
      
      }
      };
    
  
  

  const reset = () => {
    setIndex(0);
    setQuestion(quizes[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setTime(parseInt(testTime) * 60);
  };
    
    
  const [indexData, setIndexData] = useState(() => {
    const storedIndexData = localStorage.getItem('indexData');
    return storedIndexData ? parseInt(storedIndexData) : 1;
  });
  console.log(indexData)
  
  const handleIncrement = () => {
    if (indexData > quizes.length - 1) {
      setResult(true);
    } else {
      setIndexData(prev => {
        const newIndexData = prev + 1;
        localStorage.setItem('indexData', newIndexData.toString());
        return newIndexData;
      });
    }
  };
  const handleInputChange5 = (event) => {
    const value = event.target.value;
    onChildValueChange(value); // تمرير القيمة إلى المكون الأب
  };
  const [answersArray, setAnswersArray] = useState([]);
  const optionArray = useRef([]);
  const checkAns = (e, ans) => {
    if (!lock) {
      const currentQuestion = quizes[index];
      const question_id = currentQuestion.question.id;
      const value = currentQuestion.question.answers == ans;
  
      // تسجيل id السؤال والقيمة في مصفوفة جديدة
      const answerRecord = { question_id, value };
      setAnswersArray(prev => [...prev, answerRecord]);
  
      if (value) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
  
        // حلقة تكرارية لتحديد وتلوين الإجابة الصحيحة بالأخضر
        const options = e.target.parentNode.querySelectorAll(".option");
        options.forEach(option => {
          const optionAnswer = option.getAttribute("data-answer");
          if (optionAnswer === currentQuestion.question.answers) {
            option.classList.add("correct");
          }
        });
      }
    }
  };
  const highlightCorrectAnswer = () => {
    if (quizes[index]?.question?.answers) {
      const correctIndex = quizes[index].question.answers;
      optionArray.current[correctIndex].classList.add("correct");
    }
  };
 

  const checkYes = (e, ans) => {
    if (!lock) {
      const currentQuestion = quizes[index];
      const question_id = currentQuestion.question.id;
      const value = currentQuestion.question.answers == ans;
  
      // تسجيل id السؤال والقيمة في مصفوفة جديدة
      const answerRecord = { question_id, value };
      setAnswersArray(prev => [...prev, answerRecord]);
  
      if (value) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
  
        // حلقة تكرارية لتحديد وتلوين الإجابة الصحيحة بالأخضر
        const options = e.target.parentNode.querySelectorAll(".option");
        options.forEach(option => {
          const optionAnswer = option.getAttribute("data-answer");
          if (optionAnswer === currentQuestion.question.answers) {
            option.classList.add("correct");
          }
        });
      }
    }
  };
  const highlightCorrectAnswer1 = () => {
    if (quizes[index]?.question?.answers) {
      const correctIndex = quizes[index].question.answers;
      optionArray.current[correctIndex].classList.add("correct");
    }
  };
  
  

const removeAllClasses = () => {
  const elements = document.querySelectorAll(".correct, .wrong");
  elements.forEach(element => {
    element.classList.remove("correct");
    element.classList.remove("wrong");
  });
};

  
  
  const [userAnswer, setUserAnswer] = useState('');
const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);
const [isFormEnabled, setIsFormEnabled] = useState(true);
const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
// const [answersArray, setAnswersArray] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();

  // فحص صحة الإجابة هنا
  const value = validateAnswer(userAnswer);

  // تسجيل id السؤال والقيمة في مصفوفة جديدة
  const question_id = quizes[index].question.id;
  const answerRecord = { question_id, value };
  setAnswersArray(prev => [...prev, answerRecord]);

  if (value) {
    // إجابة صحيحة
    setIsAnswerCorrect(true);
    setIsFormEnabled(false); // تعطيل النموذج بعد إجابة صحيحة
    setIsQuestionSubmitted(true); // تعيين قيمة isQuestionSubmitted إلى true بعد الإجابة
    // قم باتخاذ الإجراء المناسب عند الإجابة الصحيحة
  } else {
    // إجابة خاطئة
    setIsAnswerCorrect(false);
    setIsQuestionSubmitted(true); // تعيين قيمة isQuestionSubmitted إلى true بعد الإجابة
    // قم باتخاذ الإجراء المناسب عند الإجابة الخاطئة
  }
};

const handleInputChange = (e) => {
  setUserAnswer(e.target.value);
};

const handleFormEnable = () => {
  setIsFormEnabled(true);
  setIsQuestionSubmitted(false); // إعادة تعيين قيمة isQuestionSubmitted إلى false عند تمكين النموذج
  setIsAnswerCorrect(true); // إعادة تعيين قيمة isAnswerCorrect إلى true عند تمكين النموذج
  setUserAnswer(''); // إعادة تعيين قيمة userAnswer إلى القيمة الافتراضية عند تمكين النموذج
};
const next = () => {
  if (index === quizes.length - 1) {
    setResult(true);
    return 0;
  }

  setIndex(index + 1);
  setQuestion(quizes[index + 1]);
  setIsFormEnabled(true);
  setIsQuestionSubmitted(false);
  setIsAnswerCorrect(true);
  setUserAnswer('');
};

const validateAnswer = (answer) => {
  let keywords = quizes[index]?.question?.answers; // المصفوفة التي تحتوي على الكلمات المقارنة

  // تحقق مما إذا كانت الإجابة تحتوي على أي من الكلمات الموجودة في المصفوفة
  const containsKeyword = keywords.some((keyword) =>
    answer.toLowerCase().includes(keyword.toLowerCase())
  );

  return containsKeyword;
};
///// top ten
const [userAnswer6, setUserAnswer6] = useState('');
const [isAnswerCorrect6, setIsAnswerCorrect6] = useState(true);
const [isQuestionSubmitted6, setIsQuestionSubmitted6] = useState(false);
const [showErrorMessage, setShowErrorMessage] = useState(false);
const [answerTop, setanswerTop] = useState([]);
// console.log(answerTop)
const handleSubmit6 = (e) => {
  e.preventDefault();

  const userAnswer = userAnswer6.toLowerCase().trim();
  console.log(userAnswer);

  const value = validateAnswer6(userAnswer);
  const question_id = Object.keys(answer).find(key => answer[key].some(item => item.toLowerCase().trim() === userAnswer.toLowerCase().trim()));
const answerten =userAnswer;
  if (question_id) {
    const answerRecord = { question_id, value };
    setAnswersArray(prev => [...prev, answerRecord]);
const checkAnserTen = { question_id, value,userAnswer };
setanswerTop(prev => [...prev, checkAnserTen]);


    if (value) {
      setIsAnswerCorrect6(true);
      handleFormReset6();
    } else {
      setIsAnswerCorrect6(false);
    }
  } else {
    setShowErrorMessage(true);
    setTimeout(() => {
      setShowErrorMessage(false);
    }, 2000);
  }
};

const handleInputChange6 = (e) => {
  setUserAnswer6(e.target.value);
};

const handleFormReset6 = () => {
  setUserAnswer6('');
  setIsQuestionSubmitted6(false);
  setIsAnswerCorrect6(true);
  setShowErrorMessage(false);
};

const next6 = () => {
  if (index === quizes.length - 1) {
    setResult(true);
    return 0;
  }

  setIndex(index + 1);
  setQuestion(quizes[index + 1]);
  setIsFormEnabled(true);
  setIsQuestionSubmitted(false);
  setIsAnswerCorrect(true);
  setUserAnswer('');
};

const validateAnswer6 = (ans) => {
  const lowercaseAnswer = ans.toLowerCase().trim();
  const flatAnswersArray = Object.values(answer).flatMap(arr => arr.map(item => item.toLowerCase().trim()));  console.log(flatAnswersArray);
console.log(ans+'test')
  if (flatAnswersArray.length > 0) {
    const containsAnswer = flatAnswersArray.includes(lowercaseAnswer);
    return containsAnswer;
  }
console.log(lowercaseAnswer)
  return false;
};
const [userAnswer1, setUserAnswer1] = useState('');
const [isAnswerCorrect1, setIsAnswerCorrect1] = useState(true);
const [isFormEnabled1, setIsFormEnabled1] = useState(true);
const [isQuestionSubmitted1, setIsQuestionSubmitted1] = useState(false);
// const [answersArray, setAnswersArray] = useState([]);

const handleSubmit1 = (e) => {
  e.preventDefault();

  // فحص صحة الإجابة هنا
  const value = validateAnswer1(userAnswer1);

  // تسجيل id السؤال والقيمة في مصفوفة جديدة
  const question_id = quizes[index].question.id;
  const answerRecord = { question_id, value };
  setAnswersArray(prev => [...prev, answerRecord]);

  if (value) {
    // إجابة صحيحة
    setIsAnswerCorrect1(true);
    setIsFormEnabled1(false); // تعطيل النموذج بعد إجابة صحيحة
    setIsQuestionSubmitted1(true); // تعيين قيمة isQuestionSubmitted إلى true بعد الإجابة
    // قم باتخاذ الإجراء المناسب عند الإجابة الصحيحة
  } else {
    // إجابة خاطئة
    setIsAnswerCorrect1(false);
    setIsQuestionSubmitted1(true); // تعيين قيمة isQuestionSubmitted إلى true بعد الإجابة
    // قم باتخاذ الإجراء المناسب عند الإجابة الخاطئة
  }
};

const handleInputChange1 = (e) => {
  const numericValue = e.target.value.replace(/[^0-9]/g, ''); // إزالة أي حرف غير رقمي من القيمة المدخلة
  setUserAnswer1(numericValue);
};

const handleFormEnable1 = () => {
  setIsFormEnabled1(true);
  setIsQuestionSubmitted1(false); // إعادة تعيين قيمة isQuestionSubmitted إلى false عند تمكين النموذج
  setIsAnswerCorrect1(true); // إعادة تعيين قيمة isAnswerCorrect إلى true عند تمكين النموذج
  setUserAnswer1(''); // إعادة تعيين قيمة userAnswer إلى القيمة الافتراضية عند تمكين النموذج
};
const next1 = () => {
  if (index === quizes.length - 1) {
    setResult(true);
    return 0;
  }

  setIndex(index + 1);
  setQuestion(quizes[index + 1]);
  setIsFormEnabled1(true);
  setIsQuestionSubmitted1(false);
  setIsAnswerCorrect1(true);
  setUserAnswer1('');
};


const validateAnswer1 = (answer) => {
  let keywords = quizes[index]?.question?.answers; // المصفوفة التي تحتوي على الكلمات المقارنة

  // تحقق مما إذا كانت الإجابة تحتوي على أي من الكلمات الموجودة في المصفوفة
  const containsKeyword = keywords.some((keyword) =>
    answer.toLowerCase().includes(keyword.toLowerCase())
  );

  return containsKeyword;
};
const [userAnswer2, setUserAnswer2] = useState(0);
const [isAnswerCorrect2, setIsAnswerCorrect2] = useState(true);
const [isFormEnabled2, setIsFormEnabled2] = useState(true);
const [isQuestionSubmitted2, setIsQuestionSubmitted2] = useState(false);
// const [answersArray, setAnswersArray] = useState([]);

const handleSubmit2 = (e) => {
  e.preventDefault();

  // فحص صحة الإجابة هنا
  const value = validateAnswer2(userAnswer2);

  // تسجيل id السؤال والقيمة في مصفوفة جديدة
  const question_id = quizes[index].question.id;
  const answerRecord = { question_id, value };
  setAnswersArray(prev => [...prev, answerRecord]);

  if (value) {
    // إجابة صحيحة
    setIsAnswerCorrect2(true);
    setIsFormEnabled2(false); // تعطيل النموذج بعد إجابة صحيحة
    setIsQuestionSubmitted2(true); // تعيين قيمة isQuestionSubmitted إلى true بعد الإجابة
    // قم باتخاذ الإجراء المناسب عند الإجابة الصحيحة
  } else {
    // إجابة خاطئة
    setIsAnswerCorrect2(false);
    setIsQuestionSubmitted2(true); // تعيين قيمة isQuestionSubmitted إلى true بعد الإجابة
    // قم باتخاذ الإجراء المناسب عند الإجابة الخاطئة
  }
};

const handleInputChange2 = (e) => {
  setUserAnswer2(e.target.value);
};

const handleFormEnable2 = () => {
  setIsFormEnabled2(true);
  setIsQuestionSubmitted2(false); // إعادة تعيين قيمة isQuestionSubmitted إلى false عند تمكين النموذج
  setIsAnswerCorrect2(true); // إعادة تعيين قيمة isAnswerCorrect إلى true عند تمكين النموذج
  setUserAnswer2(''); // إعادة تعيين قيمة userAnswer إلى القيمة الافتراضية عند تمكين النموذج
};
const next2 = () => {
  if (index === quizes.length - 1) {
    setResult(true);
    return 0;
  }

  setIndex(index + 1);
  setQuestion(quizes[index + 1]);
  setIsFormEnabled(true);
  setIsQuestionSubmitted(false);
  setIsAnswerCorrect(true);
  setUserAnswer('');
};


const validateAnswer2 = (answer) => {
  // قم بتعريف المصفوفة التي تحتوي على الكلمات المقارنة هنا
  const keyword = parseInt(quizes[index]?.question?.answers);

  // تحقق مما إذا كانت الإجابة تحتوي على الكلمة المحددة
  const containsKeyword = answer.toLowerCase().includes(keyword);

  return containsKeyword;
};
  

const trueCount = answersArray.reduce((count, question, index) => {
  if (question.value === true) {
    return count + 1;
  }
  return count;
}, 0);
// const [data, setData] = useState([]);
const isRequestSent = useRef(false);
useEffect(() => {
  if ((!isRequestSent.current && answersArray.length === quizes.length && result) || (!isRequestSent.current && time === 0 && result) || (!isRequestSent.current&&result))   { // قم بإعداد بيانات الاستدعاء الخاصة بك هنا
    const postData = {
      answers: answersArray
    };

    // قم بإجراء استدعاء Axios بصيغة POST
    axios.post(`https://robert-api.lavetro-agency.com/api/survey/${id}/answer`, postData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        // قم بمعالجة الاستجابة هنا
        // console.log(response.data);
      })
      .catch(error => {
        // قم بمعالجة الخطأ هنا
        console.error(error);
      })
      .finally(() => {
        isRequestSent.current = true;
      });
  }
}, [answersArray, id, time, quizes.length,setResult]);
const [isanswerloding, setAnswerLoding] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    if ((!isRequestSent.current && answersArray.length === quizes.length && result) || (!isRequestSent.current && time === 0 && result)|| (!isRequestSent.current&&result)) {
      try {
        const response = await axios.get(`https://robert-api.lavetro-agency.com/api/survey/${id}/answers`);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        isRequestSent.current = true; // قم بتعيين قيمة isRequestSent.current إلى true هنا إذا كنت ترغب في ذلك
        setResultAnswer(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setAnswerLoding(false); // إخفاء مكون التحميل بعد الانتهاء
      }
    }
  };

  fetchData();
}, [id, isRequestSent, answersArray, quizes.length, time, result]);
// const next = () => {
//   if (lock) {
//     if (index === quizes.length - 1) {
//       setResult(true);
//       return 0;
//     }      
//     setIndex(prev => prev + 1);
//     setQuestion(quizes[index + 1]);
//     setLock(false);
//     handleFormEnable();
//     // setIsFormEnabled(true); // تمكين النموذج بعد الانتقال إلى السؤال التالي
//     // setIsQuestionSubmitted(false); // إعادة تعيين قيمة isQuestionSubmitted إلى false بعد الانتقال إلى السؤال التالي
//     // setIsAnswerCorrect(true); // إعادة تعيين قيمة isAnswerCorrect إلى true بعد الانتقال إلى السؤال التالي
//     // setUserAnswer(''); 
  
//   }
// };

    console.log(answersArray)
    // console.log(trueCount)
    //https://robert-api.lavetro-agency.com/api/documentation#/Front%20End/AnswerSurveyStore
    const [start, setStart] = useState(true);

    if ((isLoading || IsLoadingSurvey || isLoadingQuize  || start) ) {
      return (
        <div style={{ height: '50vh',  width:'80%', margin:'10rem auto', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
           <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={url+quizTitle[0]?.image} style={{height:'max-content'}} />
      <Card.Body style={{display:'flex',alignItems:'center', flexDirection:'column', width:'90%', margin:'10px auto'}}>
        <Card.Title style={{textAlign:'center'}}>{quizTitle[0]?.ar_name}</Card.Title>
        <Card.Text style={{textAlign:'center'}}>
        {quizTitle[0]?.notes}
        </Card.Text>
        <Card.Title style={{textAlign:'center'}}>عدد الاسئلة: {quizTitle[0]?.questions_count}</Card.Title>
        <Button variant="primary" onClick={() => { setStart(false); setButtonClicked(true); }} style={{ width: '80%' }}>بدء الاختبار</Button>
        </Card.Body>
    </Card>
        </div>
      );
    }
  
    // console.log(indexData);
    console.log(answersArray);
    // console.log(answersArray[index]?.question_id);
    // console.log(quizes[index]?.question?.id);
  return (

    //start quiz
    <div className="ha-os-containar">
    <div className='zh-container-quiz' style={{direction:'rtl'}}>
        
        {(result || time==0)? null:<>
      <div className='ha-quez-con' style={{display:'flex',flexDirection:'column-reverse',alignItems:'center' ,justifyContent:'space-between', margin:'0 auto' ,width:'100%'}}>
       
        <div className="ha-quez" style={{position:'relative'}}>
        <div className='zh-timer'>
        <p> {minutesString} : {secondsString}</p>
        </div>
        <h2 style={{fontSize:'1rem'}}>{survey === 'normal'?quizes[index ]?.question?.content:surveyname}</h2>
        {quizes[index ]?.question?.type === "one_select" && (
  <ul className='zh-ul'>
  {quizes[index]?.question?.ar_options?.map((quiz, i) => (
          <li
            key={i}
            ref={(el) => (optionArray.current[i] = el)}
            onClick={(e) => {
              checkAns(e, i);
              if (!e.target.classList.contains("correct")) {
                highlightCorrectAnswer();
              }
            }}
  >
    {quiz}
  </li>
))}
  </ul>
)}


{(quizes[index]?.question?.type === "text") && (survey === 'normal') &&(

<Form onSubmit={handleSubmit} disabled={!isFormEnabled} style={{display:'flex',flexDirection:'column'}}>
<FloatingLabel controlId="floatingTextarea2" label="الاجابة"  style={{ width: '100%' }}
  >
  <Form.Control
    as="textarea"
    placeholder="Leave a comment here"
    style={{ height: '40px', marginBottom: '17px' }}
    value={userAnswer}
    onChange={handleInputChange}
    disabled={!isFormEnabled || isQuestionSubmitted} // تعطيل إدخال الإجابة بعد إجابة صحيحة أو تعطيل النموذج أو بعد الضغط على زر الإرسال
  />
</FloatingLabel>
{isAnswerCorrect && isQuestionSubmitted && (
  <Alert variant="success">
    إجابة صحيحة.   
  </Alert>
)}
{!isAnswerCorrect && isQuestionSubmitted && (
  <>
    <Alert variant="danger">
      إجابة خاطئة.
    </Alert>
    <Alert variant="success">
  الإجابة الصحيحة هي{" "}
  {quizes[index]?.question?.answers.slice(0, -1).join(" أو ") +
    " " +
    quizes[index]?.question?.answers.slice(-1)}
</Alert>
  </>
)}
<Button className='buttonsend' type="submit" disabled={!isFormEnabled || isQuestionSubmitted} style={{ display: isFormEnabled && !isQuestionSubmitted ? 'block' : 'none' }}>
  إرسال
</Button>
{/* {!isFormEnabled && (
  <Button onClick={handleFormEnable}>
    تمكين النموذج
  </Button>
)} */}
</Form>)}
      {quizes[index]?.question?.type === "yesNo" && (
  <ul className='zh-ul'>
      {quizes[index]?.question?.ar_options?.map((quiz, i) => (
          <li
            key={i}
            ref={(el) => (optionArray.current[i] = el)}
            onClick={(e) => {
              checkYes(e, i);
              if (!e.target.classList.contains("correct")) {
                highlightCorrectAnswer1();
              }
            }}
  >
    {quiz}
      </li>
    ))}
  </ul>
)}
{quizes[index]?.question?.type === "range" && (
  <Form onSubmit={handleSubmit2} disabled={!isFormEnabled2} style={{display:'flex',flexDirection:'column',margin:'2px 0'}}>
  <div className="ha-range">
    <label htmlFor="customRange2" className="form-label" style={{display:"flex",direction:'rtl'}}>
      نطاق الإجابة
    </label>
   
<div class="range">
  <input class="range__input" type="range"  min="0" max="10" 
  step="1" 
  list="number" 
  value={userAnswer2}
  onChange={handleInputChange2}
  disabled={!isFormEnabled2 || isQuestionSubmitted2}/>
  <datalist class="range__list" id="number">
    <option class="range__opt opt0">0</option> 
    <option class="range__opt">1</option> 
    <option class="range__opt">2</option> 
    <option class="range__opt">3</option> 
    <option class="range__opt">4</option> 
    <option class="range__opt">5</option> 
    <option class="range__opt">6</option> 
    <option class="range__opt">7</option> 
    <option class="range__opt">8</option> 
    <option class="range__opt">9</option> 
    <option class="range__opt">10</option> 
    
  </datalist>
</div>


  </div>
  {isQuestionSubmitted2 && (
  <>
    <Alert variant={isAnswerCorrect2 ? 'success' : 'danger'}>
      {isAnswerCorrect2 ? 'إجابة صحيحة.' : 'إجابة خاطئة.'}
    </Alert>
    <Alert variant={!isAnswerCorrect2 ? 'success' : null}>
      {!isAnswerCorrect2 && (
        <>
          الإجابة الصحيحة هي{" "}
          {quizes[index]?.question?.answers.slice(0, -1).join(" أو ") +
            " " +
            quizes[index]?.question?.answers.slice(-1)}
        </>
      )}
    </Alert>
  </>
)}
  <Button className='buttonsend' type="submit" disabled={!isFormEnabled2 || isQuestionSubmitted2} style={{ display: isFormEnabled2 && !isQuestionSubmitted2 ? 'block' : 'none' }}>
    إرسال
  </Button>
  {/* {!isFormEnabled2 && (
    <Button onClick={handleFormEnable2}>
      تمكين النموذج
    </Button>
  )} */}
</Form>
)}

{quizes[index]?.question?.type === "number" && (

<Form onSubmit={handleSubmit1} disabled={!isFormEnabled1} style={{display:'flex',flexDirection:'column',margin:'5px 0'}}>
<input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      placeholder="الاجابة"
      style={{
        height: '40px',
        marginBottom: '17px',
        borderRadius: '10px',
        padding: '10px',
      }}
      value={userAnswer1}
      onChange={handleInputChange1}
      disabled={!isFormEnabled1 || isQuestionSubmitted1}
    />
  {isQuestionSubmitted1 && (
    <>
    <Alert variant={isAnswerCorrect1 ? 'success' : 'danger'}>
      {isAnswerCorrect1 ? 'إجابة صحيحة.' : 'إجابة خاطئة.'}
    </Alert>
     <Alert variant={!isAnswerCorrect1 ? 'success' : null}>
     {!isAnswerCorrect1 && (
       <>
         الإجابة الصحيحة هي{" "}
         {quizes[index]?.question?.answers.slice(0, -1).join(" أو ") +
           " " +
           quizes[index]?.question?.answers.slice(-1)}
       </>
     )}
   </Alert>
   </>
  )}
  <Button className='buttonsend' type="submit" disabled={!isFormEnabled1 || isQuestionSubmitted1} style={{textAlign:"center",display: isFormEnabled1 && !isQuestionSubmitted1 ? 'block' : 'none' }}>
    إرسال
  </Button>
  {/* {!isFormEnabled1 && (
    <Button onClick={handleFormEnable1}>
      تمكين النموذج
    </Button>
  )} */}
</Form>
      )}

    { survey === "top_ten" && (
      <div >
        <div className='sticky-zh-fixed' style={{ position: 'sticky', top: '11%' ,
         backgroundColor:'#fff',width:'80vw',borderBottom:'3px dashed',zIndex:'4'}}
         >
 <Form onSubmit={handleSubmit6} style={{ display: 'flex', margin: '20px 0', justifyContent: 'space-between' }}  >
 
  <FloatingLabel controlId="floatingTextarea2" label="الاجابة" style={{ width: '70%', height: '70px' }}>
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '70px', marginBottom: '40px' }}
      value={userAnswer6}
      onChange={handleInputChange6}
      disabled={isQuestionSubmitted6}
 
    />
  </FloatingLabel>
  {showErrorMessage && (
    <Alert variant="danger" className='ho-text-button'>
      حاول مرة أخرى.
    </Alert>
  )}
  {isAnswerCorrect6 && isQuestionSubmitted6 && (
    <Alert variant="success" className='ho-text-button'>
      إجابة صحيحة.
    </Alert>
  )}
  {!isAnswerCorrect6 && isQuestionSubmitted6 && (
    <Alert variant="danger" >
      إجابة خاطئة.
    </Alert>
  )}
  {isQuestionSubmitted6 && (
    <Button className="buttonsend ho-text-button" onClick={handleFormReset6} style={{ display: 'block' }}>
      إعادة
    </Button>
  )}
  {!isQuestionSubmitted6 && (
    <Button className="buttonsend" type="submit" style={{ display: 'block' ,fontSize:'1.1rem'}}>
      إرسال
    </Button>
  )}
</Form>
{/* <hr/> */}
</div>

        {quizes.map((survey, i) => (
      <div className='zh-sticky-bottom' style={{width:'80vw'}}>
      <div key={i} id={i} >
         
         {survey.question?.type === 'text' && (
           <div >
           
             <Table className='table-Secondary' responsive="sm" id={survey.question?.type} style={{ width: '100%' }} striped  bordered hover variant="blue"  >
               <thead >
                 {i === 0 && (
                   <tr>
                     {/* <th style={{ width: '15%' ,backgroundColor:'#097bed',color:'#fff' }}>#</th> */}
                     {survey.question?.content.map((title, index) => (
                       <th key={index} style={{ width: '20%', textAlign: 'center',backgroundColor:'#097bed',color:'#fff',borderStyle:'hidden'  }}>{title}</th>
                     ))}
                     
                     {survey.question?.answers.map((title, index) => (
                       <th key={index} style={{ width: '15%', textAlign: 'center',backgroundColor:'#097bed',color:'#fff',borderStyle:'hidden' }}>{title}</th>
                     ))}
                   </tr>
                 )}
               </thead>
               <tbody  className={answersArray.find(answer => answer.question_id == survey?.question?.id && answer.value === true)  ? 'table-success' : ''} >
   {i !== 0 && (
     <tr style={{ width: '100%', backgroundColor: '#white' }}>
       {/* <td style={{ width: '15%' }}>{i}</td> */}
       {survey.question?.content.map((value, index) => (
         <td key={index} style={{ width: '44%', textAlign: 'center' ,color:'black'}}>{value}</td>
       ))}
       <div className='zh-table-mobile-answer' style={{alignItems: 'center',
     display: 'flex',
     justifyContent: 'space-evenly',
     width: '100%',

      paddingRight: '20%',

      fontSize:'.9rem',
      paddingRight: '20%',
      borderLeft:'.2px solid gray'}}>
       {/* {survey?.question?.answers.map((value, index) => ( */}
          {/* <div key={index}> */}
           <td className='ho-td-mobile' style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', }}>
           {answersArray.find(answer => answer.question_id == survey?.question?.id && answer.value === true) ? (
   <span style={{ visibility: 'visible' }}>{answerTop.find(answer =>answer.question_id == survey?.question?.id)?.userAnswer ||null}</span>
 ) : (
   <span style={{ visibility: 'hidden' }}>test</span>
 )}
           </td>
          </div>
       {/* ))} */}
       {/* </div> */}
     </tr>
   )}
 </tbody>
               
               
             </Table>
           </div>
         )}
   </div>
      </div>
))}
      </div>
    )}


        <div className='zh-btn-text-quiz' >
        <button className='buttonnew' onClick={() => {
  if (survey === 'normal') {
    next();
    next1();
    next2();
    next3();
    next6();
    removeAllClasses();
  } else {
    setResult(true);
  }
  handleIncrement();
  // handleFormEnable6();
  localStorage.removeItem('indexData');
}}>{survey === 'normal'?(index+1 === quizes.length  ? 'اعطاء النتيجة' : 'السؤال التالي'):'اعطاء النتيجة'}</button>
<div className='zh-index' style={{ textAlign: 'right' }}>
  {survey === 'normal' ? `${index+1}  / ${quizes.length}` : ''}
</div>        </div>
        </div>
        <img className='img-quiz' src={quizes[index]?.question?.image===null?img2:url+quizes[index]?.question?.image}/> 
</div>
        </>}
       
        {((result || time === 0) && survey === 'normal') ? (
  <>
    <div className='zh-score-quiz'>
      <h3>اجابة صحيحة {trueCount} من {quizes.length}</h3>
      {/* <h1 style={{ margin: '25px auto' }}> نتائج الاختبار</h1> */}
      <div className="ha-container-result" style={{ width: '80%', margin: '0 auto !important' }}>
        <div className="ha-row-result" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: "5px", margin: "2px", borderBottom: '1px solid var(--heading-color)' ,width:'100%'}}>
          {/* <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "5px", margin: "2px", borderBottom: '1px solid var(--heading-color)' }}>
            <p style={{ width: "30%", textAlign: 'center' }}>نسبة الاجابات الصحيحة</p>
            <p style={{ width: "70%", textAlign: 'center' }}>السؤال</p>
          </div> */}
          {resultAnswer.map((res_ans) => (
            <div className="ha-row-result" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "5px", margin: "2px", borderBottom: '1px solid var(--heading-color)',width:'100%' }}>
              <ProgressBar now={res_ans.truth_percent} label={res_ans.truth_percent + '%'} style={{ width: "25%" }} />
              <p style={{ width: "70%" }}>{res_ans.question_content}</p>
            </div>
          ))}
        </div>
      </div>
      
      <h5>اذا اعجبك هذا الاختبار ,يمكنك لعب هذه الاختبارات ايضا  </h5>
      <div className='ha-slider' style={{ width: '62vw', margin: '70px auto'}}>
        <Newquizslide  id={quizTitle[0]?.category_id} onClick={reset} style={{margin:'50px'}}/>
      </div>
    
      <a href='http://robquiz.com'>
  <button className='buttonnew ha-reset'>العودة الى الرئيسية</button>
</a>      
    </div>
  </>
) : ((result || time === 0) && survey === 'top_ten') ? (
  <>
     <div className='zh-score-quiz'>
     <div style={{width:'80%'}}>
  {quizes.map((survey, i) => (
    <div key={i} id={i}>
      {survey.question?.type === 'text' && (
        <div>
          <Table className='table-Secondary' responsive="sm" id={survey.question?.type} striped bordered style={{ width: '100%' }}>
            <thead>
              {i === 0 && (
                <tr>
                  {/* <th style={{ width: '15%' }}>#</th> */}
                  {survey.question?.content.map((title, index) => (
                    <th key={index} style={{ width: '37.5%', textAlign: 'center',borderStyle:'hidden' }}>{title}</th>
                  ))}
                  {survey.question?.answers.map((title, index) => (
                    <th key={index} style={{ width: '25%', textAlign: 'center',borderStyle:'hidden' }}>{title}</th>
                  ))}
                </tr>
              )}
            </thead>
            <tbody className={answersArray.find(answer => answer.question_id == survey?.question?.id && answer.value === true) ? 'table-success' : 'table-danger'}>
              {i !== 0 && (
                <tr style={{ width: '100%',}}>
                {/* <tr style={{ width: '100%', backgroundColor: 'green' }}> */}
                  {/* <td style={{ width: '15%' }}>{i}</td> */}
                 
                  {survey.question?.content.map((value, index) => (
                    <td key={index} style={{ width: '60%', textAlign: 'center',fontSize:'.7em' ,fontSize:'1rem'}} className='zh-score-next'>{value}</td>
                  ))}
                   <div style={{alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingRight: '20%'}}>
<td key={index} className='ho-td-mobile' style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
  {answersArray.find(answer => answer.question_id === survey?.question?.id && answer.userAnswer === true) ? (
    <span style={{ visibility: 'visible' }}>{answerTop.find(answer => answer.question_id === survey?.question?.id)?.userAnswer || null}</span>
  ) : (
    
      <span key={index} style={{ visibility: 'visible' }}>{survey?.question?.answers[0]}</span>
    
  )}
</td>
                  </div>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  ))}
</div>
      {/* <h1 style={{ margin: '25px auto' }}> نتائج الاختبار</h1> */}
      <div className="ha-container-result" style={{ width: '80%', margin: '0 auto !important' }}>
        {/* <div className="ha-row-result" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: "5px", margin: "2px", borderBottom: '1px solid var(--heading-color)',width:'100%' }}> */}
          {/* <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "5px", margin: "2px", borderBottom: '1px solid var(--heading-color)' }}>
            <p style={{ width: "30%", textAlign: 'center' }}>نسبة الاجابات الصحيحة</p>
            <p style={{ width: "70%", textAlign: 'center' }}>السؤال</p>
          </div> */}
          {/* {resultAnswer.map((res_ans) => (
            <div className="ha-row-result" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "5px", margin: "2px", borderBottom: '1px solid var(--heading-color)' , width:'100%'}}>
              <ProgressBar now={res_ans.truth_percent} label={res_ans.truth_percent + '%'} style={{ width: "25%" }} />
              <p style={{ width: "70%" }}>{res_ans.question_content}</p>
            </div>
          ))} */}
        {/* </div> */}
      </div>
      <h5>اذا اعجبك هذا الاختبار ,يمكنك لعب هذه الاختبارات ايضا</h5>
      <div className='ha-slider' style={{ width: '85%', margin: '70px auto', marginRight: '-30px'}}>
        <Newquizslide id={quizTitle[0]?.category_id} link ='/new/quizpage' onClick={reset} />
      </div>
  
      <a href='http://robquiz.com'>
  <button className='buttonnew ha-reset'>العودة الى الرئيسية</button>
  
</a> 
    </div>
  
  </>

)  : null}   
{/* <a >
<button className='buttonback' >back</button> 
</a> */}
{/* <Link className='buttonback' to="#" onClick={() => window.history.back()}>
        ارجع
      </Link> */}
    </div>


    </div>
  )
}

export default Quiz