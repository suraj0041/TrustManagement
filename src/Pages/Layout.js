import { Outlet, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Timeline from "../Components/Timeline/Timeline";
import Home from "../Pages/Home";
import PostTL from "../Pages/PostTL";
import NoPage from "../Pages/NoPage";
import Users from "./Users";
export default function Layout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavBar />
          <section>
            <RoutePages />
          </section>
          <Outlet />
        </div>
      </div>
    </>
  );
}

function RoutePages() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/PostTL" element={<PostTL />} />
        <Route path="/Users" element={<Users />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
