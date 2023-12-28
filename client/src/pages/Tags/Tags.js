import React from 'react'
import { tagsList } from './TagList'
import TagsList from './TagsList'
import './Tags.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

function Tags() {
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
      <div className='home-container-2'>
    <h1 className='tags-h1'>Tags</h1>
    <p className='tags-p'>
        A tag is a keyword or label that categorizes your question with other,similar question
    </p>
    <p className='tags-p'>
        using the right tags makes it easier for others to find and answer your question
    </p>
      
      <div className='tags-container'>
        {
            tagsList.map((tag,index)=>(
                <TagsList tag={tag} key={index}/>
            ))
        }
      </div>
      </div>
    </div>
  )
}

export default Tags

