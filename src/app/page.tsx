import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col w-full h-full min-h-screen bg-white'>

      {/* navigation bar */}
      <nav className='flex items-center justify-between bg-white px-[4rem] py-2'>
        <div>
          <img className='h-[50px] w-[120px] ' src='./logo1.png' alt='logo'></img>
        </div>
        <div className='flex space-x-5'>
          <a href='' className='text-gray-600 text-lg font-mono hover:text-black'>Book</a>
          <a href='' className='text-gray-600 text-lg font-mono hover:text-black'>Manage</a>
          <a href='' className='text-gray-600 text-lg font-mono hover:text-black'>Help</a>
          <img className='h-[20px] w-[20px]' src='./user.png' alt='user_logo'></img>
        </div>
      </nav>

      {/* background image */}
      <div className='flex w-full h-[480px]'>
        <img className='w-full h-[480px]' src='./plane5.jpg' alt='background'></img>
      </div>

      <div className='justify-between'>
        {/* lady flex section */}
      <div className='relative flex ml-[4rem] items-center h-[240px] w-[90%] rounded-2xl overflow-hidden mt-[40px]'>
        <img className='w-full h-full'src='./lady.png' alt='lady_background'></img>
        <div className='absolute flex flex-col ml-[2rem] w-[60%] h-[78%] p-5 bg-gray-100 opacity-90'>
          <p className='text-2xl text-black font-arial font-semibold'>Never miss a deal!</p>
          <p className='text-md text-gray-600 font-arial font-normal'>Make the most of your travel experiences with our offers, get our latest updates and more by subscribing to our alerts.</p>
          
          <div className='py-3'>
            {/* dropdown button  */}
            <button type="button" className="inline-flex w-[65%] gap-x-1.5 rounded-md bg-white justify-between px-3 py-2 text-sm font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
              How would you like to hear from us?
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className='flex items-center mt-[50px] px-[3rem] justify-between bg-[#f9f8f5] outline outline-[0.2px] outline-gray-300'>
        <div className='flex flex-col text-gray-600 text-sm font-arial space-y-2 py-[1rem]'>
          <p className='text-black text-[16px] font-semibold'>About BayWays</p>
          <a href='#' className='hover:underline'>Corporate profile</a>
          <a href='#' className='hover:underline'>Latest news</a>
          <a href='#' className='hover:underline'>Our sponsorships</a>
          <a href='#' className='hover:underline'>Careers</a>
          <a href='#' className='hover:underline'>Innovation</a>
        </div>

        <div className='flex flex-col text-gray-600 text-sm font-arial space-y-2 py-[1rem]'>
          <p className='text-black text-[16px] font-semibold'>Useful links</p>
          <a href='#' className='hover:underline'>All extras and upgrades</a>
          <a href='#' className='hover:underline'>Baggage</a>
          <a href='#' className='hover:underline'>Payment options</a>
          <a href='#' className='hover:underline'>Cookie policy</a>
          <a href='#' className='hover:underline'>Tax refund</a>
        </div>

        <div className='flex flex-col items-center justify-center text-gray-600 text-sm font-arial space-y-2 py-[1rem]'>
        <p className='#'>Your feedback is really important, and we love hearing what you think.</p>
        <button type='button' className='bg-white w-[6rem] p-2 rounded-lg text-black text-md font-arial border border-black hover:bg-black hover:text-white'>Feedback</button>
        </div>

      </div>
      </div>

    </main>
  )
}
