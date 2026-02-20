
import Modal from '@/components/Modal'
import ProductDetails from '@/components/ProductDetails'


export async function generateStaticParams() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    return products.map((product) => ({
        id: String(product.id),
    }));
}

async function page({ params: { id } }) {
    return (
        <Modal>
            <ProductDetails id={id} />
        </Modal>
    )
}

export default page