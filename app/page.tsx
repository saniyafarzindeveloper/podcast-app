import React from 'react'
import { Button } from "@/components/ui/button"

export default function HOME() {
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
         <h1 className='font-bold text-20 text-white-1'> Trending podcasts</h1>
         <Button className='text-white-1 bg-orange-1'>Button</Button>

      </section>
    </div>
  )
}
