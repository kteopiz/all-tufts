import React from 'react'
import Image from 'next/image'

const Dylan = ({image, doodoo, title}) => {
  return (
    <div className='w-[300px] h-[500px] max-w-[300px] max-h-[500px] flex flex-col rounded-full p-12 bg-pink-900 justify-center items-center'>
        <p className='text-white'>{title}</p>
    <div className='h-[300px] w-[250px]'>
        <Image
        src={image}
        height={500}
        width={500}
        />
    </div>
    <p className='text-white'>{doodoo}</p>
    
</div>
  )
}

export default Dylan