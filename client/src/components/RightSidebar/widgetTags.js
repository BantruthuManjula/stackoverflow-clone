import React from 'react'

function widgetTags() {
    const tags=['c','css','html','java','javascript','react.js','node.js','phyhon','express js','mysql','mongodb']
  return (
    <div className='widget-tags'>
        <h3>Watched tags</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tag)=>{
                    return(
                    <p key={tag}>{tag}</p>
                )})
            }
        </div>
      
    </div>
  )
}

export default widgetTags
