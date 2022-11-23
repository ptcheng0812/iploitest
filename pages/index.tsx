/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import LoadingSpinner from '../components/LoadingSpinner';

import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>();
  const [emailInput, setEmailInput] = useState<string>();
  const [passwordInput, setPasswordInput] = useState<string>();
  const [responseData, setResponseData] = useState<any>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);

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
  }

  const handleFormSubmit = (value: object) => {
    setIsLoading(true);

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value)
    })
      .then(res => res.json())
      .then(res => {
        setResponseData(res)
        setIsLoading(false)
      })
      .then(console.log)


  }

  const state = {
    username: emailInput,
    password: passwordInput
  }

  console.log("resData>>", responseData);
  console.log("input>>>", searchQuery);
  console.log("state>>>", state);

  //Login Button Style
  const LoginButton = styled.button`
  /* Adapt the colors based on primary prop */
  background-color: #65bc67;
  color: white;
  padding: 3px 15px;
  padding-lef
  border: 0px solid palevioletred;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 0 50px 15px #DCFFED;
  }
`;



  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Inploi Test by Peter Cheng</title>
          <meta name="description" content="Inploi Test by Peter Cheng" />
          <link rel="icon" href="/favicon.ico" />
          <script src="https://cdn.tailwindcss.com"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.css" integrity="sha512-FA9cIbtlP61W0PRtX36P6CGRy0vZs0C2Uw26Q1cMmj3xwhftftymr0sj8/YeezDnRwL9wtWw8ZwtCiTDXlXGjQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <link href="https://cdn.jsdelivr.net/npm/daisyui@2.41.0/dist/full.css" rel="stylesheet" type="text/css" />
        </Head>

        <main className={styles.main}>
          <div className="flex justify-between">
            <Link href="/">
              <img
                src="https://fifth-server-c38.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd5adb940-e7d6-4e90-887c-b0c94bd4adfd%2FParadigmo_Logo.png?table=block&id=f53d41c0-f1bb-45e4-8e37-d9ddd3e848aa&spaceId=8d5bccf4-cad0-4c0d-a2d1-0116f68c439b&width=320&userId=&cache=v2"
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
            <div className="flex justify-center">
              {/* <LoginButton className="btn p-3 px-5 rounded border-0" style={{ backgroundColor: "#65bc67", color: "white" }} ></LoginButton> */}
              <label htmlFor="my-modal" className="btn p-3 px-5 rounded border-0" style={{ backgroundColor: "#65bc67", color: "white" }}>&nbsp; &nbsp;Login&nbsp; &nbsp;</label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg mb-5">Login</h3>
                  <form className='flex flex-col'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" className="mt-2 p-3 border-1 bg-gray-100 rounded-md" onChange={(e) => { setEmailInput(e.target.value) }} />
                    <label htmlFor="password" className="mt-4">Password:</label>
                    <input type="password" id="password" name="password" className="mt-2 p-3 border-1 bg-gray-100 rounded-md" onChange={(e) => { setPasswordInput(e.target.value) }} />
                    {isLoading && (<LoadingSpinner />)}
                    {responseData && (<div className="flex justify-center my-5 items-center">Hello {responseData.firstName} &nbsp;<img src={responseData.image} alt="Avatar" className="avatar flex justify-center shadow-md"></img>&nbsp; ! You are successfully logged in!</div>)}
                    <button type="button" className="border-0 p-3 px-4 btn mt-5 bg-green-500" onClick={() => { handleFormSubmit(state) }}>Submit</button>
                  </form>
                  <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">Close</label>
                  </div>
                </div>
              </div>
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
                <input type="text" placeholder="Search jobs by keyword or location" className="input input-ghost w-full"
                  onChange={handleInput} onKeyPress={handleKeypress} />
                <div className='flex items-center mx-4' onClick={handleSubmit}><i className="fa-solid fa-magnifying-glass"></i></div>
              </div>
            </div>
          </div>


        </main>
      </div>

    </>
  )
}
