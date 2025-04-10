
import { useState } from 'react'
import './App.css'
import { Button } from './components/button'
import { Card } from './components/card'
import { CreateContentModel } from './components/createContent'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { SideBar } from './components/sidebar'


function App() {
  const [modelOpen, setModelOpen] = useState(false)

  return (
    <div  >
      <SideBar />
      <div className='p-4 ml-72 h-screen bg-[#eeeeef]'>
        <CreateContentModel open={modelOpen} onClose={() => {
          setModelOpen(false)
        }} />
        <div className='flex justify-end gap-4'>
          <Button onClick={() => { }} startIcon={<ShareIcon size='md' />}
            size='sm' variant='secondary' text='Share Brain' />
          <Button onClick={() => setModelOpen(true)} startIcon={<PlusIcon size='lg' />}
            size='sm' variant='primary' text='Add Content' />
        </div>
        <div className='flex gap-6'>
          <Card type='twitter' link='https://x.com/krishna_ba63631/status/1882126807144800363'
            title='Twitter link' />
          <Card type='youtube' link='https://www.youtube.com/watch?v=JfGD75vHWrU'
            title='First Youtbe' />
        </div>
      </div>
    </div>
  )
}

export default App
