import * as React from "react";
import { useOnClickOutside } from "usehooks-ts";

export interface ISearchMenuProps {
  color?: any;
  setShowSearchMenu?: any;
  token?: any;
}

export function SearchMenu({
  color,
  setShowSearchMenu,
  token,
}: ISearchMenuProps) {
  const [iconVisible, setIconVisible] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [results, setResults] = React.useState<any[]>([]);
  const [searchHistory, setSearchHistory] = React.useState([]);
  const menu = React.useRef(null);
  const input = React.useRef<any>(null);
  useOnClickOutside(menu, () => {
    setShowSearchMenu(false);
  });
  React.useEffect(() => {
    // getHistory();
  }, []);
  //   const getHistory = async () => {
  //     const res = await getSearchHistory(token);
  //     setSearchHistory(res);
  //   };
  //   React.useEffect(() => {
  //     input.current.focus();
  //   }, []);
  //     const searchHandler = async () => {
  //       if (searchTerm === "") {
  //         setResults([]);
  //       } else {
  //         const res = await search(searchTerm, token);
  //         setResults(res);
  //       }
  //     };
  //     const addToSearchHistoryHandler = async (searchUser) => {
  //       const res = await addToSearchHistory(searchUser, token);
  //       getHistory();
  //     };
  //     const handleRemove = async (searchUser) => {
  //       removeFromSearch(searchUser, token);
  //       getHistory();
  //     };
  return (
    <div>
      <input type="text" />
    </div>
  );
}
