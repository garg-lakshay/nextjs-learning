export default async function ProductDtails({params}:{
    params:Promise<{ productId: string  }>;
}){
    const productId =(await params).productId;
    return <h1>Details About the product {productId}</h1>
}