import React from 'react'
import Newsitem from './Newsitem'

export default function News() {
  return (
    <div>
      This is news component
      <Newsitem title="myTitle" description="myDesc"/>
      <Newsitem title="myTitle" description="myDesc"/>
    </div>
  )
}
