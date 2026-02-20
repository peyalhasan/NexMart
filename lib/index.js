export async function getProductById(id) {
    if (!id) throw new Error('Product ID is required');

    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        next: { revalidate: 60 } 
    });
    console.log('status', res.status)

    if (!res.ok) {
        if (res.status === 404) throw new Error('Product not found');
        throw new Error(`Failed to fetch product: ${res.status}`);
    }

    return res.json();
}