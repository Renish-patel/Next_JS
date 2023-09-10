'use client'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AboutStudent=()=>{
    const router = useRouter();
    const navigate =(name)=>{
        router.push(name)
    }
    return(
        <div>
            <h1> About Student pages</h1>
        <Link href={"/"}>click fo the home page </Link>
        <button type="button" class="btn btn-success" onClick={()=>navigate("/")}>click for the home page </button>
        </div>
    )
}

export default AboutStudent;                               