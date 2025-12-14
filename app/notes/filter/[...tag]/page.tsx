import NotesClient from "../../Notes.client";

type Props = {
  params: {
    tag?: string[];
  };
};

export default function FilteredNotesPage({ params }: Props) {
  const tag = params.tag?.[0];

  return (
    <NotesClient tag={tag === "all" ? undefined : tag} />
  );
}
