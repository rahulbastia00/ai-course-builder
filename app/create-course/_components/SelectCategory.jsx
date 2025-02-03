import CategoryList from '@/app/shared/CategoryList'
import React, { useContext } from 'react'
import Image from 'next/image'
import { UserinputContext } from '@/app/_context/UserinputContext'

function SelectCategory() {
  const { useCourseInput, setCourseInput } = useContext(UserinputContext)

  const handleCategoryChange = (category) => {
    setCourseInput((prev) => ({
      ...prev,
      category: category
    }))
  }

  return (
    <div className='px-10 md:px-20'>
      <h2 className='my-5'>Select The Course Category</h2>
      <div className='grid grid-cols-3 gap-10 px-10 md:px-20'>
        {CategoryList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-5 border 
              items-center rounded-xl hover:border-primary hover:bg-blue-50
              cursor-pointer ${useCourseInput?.category === item.name && 'border-primary hover:bg-blue-250'}`}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image src={item.icon} height={50} width={50} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectCategory
