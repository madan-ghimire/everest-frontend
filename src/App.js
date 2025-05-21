import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as ROUTES from "./Routes";
import ScrollToTop from "./utilities/ScrollTop";
import "./styledGlobal/sass/style.scss";
import { Spin } from 'antd'
// import NotFoundPage from "./components/NotFoundPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const Contactpage = lazy(() => import("./pages/Contactpage"));
const NewsPage = lazy(() => import("./pages/Newspage"));
const NewsDetailPage = lazy(() => import("./pages/Newspage/NewsDetail"));
const CoursePage = lazy(() => import("./pages/Coursepage"));
const AdmissionPage = lazy(() => import("./pages/AdmissionPage"));
const About = lazy(() => import("./pages/Aboutpage/About"));
const Principal = lazy(() => import("./pages/Aboutpage/Principal"));
const Mission = lazy(() => import("./pages/Aboutpage/Mission"));
const Gallery = lazy(() => import("./pages/Gallerypage"));
const Admissionform = lazy(() => import("./pages/AdmissionPage/AdmissionForm"));


const fallbackSpinner = (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
    }}
  >
    <Spin size="large" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Suspense fallback={fallbackSpinner}>
          <Route path={ROUTES.Homepage} exact component={Homepage} />
          <Route path={ROUTES.Contactpage} component={Contactpage} />
          <Route path={ROUTES.Newspage} component={NewsPage} />
          <Route path={ROUTES.Newsdetailpage} component={NewsDetailPage} />
          <Route path={ROUTES.Coursepage} component={CoursePage} />
          <Route path={ROUTES.Admission} exact component={AdmissionPage} />
          <Route path={ROUTES.Aboutpage} component={About} />
          <Route path={ROUTES.Aboutprincipal} component={Principal} />
          <Route path={ROUTES.Aboutmission} component={Mission} />
          <Route path={ROUTES.Gallerypage} component={Gallery} />
          <Route path={ROUTES.Admissionform} component={Admissionform} />

          
          {/* <Route path="*" component={NotFoundPage} /> */}

        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
