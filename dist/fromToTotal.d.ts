import { FC } from "react";
import { IPaginate } from "./type";
interface IFromToTotal {
    paginate?: IPaginate;
    page: any;
    from?: string;
    to?: string;
}
interface IData {
    data: IFromToTotal;
}
export declare const FromToTotal: FC<IData>;
export {};
