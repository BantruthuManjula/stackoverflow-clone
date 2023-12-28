import React from 'react'
import{useLocation,useNavigate} from 'react-router-dom';
import'./HomeMainbar.css';

import QuestionList from './QuestionList';
import { useSelector } from 'react-redux';


function HomeMainbar() {
  const questionsList=useSelector(state=>state.questionsReducer)
  console.log(questionsList)
 /* var questionsList=[
    {
      _id:1,
       upVotes:3,
       downVotes:2,
      noOfAnswers:2,
      questionTitle:"what is a function?",
      questionBody:"It ment to be",
      questionTags:["Java","node js","react js","mongo db"],
      userPosted:"mano",
      userId:1,
      askedOn:"jan 1",
      answer:[{
        answerBody:"Answer",
        userAnswered:"Kumar",
        AnswerdOn:"Jan 2",
        userId:2,
      }]
    },
  
    
    {
      _id:2,
      upVotes:3,
      downVotes:2,
      noOfAnswers:0,
      questionTitle:"what is a function?",
      questionBody:"It ment to be",
      questionTags:["Javascript","R","phython"],
      userPosted:"mano",
      userId:1,
      askedOn:"jan 1",
      answer:[{
        answerBody:"Answer",
        userAnswered:"Kumar",
        AnswerdOn:"Jan 2",
        userId:2,
      }]

      
    },
    {
      _id:3,
      upVotes:3,
      downVotes:2,
      noOfAnswers:0,
      questionTitle:"what is a function?",
      questionBody:"It ment to be",
      questionTags:["R","react js","mongo db"],
      userPosted:"mano",
      userId:1,
      askedOn:"jan 1",
      answer:[{
        answerBody:"Answer",
        userAnswered:"Kumar",
        AnswerdOn:"Jan 2",
        userId:2,
      }]


    }
]*/
const location=useLocation()
const user=1;
const navigate=useNavigate()
const checkAuth=()=>
{
  if(user===null)
  {
   alert("login or sign up to ask a question");
  navigate('/Auth');
  }
  else
  {
    navigate('/AskQuestion')
  }
}
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>
        }
        <button to='/AskQuestion'onClick={checkAuth} className='ask-btn'> AskQuestion</button>
      </div>
      <div>
        {
          questionsList.data===null ?
          <h1>Loading.....</h1>:
          <>
          <p>{questionsList.data.length} questions</p>
          <>
          <QuestionList questionsList={questionsList.data}/>
          </>
          </>
        }
      </div>
      
    </div>
  )
}

export default HomeMainbar
