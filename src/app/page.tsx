import { Button } from '@/components/ui/button'
import Image from 'next/image'
import TypewriterText from '../components/TypewriterText'
import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import { LogIn } from 'lucide-react'


export default function Home() {

  const { userId } = auth()
  const isAuth = !!userId

  // return(
  //   <div className='w-screen min-h-screen bg-gradient-to-r from-sky-400 to-blue-500'>
  //     <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
  //       <div className='flex flex-col items-center text-center'>

  //         <div className='flex items-center'> 
  //           <h1 className='mr-3 text-5xl font-semibold text-white'>
  //           Callforce is
  //           <div className="absolute left-full top-0">
  //             <TypewriterText />
  //           </div>
  //           </h1>
  //         </div>

  //         <div>
  //             {isAuth && <Button className='flex mt-2'>Go to Calls</Button>}
  //         </div>

  //         <p>
  //           Be part of an exclusive development beta and receive lifetime access to Callforce for free
  //         </p>

  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center'>
        <div className='flex flex-col items-center text-center'>
            <div className='grid grid-cols-2 gap-2 items-center justify-center'>
                <h1 className='text-5xl font-semibold text-white'>
                    Callforce is
                </h1>
                <TypewriterText />
            </div>
            <UserButton afterSignOutUrl='/' />

            <div>
                {isAuth && <Button className='flex mt-2'>Go to Calls</Button>}
            </div>

            <p className='max-w-xl mt-2 text-lg text-slate-600'>
                Be part of an exclusive development beta and receive lifetime access to Callforce for free
            </p>

            <div className='w-full mt-4'>
              {isAuth ? (<h1>fileuplaod</h1>):(
                <Link href='/sign-in'>
                  <Button className='flex mt-2'>
                    SignUp to get Started
                    <LogIn size={24} className='ml-2' />
                  </Button>
                </Link>
              )}

            </div>
        </div>
    </div>
  );
}