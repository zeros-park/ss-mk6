import React from "react";
import { IReactFC } from "@/types/global";
import LogoContent from "@/content/frameRoot/logoContent";
import HeaderContent from "@/content/frameRoot/headerContent";

const Header: IReactFC = ({ children }) => (
    <>
        <LogoContent></LogoContent>
        <HeaderContent></HeaderContent>
    </>
)

export default Header;