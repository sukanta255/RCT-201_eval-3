import React from 'react';
import Head from 'next/head';
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Page = ({ data = []}) => {
  const router = useRouter();
  var repo= data
  console.log(repo)
  const handleClick = () =>{
    router.push(`/${id}`);
  }
  var star2= [data.starred_url].length;
  var language = [data.languages_url].length;
  var forks2=0
  for(var i=0;i<repo.length;i++)
  {
      forks2+= repo[i].forks
    }
    // console.log(forks2)
    console.log(star2)
  return (
    <>
        <Head>
            <title>Home Page</title>
            <meta title="description" content='blogs, react, js, typescript'></meta>
            <link rel="icon" href="favicon.ico" />
        </Head>
        <main>
            <h1>Home Page: {data.length}</h1>
            <div style={{border: "1px solid green"}}>
                {repo.map((dat) => (
                    <div key={dat.id} style={{border: "1px solid yellow"}}>
                        <h1 onClick={() => handleClick(dat.id)}>
                            <Link href={`/${dat.id}`}>{dat.name}</Link>
                            {dat.login}
                        </h1>
                        <p>Star count:{star2}</p>
                        <p>Fork Count: {forks2}</p>
                        <p>language: {language}</p>
                    </div>
                ))}
            </div>
        </main>
    </>
  )
}

export async function getServerSideProps() {
    let response = await fetch("https://api.github.com/search/repositories?q=user:sukanta255+fork:true&sort=updated&per_page=10&type=Repositories");
    let data = await response.json();
    return {
        props: {
            data:data,
        }
    }
}

export default Page;