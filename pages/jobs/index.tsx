/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Link from 'next/link'

import algoliasearch from 'algoliasearch';
// import {  } from 'react-instantsearch-dom';
import { InstantSearch, Hits, Pagination, SearchBox } from 'react-instantsearch-dom';

import styles from '../../styles/Home.module.css'

export default function Jobs() {
  const searchClient = algoliasearch(
    'RY8KA2GJPX',
    '13e751a21f2ae69d7ccb7b590a0a9b3a'
  );

  return (
    <div className={styles.jobContainer}>
      <Head>
        <title>Jobs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.41.0/dist/full.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next</a>
        </h1> */}
        <div className="flex justify-between">
          <div className="w-1/3">
            <Link href="/">
              <img
                src="https://fifth-server-c38.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd5adb940-e7d6-4e90-887c-b0c94bd4adfd%2FParadigmo_Logo.png?table=block&id=f53d41c0-f1bb-45e4-8e37-d9ddd3e848aa&spaceId=8d5bccf4-cad0-4c0d-a2d1-0116f68c439b&width=320&userId=&cache=v2"
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-2 p-4 items-center w-1/3">
            <h1 className={styles.title}>Job Openings</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
          </div>
          <div className="flex justify-center w-1/3 invisible">
            <button className="btn p-3 rounded" type="button" style={{ backgroundColor: "#65bc67", color: "white" }}>Login</button>
          </div>
        </div>

        <div className={styles.description}>
          <div className="flex flex-col gap-3 w-1/3">
            <div className="bg-white rounded-md flex justify-between p-4">
              <h2 className={styles.jobTitle}>Job Title</h2>
              <span>+</span>
            </div>
          </div>
        </div>

        <div className={styles.search}>
          <InstantSearch
            indexName="development_jobs_index"
            searchClient={searchClient}
            onSearchStateChange={searchState => {
              console.log('The search state has changed, here it is now');
              console.log(searchState);
            }}
          >
            <SearchBox
              defaultRefinement="Compass"
            />
            <Hits />
            <Pagination />
          </InstantSearch>
        </div>

      </main>


    </div>

  )
}