'use client'
import Image from 'next/image'
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import { useState } from 'react';

export default function Home() {

  const router  = useRouter();
  const navigate=(name)=>{
    router.push(name);
  }
  // const [name, SetName] = useState("anil");
  // const apple = (items) => {
  //   SetName("Renish");
  // }

  // const innerComp = () => {
  //   return (
  //     <h1>Inner innerComp </h1>
  //   )
  // }
  // console.log(innerComp);
  return (
    <main>
      <h1>its an home page</h1>
      <Link href={"/about"}>Click the link to go to the about page</Link>
      <br/>
      <Link href={"/login"}>Click the link to go to the login page</Link>
      <br></br>
      <button onClick={()=>navigate("/about")}>Click for the about page</button>

      {/* <h1>Event onClick {name}</h1>
        <button onClick={(items) => apple()}>onClick</button>
        <h1>innerComp</h1> */}
    </main>
  )
}
