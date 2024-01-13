"use client"
import React, { useState } from 'react'

const feedbackModal = () => {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className='flex flex-col items-center'>
    <div className='flex h-auto'>
        <button type='button'
        className='bg-white w-[6rem] p-2 rounded-lg text-black text-md font-arial border border-black hover:bg-black hover:text-white'
        onClick={() => setShowModal(true)}>feedback
        </button>  
    </div>
        {showModal ?(
            <div className='flex flex-col p-6 mt-2 rounded-lg border-black border-[0.5px] justify-start bg-white '>
                <div className='text-black text-sm font-sans'>Enter your feedback</div>
                <hr />
                <div>
                <textarea
                    className='mt-2 p-1 border-black border-[0.4px] rounded-lg focus:outline-none'
                    id="description"
                    name="description"
                    rows={5} // You can adjust the number of visible rows as needed
                    cols={20} // You can adjust the number of visible columns as needed
      />
                </div>
                <div>
                    <button className='bg-blue-300 hover hover:bg-blue-500 text-black text-sm ml-[34%] mt-2 rounded-lg w-[40%] h-[30px]'
                        onClick={() => setShowModal(false)}>
                        submit
                    </button>
                </div>
            </div>
        ) : null}
    </div>
  )
}

export default feedbackModal