



export async function getProductById(id) {

    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch products')
    }
    return res.json();
}