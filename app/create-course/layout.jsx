"use client"
import React, {useState} from 'react' 
import Header from '../dashboard/_components/Header'
import { UserinputContext } from '../_context/UserinputContext'


function CreateCourseLayout({children}) {
const [useCourseInput, setCourseInput] = useState([])

  return (
    <div>
      <UserinputContext.Provider value={{useCourseInput, setCourseInput}}>
      <>
        <Header/>
      {children}
      </>
      </UserinputContext.Provider>
    </div>
  )
}

export default CreateCourseLayout
