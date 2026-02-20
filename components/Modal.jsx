'use client'

import { createPortal } from "react-dom"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

function Modal({ children }) {
    const modalRef = useRef(null)
    const router = useRouter()

    useEffect(() => {
        if (!modalRef.current?.open) {
            modalRef.current.showModal()
        }
    }, [])

    function onHide() {
        router.back()
    }

    return createPortal(
        <dialog
            ref={modalRef}
            className="w-full max-w-4xl max-h-[80vh] overflow-y-auto 
                       bg-white rounded-2xl shadow-2xl p-6"
            onClose={onHide}
        >
            <span onClick={onHide} className="flex justify-end cursor-pointer mb-4">
                <X size={30} />
            </span>
            {children}
        </dialog>,
        document.getElementById('modal-root-content')
    )
}

export default Modal;