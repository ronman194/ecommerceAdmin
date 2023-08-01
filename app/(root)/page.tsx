"use client";
import { Modal } from "@/components/ui/modal";
import { ususeStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = ususeStoreModal((state) => state.onOpen);
  const isOpen = ususeStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      Root Page
    </div>
  )
}

export default SetupPage;
