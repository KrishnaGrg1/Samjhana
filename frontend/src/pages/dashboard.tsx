import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../components/button'
import { Card } from '../components/card'
import { CreateContentModel } from '../components/createContent'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { SideBar } from '../components/sidebar'
import { UseContent } from '../hooks/useContent'


export function DashBoard() {
  const [modelOpen, setModelOpen] = useState(false)
  const {content,refresh} = UseContent();


  useEffect(()=>{
    refresh()
  },[modelOpen])
  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1 min-h-screen bg-[#f5f6fa] p-6 ml-72">
        {/* Modal for creating content */}
        <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />

        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">All Notes</h1>
          <div className="flex gap-4">
            <Button
              onClick={() => { }}
              startIcon={<ShareIcon size="md" />}
              size="sm"
              variant="secondary"
              text="Share Brain"
            />
            <Button
              onClick={() => setModelOpen(true)}
              startIcon={<PlusIcon size="lg" />}
              size="sm"
              variant="primary"
              text="Add Content"
            />
          </div>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {content?.map(({ type, link, title }, index) => (
            <Card
            
              type={type}
              link={link}
              title={title}
            />
          ))}

          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=JfGD75vHWrU"
            title="First YouTube Video"
          />
          {/* You can add more cards here */}
        </div>
      </div>
    </div>
  )
}
