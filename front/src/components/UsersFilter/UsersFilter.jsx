import React from "react";
// import * as S from "./UsersFilter.style"
import FilterBox from "../../components/Questions/Main/Features/FIlterBox/FIlterBox"
import SearchInput from "../@common/Layout/Nav/SearchInput/SearchInput";

const UsersFilter = () => {
    return (
        <>
            <SearchInput />
            <FilterBox />
        </>
    )
}

export default UsersFilter