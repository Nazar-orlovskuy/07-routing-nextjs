"use client";

import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";
// import { useSearchParams } from "next/navigation";

export default function NotesClient() {
//   const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    console.log("New page:", page); // або роби тут реальну логіку пагінації
  };

  return (
    <>
      <NoteList notes={[]} />
      <Pagination pageCount={0} currentPage={0} onPageChange={handlePageChange} />
    </>
  );
}
