import { lazy, LazyExoticComponent, type ReactElement } from "react";

import { NoLazy } from "../componens/lazy-loading/pages/NoLazy";
const LazyLayout = lazy(() => import(/* webpackChunckName: "lazylayout" */ '../componens/lazy-loading/layout/LazyLayout'));
const LazyPage = lazy(() => import(/* webpackChunckName: "lazypage" */ '../componens/lazy-loading/pages/LazyPage'));
const LazyPage2 = lazy(() => import(/* webpackChunckName: "lazypage-2" */ '../componens/lazy-loading/pages/LazyPage2'));
const LazyPage3 = lazy(() => import(/* webpackChunckName: "lazypage-3" */ '../componens/lazy-loading/pages/LazyPage3'));

type Page = () => ReactElement;

export interface Route {
  path: string;
  label: string;
  Component: LazyExoticComponent<Page> | Page;
}

export const routes: Route[] = [
  {
    path: 'lazy-layout/*',
    label: 'Lazy Layout',
    Component: LazyLayout,
  },
  {
    path: 'lazy-1',
    label: 'Lazy Page',
    Component: LazyPage,
  },
  {
    path: 'lazy-2',
    label: 'Lazy Page 2',
    Component: LazyPage2,
  },
  {
    path: 'lazy-3',
    label: 'Lazy Page 3',
    Component: LazyPage3,
  },
  {
    path: 'no-lazy',
    label: 'No Lazy Page',
    Component: NoLazy,
  },
];
