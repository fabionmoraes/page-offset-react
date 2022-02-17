# page-offset-react - React JS

## O que a lib faz?

- A Lib faz a paginação utilizando o retorno da API via offset.
- Dessa forma deixa mais fácil para o backend apenas retornar OFFSET - TOTAL - LIMIT

## Para utilizar precisa?

- API precisa ter o retorno

```TS
  // {
  //   "data": {
  //     "offset": 0,
  //     "limit": 20,
  //     "total": 1559,
  //     ...
  //   }
  // }
```

## Instalação

```bash
yarn add page-offset-react
# or
npm i page-offset-react --save
```

## Funcionalidades

### Page

```tsx
...
import { IPageNextOrPrev, Page } from 'page-offset-react'

const App: React.FC = () => {

  const handleNextOrPrev = (values: IPageNextOrPrev) => {
    // values: {
    //   page: string
    //   params: string
    // }
  }

  const handlePage = (event: string) => {
    ...
  }

  return(
    <Page
      paginate={paginate} //paginate data do API retorno resultado
      page={page} //Page que está ativo
      handlePage={handlePage} //Alterar a página
      handleNextOrPrev={handleNextOrPrev} //Passar página ou voltar
      custom_class={{ nextOrPrev: 'grid-next-previous', page: 'grid-page' }} //Alterar a class da div nextOrPrev ou div da page
    />
  )
}

```

### FromToTotal

```tsx
...
import { FromToTotal } from 'page-offset-react'

const App: React.FC = () => {
  return(
    <FromToTotal
      data={{
       paginate: fromToTotal?.paginate,
       page: fromToTotal?.page,
      }}
    />

    // retorno from 1 to 1555
  )
}
```

### offset

```tsx
...
import { offset } from 'page-offset-react'

const App: React.FC = () => {

  const handleApi = async ({ page, limit }: ...) => {
    const response = await api.get(`characters`, {
        params: {
          offset: offset({ page, limit }),
          limit: Number(limit),
        },
    })
  }

  // 1 2...4 5 6 7 8...130 Prev Next - retorno para html

  return(
    ...
  )
}
```

### resultPaginate

```tsx
...
import { resultPaginate } from 'page-offset-react';

const App: React.FC = () => {

  const paginate = resultPaginate({
    paginate: {
      limit: data.limit,
      offset: data.offset,
      total: data.total,
    },
    page: 1, //Página atual navegando
    minNumber: 5, // Por default é 5 - Total de página que mostra array pages: [...]
  });

  // paginate: {
  //   currentPage: 1
  //   endIndex: 14 // QTD Final de Quantidade TO
  //   endPage: 5 // Página Final
  //   pageSize: 15 // Limit de pesquisa
  //   pages: (5) [1, 2, 3, 4, 5]
  //   startIndex: 0 // QTD de início FROM
  //   startPage: 1 //
  //   totalItems: 269 // Total
  //   totalPages: 18 / Total de paginas
  // }

  return(...)
}
```
