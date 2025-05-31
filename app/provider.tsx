import { HeroUIProvider } from '@heroui/react'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './_components/Header'

function Provider({children}:{children: React.ReactNode}) {
  return (
    <HeroUIProvider>
    <Header/>
    <div className='h-[100px] bg-pink-100' />
        {children}
        <ToastContainer/>
    </HeroUIProvider>
  )
}

export default Provider