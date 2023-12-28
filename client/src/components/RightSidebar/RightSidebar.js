import React from 'react'
import './RightSidebar.css';
import Widget from '../../components/RightSidebar/widget';
import WidgetTags from '../../components/RightSidebar/widgetTags';

function RightSidebar() {
  return (
    <aside className='right-sidebar'>
      <Widget/>
      <WidgetTags/>

    </aside>
  )
}

export default RightSidebar
