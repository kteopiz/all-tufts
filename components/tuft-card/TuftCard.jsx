import React from 'react'
import Image from 'next/image'

const TuftCard = ({ imageUrl, tuftName }) => {
  return (
   <>
        <div className='w-[300px] h-[500px] max-w-[300px] max-h-[500px] flex flex-col rounded-lg p-12 bg-black justify-center items-center text-blue'>
            <div className='h-[300px] w-[250px]'>
                <Image
                src={`${imageUrl}`}
                height={500}
                width={500}
                />
            </div>
            <p className='text-white'>{tuftName}</p>
        </div>
   </>
  )
}

export default TuftCard