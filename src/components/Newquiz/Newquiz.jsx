import './Newquiz.css';
// import './../Categories/Categories.css'
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';

const Newquiz = (props) => {
  const location = useLocation();
  const handleClick = () => {
    localStorage.removeItem('quizesTime');
    window.location.reload(); // إعادة تحميل الصفحة
  };

  return (
    <div className="zh-newquiz">
      {location.pathname === `/quizpage/${props.id}` ? (
        <a href={`/new/quizpage/${props.id}`} onClick={handleClick}>
          <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src={props.img} style={{width:' 80%',
    margin: '0 auto',}} style2={props.style}/>
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>{props.title}</Card.Title>
              {/* <Card.Text>{props.description}</Card.Text> */}
              {/* <Card.Text>عدد الاجابات: {props.answer}</Card.Text> */}
            </Card.Body>
          </Card>
        </a>
      ) : (
        <a href={`/quizpage/${props.id}`} onClick={handleClick}>
          <Card style={{ width: '11rem' }}>
            <Card.Img
            //  variant="top" 
             src={props.img} />
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>{props.title}</Card.Title>
              {/* <Card.Text>{props.description}</Card.Text> */}
              {/* <Card.Text>{props.answer ? 'عدد الإجابات: ' + props.answer : null}</Card.Text>          */}
                 </Card.Body>
          </Card>
        </a>
      )}
    </div>
  );
};

export default Newquiz;