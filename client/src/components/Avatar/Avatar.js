import React from 'react'

function Avatar({children,backgroundColor,px,py,color,fontSize,borderRadius,cursor,textDecaration}) {
  const style={
    backgroundColor,
    padding:`${py} ${px}`,
    color:color||'black',
    fontSize,
    textAlign:"center",
    cursor:cursor||null,
    borderRadius,
    textDecaration:"none"
  }
  return (
    <div style={style}>
      {children}
      
    </div>
  )
}

export default Avatar;
