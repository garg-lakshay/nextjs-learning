import Link from "next/link";
export default function f1(){
    return (
        <>
            <div> F1 Page </div>
            <div>
            <Link href={"/f1/f2"}> f2 </Link>
            <Link href={"/f3"}> f3 </Link>
            </div>
            
        </>
    );
    
}