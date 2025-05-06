import { ClerkProvider } from '@clerk/nextjs'
import { HeroUIProvider } from '@heroui/react'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './_components/Header'

function Provider({children}:{children: React.ReactNode}) {
  return (
    <ClerkProvider>
    <HeroUIProvider>
    <Header/>
    <div className='h-[100px] bg-pink-100' />
        {children}
        <ToastContainer/>
    </HeroUIProvider>
    </ClerkProvider>
  )
}

export default Provider