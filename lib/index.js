

export async function getAllProducts() {
    try {
        const res = await fetch(`https://fakestoreapi.com/products`, {
            cache: 'no-store'
        });
        if (!res.ok) throw new Error('Failed to fetch products')
             console.log('fetched:', data.length)
        return res.json();
    } catch (error) {
         console.log('Error:', error.message)
        return []  
    }
}

export async function getProductById(id) {

    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch products')
    }
    return res.json();
}