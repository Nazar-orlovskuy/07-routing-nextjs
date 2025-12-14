"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: {
    id: string;
  };
};

export default function NoteModalPage({ params }: Props) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreview noteId={params.id} />
    </Modal>
  );
}
