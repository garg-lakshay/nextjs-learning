"use client";
import Link from "next/link";
import {use} from "react";
export default  function NewsArticle({params , searchParams}:{
    params: Promise<{articleid: string}>;
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>;
}){
    const {articleid} = use(params);
    const {lang = "en"} = use(searchParams); 

    return <div>
        <h1> News Article {articleid} </h1>
        <p> Reading in {lang}</p>
        <div>
            <Link href={`/articles/${articleid}?lang=en`}>English</Link>
            <Link href={`/articles/${articleid}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleid}?lang=fr`}>French</Link>
        </div>
    </div> 
    
}