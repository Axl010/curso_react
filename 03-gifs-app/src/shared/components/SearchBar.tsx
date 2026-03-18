import { useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onQuery(query);
    // setQuery(''); Limpiar buscador
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    handleSearch();
  }

  return (
    <div className="search-container">
        <h1>{query}</h1>
        <input
          type="text"
          placeholder={ placeholder }
          value={ query }
          onChange={(event) => setQuery(event.target.value)}

          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
