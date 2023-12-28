import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import {Link, useParams, useNavigate} from 'react-router-dom'
 import {useSelector,useDispatch} from 'react-redux'
import moment from 'moment'
import '../../pages/Questions/Question.css'
import {deleteAnswer} from '../../actions/question'


function DisplayAnswer({question,handleShare}) {
  const user=useSelector((state)=>state.currentUserReducer)
  const{id}=useParams()
  const dispatch=useDispatch();
  const Navigate=useNavigate
  const handleDelete=(answerId,noOfAnswers)=>
  {
   dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
  }

  return (
    <div>
      {
        question.answer.map((ans)=>(
          <div className='display-ans' key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className='question-actions-user'>
              <div>
                <button type="button" onClick={handleShare}>share</button>
                {
                  user?.result?._id===ans?.userId&&(
                <button type="button" onClick={()=>handleDelete(ans._id,question.noOfAnswers)}>delete</button>
                  )
                 }
              </div>
              <div>
                <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link to={`/users/${ans.userId}`} className='user-link' style={{color:"#0086d8"}}>
                <Avatar backgroundColor="green" px="8px" py="5px" borderRadius="4px">

                  {ans.userAnswered.charAt(0).toUpperCase()}
                  
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
              </div>
            </div>
            </div>
        ))
      }
      
    </div>
  )
}

export default DisplayAnswer
