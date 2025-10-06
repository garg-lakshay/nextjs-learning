import Link from "next/link";
export default function Product(){
    const productId = 100;
    return (
        <>
        <h1>Product List</h1>
        <h2><Link href="/product/1">Product1</Link></h2>
        <h2><Link href="/product/2">Product2</Link></h2>
        <h2><Link href="/product/3 " replace>Product3</Link></h2>
        <h2><Link href={`/product/${productId}`}>Product{productId}</Link></h2>

        <Link href="/">Back to Home</Link>
        </>
    );
}




