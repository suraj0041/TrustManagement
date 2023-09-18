export default function TimelineItem() {
  const TimelineDatas = [
    {
      profileimage: "./images/avatar_f1.png",
      username: "Nathan Hunter",
      body: {
        Comment:
          "Nullam aliquam felis ut elit rutrum mattis. Curabitur arcu eros,imperdiet id gravida sit amet, pulvinar non ex. Cras ac ligula    eget sapien suscipit luctus non a risus. Curabitur iaculis consectetur enim vel dignissim. Ut ac mi dolor. Pellentesque habitant morbi tristique senectus et netus etb malesuada fames ac    turpis egestas. Integer lobortis justo erat, ac faucibus risus    laoreet semper. Aenean et sollicitudin ante, vel finibus velit.   Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: [
          "./images/avatar_m1.png",
          "./images/avatar_f2.png",
          "./images/avatar_m2.png",
          "./images/avatar_f1.png"
        ]
      },
      postedtime: "Mon Sep 18 2023 15:01:57 GMT+0530 (India Standard Time)",
      commentcount: 10,
      likecount: 10
    },
    {
      profileimage: "./images/avatar_m1.png",
      username: "Nathan Hunter",
      body: "",
      postedtime: "Mon Sep 18 2023 15:01:57 GMT+0530 (India Standard Time)",
      commentcount: 10,
      likecount: 10
    },
    {
      profileimage: "./images/avatar_m2.png",
      username: "Nathan Hunter",
      body: {
        Comment:
          "Nullam aliquam felis ut elit rutrum mattis. Curabitur arcu eros,imperdiet id gravida sit amet, pulvinar non ex. Cras ac ligula    eget sapien suscipit luctus non a risus. Curabitur iaculis consectetur enim vel dignissim. Ut ac mi dolor. Pellentesque habitant morbi tristique senectus et netus etb malesuada fames ac    turpis egestas. Integer lobortis justo erat, ac faucibus risus    laoreet semper. Aenean et sollicitudin ante, vel finibus velit.   Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: [
          "./images/avatar_m1.png",
          "./images/avatar_f2.png",
          "./images/avatar_m2.png",
          "./images/avatar_f1.png",
          "./images/avatar_m1.png",
          "./images/avatar_f2.png",
          "./images/avatar_m2.png",
          "./images/avatar_f1.png"
        ]
      },
      postdatetime: "Mon Sep 18 2023 15:01:57 GMT+0530 (India Standard Time)",
      commentcount: 10,
      likecount: 10
    },
    {
      profileimage: "./images/avatar_f2.png",
      username: "Nathan Hunter",
      body: "",
      postedtime: "Mon Sep 18 2023 15:01:57 GMT+0530 (India Standard Time)",
      commentcount: 10,
      likecount: 10
    },
    {
      profileimage: "./images/avatar_f2.png",
      username: "Nathan Hunter",
      body: "",
      postedtime: "Mon Sep 18 2023 15:01:57 GMT+0530 (India Standard Time)",
      commentcount: 10,
      likecount: 10
    },
    {
      profileimage: "./images/avatar_f2.png",
      username: "Nathan Hunter",
      body: "",
      postedtime: "Mon Sep 18 2023 15:01:57 GMT+0530 (India Standard Time)",
      commentcount: 10,
      likecount: 10
    }
  ];
  return (
    <>
      {TimelineDatas.map((TimelineData, index) => {
        return (
          <div className="timeline-item" key={index}>
            <div className="timeline-point timeline-point"></div>
            <div className="timeline-event">
              <div className="widget has-shadow">
                <div className="widget-header d-flex align-items-center">
                  <div className="user-image">
                    <img
                      className="rounded-circle"
                      src={TimelineData.profileimage}
                      alt="..."
                    />
                    <i className="bi bi-person"></i>
                  </div>
                  <div className="d-flex flex-column mr-auto">
                    <div className="title">
                      <span className="username">{TimelineData.username}</span>
                    </div>
                  </div>
                  <div className="widget-options">
                    <div className="dropdown">
                      <button
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="dropdown-toggle"
                      >
                        <i className="la la-ellipsis-h"></i>
                      </button>
                      <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">
                          <i className="la la-edit"></i>Edit Post
                        </a>
                        <a href="#" className="dropdown-item">
                          <i className="la la-trash"></i>Delete Post
                        </a>
                        <a href="#" className="dropdown-item">
                          <i className="la la-bell-slash"></i>Disable
                          Notifications
                        </a>
                        <a href="#" className="dropdown-item faq">
                          <i className="la la-question-circle"></i>FAQ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {TimelineData.body && (
                  <div className="widget-body">
                    <p>{TimelineData.body.Comment}</p>
                    {TimelineData.body.images && (
                      <div className="postimage">
                        {TimelineData.body.images.map((postimage, index) => {
                          return (
                            <img
                              key={index}
                              src={postimage}
                              className="postimage-img-content img-fluid img-thumbnail"
                              alt="..."
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
                <div className="widget-footer d-flex align-items-center">
                  {/* <div className="col-xl-8 col-md-8 col-7 no-padding d-flex justify-content-start">
                    <div className="users-like">
                      <a href="#">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid rounded-circle"
                          alt="..."
                        />
                      </a>
                      <a href="#">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          className="img-fluid rounded-circle"
                          alt="..."
                        />
                      </a>
                      <a href="#">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          className="img-fluid rounded-circle"
                          alt="..."
                        />
                      </a>
                      <a href="#">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          className="img-fluid rounded-circle"
                          alt="..."
                        />
                      </a>
                      <a href="#">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar6.png"
                          className="img-fluid rounded-circle"
                          alt="..."
                        />
                      </a>
                    </div>
                  </div> */}

                  {/* <div className="col-xl-4 col-md-4 col-5 no-padding d-flex justify-content-end">
                    <div className="meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="la la-comment"></i>
                            <span className="numb">
                              {TimelineData.commentcount}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="la la-heart"></i>
                            <span className="numb">
                              {TimelineData.likecount}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="time-right">{TimelineData.postdatetime}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
