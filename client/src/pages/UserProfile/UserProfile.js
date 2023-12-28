import React,{useState} from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faBirthdayCake,faMonument,faPen} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'



function UserProfile() {
    const{id}=useParams()
    const users=useSelector((state)=>state.usersReducer);
    const currentProfile=users.filter((user)=>user._id===id)[0]
    const currentUser=useSelector((state)=>state.currentUserReducer)
    console.log(currentProfile)
     const[sitch,setSitch]=useState(false)
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            <section>
                <div className='user-details-container'>
                    <div className='user-details'>
                        <Avatar backgroundColor='purple' color='white' fontSize='50px' px='40px' py='30px'>
                            {currentProfile?.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <div className='user-name'>
                          <h1>{currentProfile?.name}</h1>
                          
                        </div>
                    </div>
                    {
                        currentUser?.result._id===id&&(
                            <button type='button' onClick={()=>setSitch(true)} className='edit-profile-btn'>
                                 <FontAwesomeIcon icon={faPen}/>EditProfile
                            </button>
                        )
                    }
                </div>
                <>
                {
                    sitch?(
                        <EditProfileForm currentUser={currentUser} setSitch={setSitch}/>
                    ):(<ProfileBio currentProfile={currentProfile}/>)
                }
                </>
            </section>
        </div>
      

    </div>
  )
}

export default UserProfile
