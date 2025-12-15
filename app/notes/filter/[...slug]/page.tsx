import NotesClient from "@/app/notes/Notes.client";

type Props = {
  params: {
    tag?: string[];
  };
};

export default async function FilteredNotesPage({ params }: Props) {
  const { tag } = await params;

  return (
    <NotesClient tag={tag?.[0]} />
  );
}
