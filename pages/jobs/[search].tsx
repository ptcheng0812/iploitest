/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactHtmlParser from 'react-html-parser';
import { Animate } from "react-simple-animate";
import styled from 'styled-components';

import algoliasearch from 'algoliasearch';
// import {  } from 'react-instantsearch-dom';
import { InstantSearch, Hits, Pagination, SearchBox, Configure, connectStateResults } from 'react-instantsearch-dom';

import styles from '../../styles/Home.module.css'

export default function Jobs() {
  const searchClient = algoliasearch(
    'RY8KA2GJPX',
    '13e751a21f2ae69d7ccb7b590a0a9b3a'
  );

  const router = useRouter()
  const { search } = router.query

  console.log(search);

  //Error Message Home style
  const ErrorMessageHome = styled.h2`
  /* Adapt the colors based on primary prop */
  font-weight: bold;
  text-decoration: underline;
  &:hover {
    color: #65bc67;
  }
  }
`;

  //Error Message Query style
  const ErrorMessageQuery = styled.h2`
  /* Adapt the colors based on primary prop */
  font-weight: bold;
  text-decoration: underline;
  &:hover {
    color: #0070f3;
  }
  }
`;

  const Results = connectStateResults(
    ({ searchState, searchResults }) =>
      searchResults && searchResults.nbHits !== 0 ? (
        <div className="hidden">ok</div>
      ) : (
        <div className='flex justify-center'>No results have been found for&nbsp;<ErrorMessageQuery>{search}</ErrorMessageQuery>. Please back to&nbsp;<Link href="/" ><ErrorMessageHome>Home</ErrorMessageHome></Link>.</div>
      )
  );

  function Hit(props: any) {
    console.log("props>>>>>", props)
    return (
      <div className={styles.description}>
        <div className="flex flex-col gap-3 w-1/2">
          <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium flex">
              &nbsp; {props.hit.title}
            </div>
            <div className="collapse-content">
              <div className="p-3 flex flex-col">
                <div className="flex justify-between">
                  <div>
                    {ReactHtmlParser(props.hit.description)}
                  </div>
                  <div className="w-1/5 flex justify-center">
                    {/* <img
                      src={props.hit.company_logo}
                      alt="company_logo"
                      // width={100}
                      // height={200}
                      className="rounded"
                    /> */}
                  </div>
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex items-center">
                    <p style={{ color: "#8C8C8C" }}>Location: {props.hit.country}</p>
                    <p className="ml-3" style={{ color: "#8C8C8C" }}>Employment Type: {props.hit.employment_type}</p>
                  </div>
                  <div>
                    <button className="btn p-3 rounded" type="button" style={{ backgroundColor: "#101840", color: "white" }}>Apply now <span className="material-symbols-outlined">arrow_forward_ios
                    </span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

  return (
    <div className={styles.jobContainer}>
      <Head>
        <title>Jobs</title>
        <meta name="description" content="Jobs lists" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.41.0/dist/full.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link href="https://fonts.cdnfonts.com/css/neometric-2" rel="stylesheet"></link>
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
            <button className="btn p-3 rounded login-btn" type="button" style={{ backgroundColor: "#65bc67", color: "white" }}>Login</button>
          </div>
        </div>

        <Animate
          play
          start={{
            opacity: "40%"
          }}
          end={{ opacity: "100%" }}
          duration={1}
          delay={0.1}
        >
          <div className={styles.search}>
            <InstantSearch
              indexName="development_jobs_index"
              searchClient={searchClient}
              onSearchStateChange={searchState => {
                console.log('The search state has changed, here it is now');
                console.log(searchState);
              }}
            >
              <Configure hitsPerPage={4} />
              <SearchBox
                defaultRefinement={search?.toString()}
              />
              <Results />
              <Hits hitComponent={Hit} />
              <Pagination />
            </InstantSearch>
          </div>
        </Animate>


      </main>


    </div>

  )
}
