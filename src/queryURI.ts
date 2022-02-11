interface IQueryURI {
  name: string;
  value: string;
}

function urlParams() {
  const url = new URL(<any>window.location);
  const urlSearch = new URLSearchParams(url.search);
  return { urlSearch, url };
}

export function queryURI(params: IQueryURI) {
  const url = urlParams();
  const objectAssing: any = {};

  const search = url.url?.search || "";

  if (search) {
    const arrSearch = search.replace("?", "").split("&");
    const verifyIfNotExistsSearch = !!arrSearch.find((item) =>
      item.includes(params.name)
    );

    if (!verifyIfNotExistsSearch) {
      Object.assign(objectAssing, { [params.name]: params.value });
    }

    arrSearch.forEach((item) => {
      const structure = item.split("=");
      const name = structure[0];
      const value = params.name === name ? params.value : structure[1];

      Object.assign(objectAssing, { [name]: value });
    });
  } else {
    Object.assign(objectAssing, { [params.name]: params.value });
  }

  const res = Object.keys(objectAssing).map((key) => {
    return `${key}=${objectAssing[key]}`;
  });

  return `?${res.join("&")}`;
}
