import React from 'react';
import Head from 'next/head';
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Page = ({ data = []}) => {
  const router = useRouter();
  console.log(data.items)
  var repo= data.items
  return (
    <>
        <Head>
            <title>Home Page</title>
            <meta title="description" content='blogs, react, js, typescript'></meta>
            <link rel="icon" href="favicon.ico" />
        </Head>
        <main>
            <h1>Home Page</h1>
            <div>
                {repo.map((dat) => (
                    <div key={dat.id}>
                        <Image 
                            src={dat.avatar_url}
                            alt={dat.name}
                            width="200"
                            height="200"
                        />
                        {dat.login}
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