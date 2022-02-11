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

export const FromToTotal: FC<IData> = ({ data }) => {
  const { page, paginate } = data;

  const skip = Number(page || 0) * Number(paginate?.limit || 0);
  const from = skip - Number(paginate?.limit || 0);

  return (
    <div className="page-off-from">
      {data?.from || "from"} {from} {data?.to || "to"} {paginate?.total}
    </div>
  );
};
