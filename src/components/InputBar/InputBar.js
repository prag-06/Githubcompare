import { Input } from "antd";
import React from "react";

const { Search } = Input;
const InputBar = ({ handleSearch }) => {
  return (
    <div>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={(v) => handleSearch(v)}
      />
    </div>
  );
};

export default InputBar;
