import NotePreview from "@/app/@modal/(.)notes/NotePreview";

type Props = {
  params: {
    id: string;
  };
};

export default async function NoteModalPage({ params }: Props) {

  const { id } = await params

  return (
        <NotePreview noteId={id} />
   );
}
