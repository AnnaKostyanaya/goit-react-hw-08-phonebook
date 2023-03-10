
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const Layout = lazy(() => import("../Layout/Layout"));
const ContactBook = lazy(() => import("../ContactBook/ContactBook"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const Home = lazy(() => import("../../pages/Home/Home"));
const ContactDetailPage = lazy(() => import("../../pages/ContactDetailPage/ContactDetailPage"));
const PublicRoute = lazy(() => import("../PublicRoute/PublicRoute"));
const PrivateRoute = lazy(() => import("../PrivateRoute/PrivateRoute"));

const App = () => {


return (
  <Suspense fallback={<p>...loading</p>}>
    <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactBook />} />
              <Route path="/contacts/:id" element={<ContactDetailPage />} />
          </Route>
            <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </Suspense>
);
}

export default App;

