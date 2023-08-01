"use client";

import { ususeStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
    const storeModal = ususeStoreModal();

    return (
        <Modal title="Crete Store" description="Add a new store to manage" isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
            Create Store Form
        </Modal>
    );
}