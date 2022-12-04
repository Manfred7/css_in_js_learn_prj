import React from 'react';
import {GlobalResets} from "./globalResets";
import {GlobalFonts} from "./fonts";
import {GlobalColors} from "./сolors";
import {GlobalGradients} from "./gradients";
import {GlobalShadows} from "./shadows";
import {GlobalRadiuses} from "./radiuses";

const Globals = () => {
    return (
        <>
            <GlobalResets/>
            <GlobalFonts/>
            <GlobalColors/>
            <GlobalGradients/>
            <GlobalShadows/>
            <GlobalRadiuses/>
        </>
    );
};

export default Globals;
