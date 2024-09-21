import { UserProps } from '@/inteface/UserProps';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getUser() {
  const res = await fetch("http://127.0.0.1:8000/api/", { cache: "no-cache" });
  const data = await res.json();
  return data;
}


const UsersList:React.FC = async () => {
    const users = await getUser() as UserProps[]
  return (
    <div className='w-full mt-6 mager p-10 bg-slate-600 rounded-md pt-5'>
        <table className='w-full overflow-hidden'>
            <thead className='py-4 mb-4'>
                <tr className='text-left'>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Created at
                    </th>
                    <th>
                        Role
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <br />
            <tbody className='py-5'>
                {
                    users.map((user) => (

                        <tr key={user.id} className=''>
                            <td>
                                <div className='flex items-center gap-2'>
                                    <div className='rounded-full overflow-hidden'>
                                        <Image src={'/profile.jpg'} alt='profile' width={40} height={40}/>
                                    </div>
                                    <p>{user.first_name ? user.first_name : 'this user has not name'}</p>
                                </div>
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.created_at}
                            </td>
                            <td>
                                client
                            </td>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <Link href={'/'} className='py-0.5 px-2 bg-green-700 text-white'>View</Link>
                                    <Link href={'/'} className='py-0.5 px-2 bg-red-700 text-white'>View</Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UsersList