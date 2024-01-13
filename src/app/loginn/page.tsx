import Image from 'next/image'
import Searching from '../components/searching'


export default function Home() {
    return (
        <main className='realtive flex flex-col w-full h-full min-h-screen justify-between  '>
            <img src="plane4.jpg" className='absolute z-[-1] object-cover w-full h-full ' />

            {/* navigation bar */}
            <nav className='flex items-center justify-between bg-[#ffffff]  px-[4rem] py-2 z-10'>
                <div>
                    <img className='h-[50px] w-[120px] ' src='./logo1.png' alt='logo'></img>
                </div>
                <div className='flex space-x-5'>
{/*background image */}
                    <img className='h-[20px] w-[20px]' src='city1.jpg' alt='user_logo'></img>
                </div>
            </nav>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='flex w-[1000px] h-[600px]  items-center justify-center  '>
                    <div className='h-full w-[45%]  bg-[#ffffff59] flex flex-col justify-center items-center'>
                        <div className='text-black text-4xl '>Welcome Back</div>
                        <div className='text-black text-center p-5 text-1xl mt-9'>Already have an account? Login to view your personal profile </div>
                        <button className='bg-blue-500 text-white p-2 mt-9 rounded-md cursor-pointer'>
                            Sign In
                        </button>
                    </div>
                        

                    <div className='flex flex-col justify-center items-center h-full w-[65%] bg-white'>
                        <div className='text-3xl text-black opacity-100'> Create Account </div>

                        <div className='text-lg font-light w-[70%] text-black opacity-100 text-center'> Sign up today to earn rewards and special member promotions! </div>
                        <div className='border-black b-2 w-fit '>
                            <input className='w-[400px] border-black border-b-2 m-[1px] p-2 text-xl '
                            placeholder='Name' />
                        </div>
                        <div className='border-black b-2 w-fit '>
                            <input className='w-[400px] border-black border-b-2 m-[1px] p-2 text-xl '
                            placeholder='Email' />
                        </div>
                        <div className='border-black b-2 w-fit '>
                            <input className='w-[400px] border-black border-b-2 m-[1px] p-2 text-xl '
                            placeholder='Password' />
                        </div>
                         {/* Sign Up Button */}
                         <button className='bg-blue-500 text-white p-2 mt-4 rounded-md cursor-pointer'>
                            Sign Up
                        </button>
                    </div>
                </div>

            </div>





        




        </main>
    )
}
