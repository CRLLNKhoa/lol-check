"use client"
import React from 'react'
import ChartDialog from '@/components/chartDialog'
import SupportDialog from '@/components/supportDialog'
import Howtoplay from './howtoplay'

export default function ActionDiv() {
  return (
    <div className='flex items-center'>
        <SupportDialog />
        <ChartDialog />
        <div className='ml-auto'><Howtoplay /></div>
    </div>
  )
}
