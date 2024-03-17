import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

export default function Form() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
        <Input type="text" placeholder="Tên tướng bạn đoán..." />
        <Button className='min-w-[200px] bg-yellow-500 hover:bg-yellow-600 duration-500'>Kiểm tra</Button>
    </div>
  )
}
