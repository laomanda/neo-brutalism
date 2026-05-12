import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";

const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage").then(module => ({ default: module.ProjectDetailPage })));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage").then(module => ({ default: module.ProductDetailPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(module => ({ default: module.NotFoundPage })));

import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route 
            path="/projects/:slug" 
            element={
              <Suspense fallback={<div className="h-screen w-full" />}>
                <ProjectDetailPage />
              </Suspense>
            } 
          />
          <Route 
            path="/products/:slug" 
            element={
              <Suspense fallback={<div className="h-screen w-full" />}>
                <ProductDetailPage />
              </Suspense>
            } 
          />
          <Route 
            path="*" 
            element={
              <Suspense fallback={<div className="h-screen w-full" />}>
                <NotFoundPage />
              </Suspense>
            } 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
