export interface IPage {
  paginate: IPaginate;
  page: string | number;
  prev?: string;
  next?: string;
  custom_class?: {
    nextOrPrev?: string;
    page?: string;
  };
  handlePage?(event: string): void;
}

export interface IPaginate {
  offset: number;
  limit: number;
  total: number;
  count: number;
}
