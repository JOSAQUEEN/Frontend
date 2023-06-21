import Head from "next/head"
import Layout from "@/layout/layout"
import Link from "next/link"
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol,HiFingerPrint } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login(){
    return(
        <Layout>

    <Head>
        <title>Login</title>
    </Head>

        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Login</h1>
                <p className='w-3/4 mx-auto text-gray-600 '></p>
            </div>

            {/*form*/}
            <form className='flex flex-col gap-5'>
                <div className={styles.input_group}>
                    <input 
                    type="email" 
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    />
                    {/* <span className='icon flex items-center px-3'>
                        <HiAtSymbol size={25}/>
                    </span> */}
                </div>
                <div className={styles.input_group}>
                    <input 
                    type="password" 
                    name='password'
                    placeholder='password'
                    className={styles.input_text}
                    />
                    {/* <span className='icon flex items-center px-3'>
                        <HiFingerPrint size={25}/>
                    </span> */}
                </div>

                {/* login buttons */}
                <div className="input-button">
                <Link href={'/EditUser'}>
                    <button type='submit' className={styles.button}>
                        Login
                    </button>
                </Link>
                </div>
                <div className="input-button">
                    <button type='button' className={styles.button_custom}>
                        Sign ln with Google <Image src={'/assets/google.svg'} width="20" height={20}></Image>
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' className={styles.button_custom}>
                        Sign ln with Facebok <Image src={'/assets/facebook.svg'} width={25} height={25}></Image>
                    </button>
                </div>
            </form>

            {/*bottom*/}
            <p className='text-center text-gray-400'>
                don't have an account ? 
            <Link href={'/register'}>
            <legacyBehavior className='text-blue-700'>Sign Up</legacyBehavior>
            </Link>
            </p>
        </section>
        </Layout>
    )
}