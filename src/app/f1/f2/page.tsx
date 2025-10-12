import Link from "next/link";
export default function f2(){
    return (
        <>
            <h1> F2 Page </h1>
            <div><Link href={"/f4"}> f4 </Link></div>
        </>
    );
}