"use client"
import { useDBGStore } from '@/stores/dbgstore'
import React from 'react'

export default function GameSub() {
  const life = useDBGStore((state:any) => state.life)
  return (
    <div className='text-center text-sm'>
      {life === 3 && <p>Chúc bạn vui vẻ với trò chơi!</p>}
      {life === 2 && <p>Cố lên! Mọi chiến thắng đều đến từ những lần thất bại!</p>}
      {life === 1 && <p>Ai mà không mắc sai lầm? Hãy cười lên và điều chỉnh lại hướng đi!</p>}
      {life === 0 && <p>Oops! Một lần lầm là một cơ hội mới nhưng sai lần nữa là cút!</p>}
    </div>
  )
}
