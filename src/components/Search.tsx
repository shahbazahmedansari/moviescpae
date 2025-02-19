import { Dispatch, SetStateAction } from "react";

const Search = ({
    searchTerm,
    setSearchTerm,
}: {
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}) => {
    return (
        <div className="search">
            <div>
                <img src="../../public/search.svg" alt="Search-icon" />
                <input
                    type="text"
                    placeholder="Search through thousands of movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
   
        </div>
    );
};

export default Search;
