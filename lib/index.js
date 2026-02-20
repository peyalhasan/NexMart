import data from '@/public/products.json'

export async function getAllProducts() {
    return data;
}

export async function getProductById(id) {
    const product = data.find(p => p.id === Number(id));
    if (!product) throw new Error('Product not found');
    return product;
}