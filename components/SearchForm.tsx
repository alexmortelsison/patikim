import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = () => {
  const query = "TEST";

  return (
    <Form
      action={"/"}
      className="w-full flex items-center justify-center lg:justify-start mt-12 mb-24"
    >
      <div className="relative max-w-md drop-shadow-lg">
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search recipes..."
          className="border px-4 py-2 rounded-lg"
        />
        <div className="flex gap-2 absolute inset-y-0 right-3 items-center">
          {query && <SearchFormReset />}
          <button type="submit">
            <Search />
          </button>
        </div>
      </div>
    </Form>
  );
};

export default SearchForm;
