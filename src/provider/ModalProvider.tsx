'use client'

import { useEffect, useState } from 'react'

import AuthModal from '@/components/AuthModal'
import { ProductWithPrice } from '@/types'



const ModalProvider: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AuthModal />
    </>
  )
}

export default ModalProvider