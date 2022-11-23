import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import request from '../utils/request'
// import Image from 'next/image'


export default function Home({results}) {
  
  return (
    <div >
      <Head>
        <title>HULU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      <Nav/>
      <Results results={results}/>
      
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre=context.query.genre
  // Fetch data from external API
  const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=f81980ff410e46f422d64ddf3a56dddd`).then(
    (res)=>res.json());
  
  
 


  // Pass data to the page via props
  return { props: { 
    results:response.results 
  } 
}
}
