import { WordsSection } from "~/ui/components/words-list/WordsSection";

export default function PageWords() {
  return (
    <div className="flex w-full flex-col">
      {/* {searchWord ? <SearchWordsList /> : <BookWordsList />} */}
      <WordsSection />
    </div>
  );
}

// export function Older() {
//   const { searchWord } = useDebounceSearchWord();
//   const isSearchBarOpen = useAtomValue(isSearchBarOpenAtom);

//   return (
//     <div className="flex w-full flex-col">
//       <div className="sticky top-0 left-0 z-10 p-4">
//         {isSearchBarOpen ? (
//           <div>
//             <SearchBar />
//           </div>
//         ) : (
//           <div className="flex items-center justify-between">
//             <OpenMenuButton />
//             <ListTabs />
//             <SearchButton />
//           </div>
//         )}
//       </div>
//       {searchWord ? <SearchWordsList /> : <BookWordsList />}
//     </div>
//   );
// }
