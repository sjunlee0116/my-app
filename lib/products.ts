
export type Product = {
    id: string 
    name: string 
    description: string 
    likes: number 
}

const products: Product[] = [
    {id: "1", name: "머그컵", description: "내가 애용하는 머그컵",  likes: 3},
    {id: "2", name: "스티커", description: "내가 애용하는 스티커",  likes: 5},
    {id: "3", name: "테이블 램프", description: "내가 애용하는 테이블 램프",  likes: 2},
    {id: "4", name: "책받침", description: "내가 애용하는 책받침",  likes: 4},
    {id: "5", name: "자석", description: "내가 애용하는 자석",  likes: 6},

]

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

    export async function getProducts(): Promise<Product[]> {
        await delay(700);
        return Products
    }

export async function getProduct(id: string ): Promise<Product | undefined> {
    await delay(400)
    return Products.find(p => p.id === id)  

}



export async function likeProduct(id: string):
Promise<number> {
await delay (300)
const product = products.find((p) => p.id === id)
product.likes += 1
return product.likes 
}
  