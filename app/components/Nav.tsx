'use client'

import {Session} from 'next-auth'
import Image from 'next/image'
import {signIn} from 'next-auth/react'

export default function Nav({user}: Session){
    return(
        <nav className='flex justify-between items-center py-8'>
        <h1>Styled</h1>
        <ul>
            {!user && (
                <div>
                <li className='bg-teal-600 text-white py-2 px-4 rounded-md'>
                    <button onClick={() => signIn()}>
                        Sign In
                    </button>
                </li>
                </div>
            )}
            {user && (
                <div>
                <li>
                    <Image src={user?.image as string} alt={user.name as string} width={48} height={58} className='rounded'/>
                </li>
                <li>Dashboard</li>
                </div>
            )}
        </ul>
        </nav>
    )
}