import React from 'react'
import ActionDiv from './components/actionDiv'
import CurrenGame from './components/currenGame'

export default function Home() {
  return (
    <main className='flex flex-col py-4'>
        <ActionDiv />
        <CurrenGame />
    </main>
  )
}
