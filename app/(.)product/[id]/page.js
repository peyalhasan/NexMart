
import Modal from '@/components/Modal'
import ProductDetails from '@/components/ProductDetails'



async function page({ params: { id } }) {
    return (
        <Modal>
            <ProductDetails id={id} />
        </Modal>
    )
}

export default page