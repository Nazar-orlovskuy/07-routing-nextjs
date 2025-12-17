import NotesClient from "./Notes.client";

type Props = {
  params: {
    slug?: string[];
  };
};

export default function FilteredNotesPage({ params }: Props) {
  const tag = params.slug?.[0] ?? "all";

  return <NotesClient key={tag} tag={tag} />;
}
