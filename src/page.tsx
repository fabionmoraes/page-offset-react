import { FC } from "react";
import { lastPage } from "./offset";
import { getPaginate } from "./paginate";
import { queryURI } from "./queryURI";
import { IPage } from "./type";

export interface IPageNextOrPrev {
  params: string;
  page: string;
}

interface IPageGet extends IPage {
  handleNextOrPrev?: any;
  minNumber?: number;
}

export const Page: FC<IPageGet> = ({
  paginate,
  page,
  custom_class,
  prev,
  next,
  handlePage,
  handleNextOrPrev,
  minNumber = 5,
}) => {
  const totalPages = lastPage(paginate);
  const numberPage = Number(page);

  const resultNav = getPaginate(
    paginate.total,
    numberPage,
    paginate.limit,
    minNumber
  );

  const handleNextOrPrevT = (type: "next" | "prev") => {
    if (type === "next") {
      const next = Number(page) + 1;
      const params = queryURI({
        name: "page",
        value: String(next),
      });

      const result = {
        params,
        page,
      } as IPageNextOrPrev;

      handleNextOrPrev(result);

      return;
    }

    const prev = Number(page) - 1;
    const params = queryURI({
      name: "page",
      value: String(prev),
    });

    const result = {
      params,
      page,
    } as IPageNextOrPrev;

    handleNextOrPrev(result);

    return;
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ display: "flex" }}
        className={custom_class?.page || "page-offset"}
      >
        {resultNav.pages[0] === 2 && (
          <>
            <button type="button" onClick={() => handlePage && handlePage("1")}>
              1
            </button>
          </>
        )}
        {resultNav.pages[0] === 3 && (
          <>
            <button type="button" onClick={() => handlePage && handlePage("1")}>
              1
            </button>
            <small style={{ marginRight: "6px" }}>...</small>
          </>
        )}
        {resultNav.pages[0] >= 4 && (
          <>
            <button type="button" onClick={() => handlePage && handlePage("1")}>
              1
            </button>
            <button type="button" onClick={() => handlePage && handlePage("2")}>
              2
            </button>
            <small style={{ marginRight: "6px" }}>...</small>
          </>
        )}
        {resultNav.pages.map((item) => (
          <button
            key={item}
            type="button"
            className={Number(page) === item ? "active" : "nd"}
            onClick={() => handlePage && handlePage(String(item))}
          >
            {item}
          </button>
        ))}
        {resultNav.pages[minNumber - 1] <= resultNav.totalPages - 2 && (
          <>
            <small style={{ marginRight: "6px" }}>...</small>
            <button
              type="button"
              onClick={() =>
                handlePage && handlePage(String(resultNav.totalPages))
              }
            >
              {resultNav.totalPages}
            </button>
          </>
        )}
      </div>
      <div
        style={{ display: "flex", marginLeft: "12px" }}
        className={custom_class?.nextOrPrev || "next-prev-offset"}
      >
        <button
          type="button"
          disabled={Number(page) === 1}
          onClick={() => handleNextOrPrevT("prev")}
        >
          {prev || "Prev"}
        </button>
        <button
          type="button"
          onClick={() => handleNextOrPrevT("next")}
          disabled={Number(page) >= totalPages}
        >
          {next || "Next"}
        </button>
      </div>
    </div>
  );
};
