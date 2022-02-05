import { IPaginate } from "./type";
interface IOffset {
    page: string | number;
    limit: string | number;
}
export declare const offset: (data: IOffset) => number;
export declare const lastPage: (paginate: IPaginate) => number;
export {};
