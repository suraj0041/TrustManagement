import "./Timeline.css";
import TimelineItem from "./TimelineItem";
export default function Timeline() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-12">
            <div className="timeline timeline-line-solid">
              <span className="timeline-label">
                <span className="label">April 2018</span>
              </span>
              <TimelineItem />
              {/* asasd */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
