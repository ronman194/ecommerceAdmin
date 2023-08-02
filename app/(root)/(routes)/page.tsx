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

  return null;
}

export default SetupPage;
