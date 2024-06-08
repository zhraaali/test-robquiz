import React from 'react'
import './Card.css'
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link ,useParams } from 'react-router-dom'
const Card = (props) => {
  return (
    <Link to={`/quizpage/${props.id}`}> 
    <div className="work_card ho-card-new" key={props.id}>
      <div className="work_thumbnail">
        <img src={props.img} alt="" className="work_img" />
        <div className="work_mask"></div>
      </div>

      <span className="work_category">{props.title}</span>
      <div className="work_title">
        <h3 className="" style={{ color: '#ffbe00' }}>{props.title}</h3>
        <p className="" style={{}}><FontAwesomeIcon icon={faTurnUp} style={{ color: "#ffbe00" }} /> Difficulty {props.difficulty}</p>
        <p className=""> <FontAwesomeIcon icon={faQuestion} style={{ color: '#ffbe00' }} /> Number of questions {props.question}</p>
      </div>
    </div>
    </Link>
    
  )
}

export default Card