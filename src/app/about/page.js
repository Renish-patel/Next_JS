import Link from "next/link";

const about=()=>{
    return(
    <div>
    <h1>its an about page</h1>
    <Link href={"/"}>Click for the main page</Link>
    </div>
    )
}
export default about;