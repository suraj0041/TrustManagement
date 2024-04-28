import { useState } from "react";
import Alert from "../Components/Alert/Success";

export default function PostTL() {
  const [Title, setTitle] = useState("");
  const [Comment, setComment] = useState("");
  const [Attachment, setAttachment] = useState("");
  const [UserID, setUserID] = useState(0);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [StatusMsg, setStatusMsg] = useState(""); //0=error,1=success

  const ResetMsg = () => {
    setTimeout(() => {
      setStatusMsg(-1);
      setErrorMsg("");
    }, 5000);
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onCommentChange = (e) => {
    console.log(e.target.value);
    setComment(e.target.value);
  };
  const onAttachmentChange = (e) => {
    setAttachment(e.target.value);
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();

    // let a = PostTLModal;
    // a.userid = UserID;
    // a.comment = Comment;
    // a.title = Title;
    // a.images = [];
    // console.log(JSON.stringify(a));
    if (UserID.length > 0 && Title.length > 0) {
      let url = `${process.env.REACT_APP_SERVER_URL}/post/add`;
      await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userid: UserID,
          title: Title,
          comment: Comment,
          images: []
        })
      })
        .then((res) => res.json())
        .then((res) => {
          setStatusMsg(1);
          setErrorMsg("success");
          console.log(res);
        })
        .catch((err) => {
          setStatusMsg(0);
          setErrorMsg(err);
          console.log(err);
        });
      ResetMsg();
    } else {
      setStatusMsg(0);
      setErrorMsg(`error ${UserID}:${Title}:${Comment}`);
      console.log(`error ${UserID}:${Title}:${Comment}`);
    }
  };

  const OnChangeUID = (e) => {
    setUserID(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="PostTL">
        <h1>Post</h1>
        <form onSubmit={onFormSubmit}>
          <select onChange={OnChangeUID}>
            <option value="UID_1695399944788">UID_1695399944788</option>
            <option value="UID_1695399988374">UID_1695399988374</option>
          </select>
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="postTitle"
              onChange={onTitleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postComment" className="form-label">
              Comment
            </label>
            <textarea
              className="form-control"
              id="postComment"
              rows="3"
              onChange={onCommentChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="postAttachment" className="form-label">
              Attachment
            </label>
            <input
              className="form-control"
              type="file"
              id="postAttachment"
              onChange={onAttachmentChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {
          //   StatusMsg === 0 || StatusMsg === 1 ? (
          //   <div className="mt-3">
          //     <Alert
          //       message={ErrorMsg}
          //       type={StatusMsg === 0 ? "danger" : "success"}
          //     />
          //   </div>
          // ) : (
          //   ""
          // )
          <div>
            {StatusMsg} {ErrorMsg}
          </div>
        }
      </div>
    </>
  );
}
