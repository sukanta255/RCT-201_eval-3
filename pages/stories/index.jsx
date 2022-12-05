import React from 'react';
import Head from 'next/head';
import Image from "next/image";

const Page = ({ data }) => {
    var data2 = [data]
    console.log(data2)
  return (
    <>
        <Head>
            <title>Projects Page</title>
            <meta title="description" content='blogs, react, js, typescript'></meta>
            <link rel="icon" href="favicon.ico" />
        </Head>
        <main>
            <div style={{border: "1px solid yellow"}}>
                {data2.map((dat) => (
                    <div key={dat.id} style={{border: "1px solid green"}}>
                        <h1>GitProfile </h1>
                        <Image 
                            src={dat.avatar_url}
                            alt={dat.name}
                            width="200"
                            height="200"
                        />
                        <br />
                        <h1>ID:{dat.id}</h1>
                        <h1>Login Name: {dat.login}</h1>
                        
                        <br />
                        <h3 >Skills(like js, html,css,typescript,mongodb, etc) : {dat.type}</h3>
                        <h3>Education/Expereince : {dat.location}</h3>
                        <h3>Projects: {dat.public_repos}</h3>
                    </div>
                ))}
            </div>
        </main>
    </>
  )
}

export async function getStaticProps() {
    let response = await fetch("https://api.github.com/users/sukanta255");
    let data = await response.json();
    return {
        props: {
            data:data,
        }
    }
}

export default Page;