import Link from 'next/link'
import React from 'react'

export default async function Productspage() {
    const products = await getProducts()

    return (
        <div className='mx -auto max-w-2xl flex-1 px-8 py-16>
            <h1>className='mb-8 text-2xl font-semibold text-black
            dark:text-zinc-50>상품 목록 (server component +비동기 데이터 패칭)</div></h1>
            <ul className='flex flex-col gap-4'>>
            {
                products.map((p) => (
                    <li key={p.id}>{p.name}</li>
                ))
            }
                <Link href={`/products/${p.id}`}>View Details</Link>
             </ul>
            </div>

    )
}