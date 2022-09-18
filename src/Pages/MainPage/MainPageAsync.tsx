import {lazy} from "react";

// искуственная задержка для проверки suspense
export const MainPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    setTimeout(() => res(import('./MainPage')), 1500)
}));