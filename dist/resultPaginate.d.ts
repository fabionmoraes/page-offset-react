import { IPaginate } from "./type";
interface IResultPaginate {
    paginate: IPaginate;
    minNumber?: number;
    page: number | string;
}
export declare function resultPaginate(data: IResultPaginate): {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: number[];
};
export {};
