import React from 'react';
import { useRouter } from "next/router";
import Image from "next/image";

const Page = ({ data3 }) => {
  const router = useRouter();
  return (
    <div>
      <h1 onClick={()=> router.back()}>Go back</h1>
      <h1>Page: {router.query.id}</h1>
      <h3>{data3.id}</h3>
      <p>{data3.name}</p>
    </div>
  )
}

export async function getStaticPaths() {
  let response = await fetch("https://api.github.com/search/repositories?q=user:sukanta255+fork:true&sort=updated&per_page=10&type=Repositories");
  let data = await response.json();
  return {
    paths: data.items.map((data3) => ({
      params: { id: data3.id.toString()
      }
    })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  console.log(context)
  const { params: {id} } = context;
  let response = await fetch(`https://api.github.com/search/repositories?q=user:sukanta255+fork:true&sort=updated&per_page=10&type=Repositories/${id}`);
  let data = await response.json();
  // console.log(data.items.id)
  // return {
  //     paths: data.items.map((data3) => ({
  //       params: { id: data3.id.toString()
  //       }
  //     })),
  //     fallback: false,
  // }
}
export default Page;