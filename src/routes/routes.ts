import React from "react";
import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;


interface Route {
    path: string,
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    children?: Route[]
};

const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */"../01-lazyload/layout/LazyLayout"))

export const routes: Route[] = [
    {
        path: "lazyload/*",
        Component: LazyLayout,
        name: 'LazyLoading Nested',
        // children: [
        //     {
        //         path: "lazy1",
        //         Component: LazyPage1,
        //         name: 'LazyLoading Nested',
        //     },
        //     {
        //         path: "lazy2",
        //         Component: LazyPage2,
        //         name: 'LazyLoading Nested',
        //     },
        //     {
        //         path: "lazy3",
        //         Component: LazyPage3,
        //         name: 'LazyLoading Nested',
        //     },
        // ]   
    },
    {
        path: "no-lazy/",
        Component: NoLazy,
        name: 'No Lazy Loading'
    }    
];