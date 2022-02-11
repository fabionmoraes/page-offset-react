import { IPaginate } from "./type";

interface IOffset {
  page: string | number;
  limit: string | number;
}

export const offset = (data: IOffset) => {
  const { page, limit } = data;
  const subPage = Number(page) - 1;
  const offset = Number(subPage) * Number(limit);

  return offset;
};

export const lastPage = (paginate: IPaginate) => {
  return Number((paginate.total / paginate.limit).toFixed());
};
