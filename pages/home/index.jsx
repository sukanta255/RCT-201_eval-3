import React from 'react';
import Head from 'next/head';
import Image from "next/image";

const Page = ({ data }) => {
    var data2 = [data]
    console.log(data2)
  return (
    <>
        <Head>
            <title>Home Page</title>
            <meta title="description" content='blogs, react, js, typescript'></meta>
            <link rel="icon" href="favicon.ico" />
        </Head>
        <main>
            <div style={{border: "1px solid yellow"}}>
                {data2.map((dat) => (
                    <div key={dat.id} style={{border: "1px solid green"}}>
                        <Image
                            src={dat.avatar_url}
                            alt={dat.name}
                            width="200"
                            height="200"
                        />
                        {dat.login}
                        <h3 >Resume</h3>
                        <h3>Tech Stack</h3>
                        <h3>Experience and / or Education</h3>
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