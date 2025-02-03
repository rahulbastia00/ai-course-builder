import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Image src={'/logo.svg'} width={40} height={40} alt=""/>
      <UserButton/>
    </div>
  )
}

export default Header
