import { FC } from "react";
import { IPage } from "./type";
export interface IPageNextOrPrev {
    params: string;
    page: string;
}
interface IPageGet extends IPage {
    handleNextOrPrev?: any;
}
export declare const Page: FC<IPageGet>;
export {};
