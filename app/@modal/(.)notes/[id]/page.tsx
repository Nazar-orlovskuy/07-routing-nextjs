import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: {
    id: string;
  };
};

export default function NoteModalPage({ params }: Props) {
  const { id } = params;

  return <NotePreview noteId={id} />;
}
