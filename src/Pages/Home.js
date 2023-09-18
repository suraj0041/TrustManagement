import NavBar from "../Components/NavBar/NavBar";
import Timeline from "../Components/Timeline/Timeline";
import PostTL from "./PostTL";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavBar />
          <section>
            {/* <Timeline /> */}
            <PostTL />
          </section>
        </div>
      </div>
    </>
  );
}
