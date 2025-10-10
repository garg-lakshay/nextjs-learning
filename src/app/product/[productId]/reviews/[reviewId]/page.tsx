import {notFound , redirect } from "next/navigation";

// function getRandomInt(count: number){
//     return Math.floor(Math.random() * count);   

// } 

export  default async function ProductReview({
    params,
}:{
    params: Promise<{ productId: string; reviewId: string}>;
}){
    // const random  = getRandomInt(2);
    // console.log("Random number is", random);
    // if(random ==1){
    //     throw new Error("Error loading review");
    // }
    const {productId, reviewId} = await params
    if(parseInt(reviewId) > 100){
        //notFound();
        redirect("/product")
    } 
    return( 
    <h1>Review{reviewId} for product {productId}</h1>
    );

}
