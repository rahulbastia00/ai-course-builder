import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      <Image src={"/logo.svg"} width={150} height={100} alt="logo"/>
      <Button>Get Started</Button>
    </div>
  )
}

export default Header
