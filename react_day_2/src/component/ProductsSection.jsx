import { useState } from "react";
import { allData } from "../data";
import Product from "./Product";

export default function ProductsSection()
{
    return <>
        <section className="flex flex-wrap justify-center">
            {allData.map( (e) => {
                return <Product product={e} key={e.id}/>
            } )}
        </section>
    </>
}
