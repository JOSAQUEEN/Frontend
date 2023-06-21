import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Layout from "@/layout/layout3"

export default function Home() {

  const[session, setSession]=useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User():Guest()}
    </div>
  )
}

// Guest
  function Guest(){
    return(
      <Layout>
      <main className="container mx-auto text-center py-60">
        <h3 className='text-4xl font-bold'>Guest Homepage</h3>
        <div class="my-10 "></div>
        <div className='flex justify-center'>
          <Link href={'/login'}>
            <legacyBehavior className='mt-5 px-20 py-2 rounded-sm bg-gray-500 text-gray-100'>Sign In</legacyBehavior>
            </Link>
        </div>
      </main>
      </Layout>
    )
  }

// Authorize User
  function User(){
    return(
      <main className="container mx-auto text-center py-20">
        <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>

          <div className='details'>
            <h5>Unknown</h5>
            <h5>Unknown</h5>
          </div>

          <div className='flex justify-center'>
            <button className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'>Sign Out</button>
          </div>

        <div className='flex justify-center'>
          <Link href={'/profile'}>
            <legacyBehavior className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-400'>Profile Page</legacyBehavior>
            </Link>
        </div>
      </main>
    )
  }