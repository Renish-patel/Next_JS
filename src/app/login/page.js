import Link from "next/link";

const login = () => {
    return (
        <div>
            <h1>its an login Page</h1>
            <Link href={"/about"}>Click to go to the about page</Link>
        </div>
    )
}

export default login;