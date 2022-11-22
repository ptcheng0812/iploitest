/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react';

import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>();

  const handleInput = (e: any) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = () => {
    if (searchQuery) {
      router.push(`/jobs/${searchQuery}`)
    }

    return
  }

  const handleKeypress = (e: any) => {
    if (e.key === 'Enter') {
      console.log("pressed")
      handleSubmit();
    }
  };


  console.log("input>>>", searchQuery);


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.css" integrity="sha512-FA9cIbtlP61W0PRtX36P6CGRy0vZs0C2Uw26Q1cMmj3xwhftftymr0sj8/YeezDnRwL9wtWw8ZwtCiTDXlXGjQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.41.0/dist/full.css" rel="stylesheet" type="text/css" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next</a>
        </h1> */}
        <div className="flex justify-between">
          <img
            src="https://fifth-server-c38.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd5adb940-e7d6-4e90-887c-b0c94bd4adfd%2FParadigmo_Logo.png?table=block&id=f53d41c0-f1bb-45e4-8e37-d9ddd3e848aa&spaceId=8d5bccf4-cad0-4c0d-a2d1-0116f68c439b&width=320&userId=&cache=v2"
            alt="logo"
            width={50}
            height={50}
          />
          <div className="flex justify-center">
            <button className="btn p-3 px-5 rounded border-0" type="button" style={{ backgroundColor: "#65bc67", color: "white" }}>&nbsp; &nbsp;Login&nbsp; &nbsp;</button>
          </div>
        </div>

        <div className={styles.slogan}>
          <div className='w-13 mt-20'>
            <h1 className={styles.bigTitle}>Find&nbsp;a&nbsp;job&nbsp;you&nbsp;love
              <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/heart-hands_1faf6.png"
                width={50}
                height={50}
                className="mx-4"
              />
            </h1>
            <span className={styles.bigTitleSecond}>with  Paradigmo</span>
          </div>
        </div>

        <div className={styles.searchBox}>
          <div className='w-1/2 h-16 p-3 bg-white rounded-md shadow-xl flex items-center'>
            <div className="flex justify-between w-full">
              <input type="text" placeholder="Search jobs by keyword or location" className="input w-full"
                onChange={handleInput} onKeyPress={handleKeypress} />
              <div className='flex items-center mx-4' onClick={handleSubmit}><i className="fa-solid fa-magnifying-glass"></i></div>
            </div>
          </div>
        </div>

      </main>


    </div>
  )
}
