- tên biến: camelCase
- tên folder: viết thường, vd: company, detail_company
- tên file:
. component(.tsx, .scss): Capitalize (Product.container.tsx)
. file .ts: như tên folder

- component structure: 
. file container ( class component use manage state, call service api)
. file mobile presenter ( dumb component )
. file web presenter ( dumb component )
. file style 
vd: Example.container.tsx
    Example.m_presenter.tsx
    Example.w_presenter.tsx
    Example.m_style.tsx
    Example.w_style.tsx

-  coding style:
. hạn chế dùng useState, useEffect trong presenter file
. ko connect redux trong presenter file
. ko qá 300 lines trong 1 file .tsx

