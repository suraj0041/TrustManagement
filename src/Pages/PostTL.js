import { useState } from "react";
import PostTLModal from "../Jsonmodal/PostTLModal";

export default function PostTL() {
  const [Title, setTitle] = useState("");
  const [Comment, setComment] = useState("");
  const [Attachment, setAttachment] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onCommentChange = (e) => {
    setTitle(e.target.value);
  };
  const onAttachmentChange = (e) => {
    setTitle(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();

    let a = PostTLModal;
    a.userid = 1;
    a.comment = Comment;
    a.postedtime = Date().toString();
    a.title = Title;
    console.log(a);
  };

  return (
    <>
      <div className="PostTL">
        <h1>Post</h1>
        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="postTitle"
              onChange={onTitleChange}
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
      </div>
    </>
  );
}
