export default function PostTL() {
  return (
    <>
      <h1>Post</h1>
      <form>
        <div class="mb-3">
          <label for="postTitle" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" id="postTitle" />
        </div>
        <div class="mb-3">
          <label for="postComment" class="form-label">
            Comment
          </label>
          <textarea class="form-control" id="postComment" rows="3"></textarea>
        </div>
        <div class="mb-3">
          <label for="postAttachment" class="form-label">
            Attachment
          </label>
          <input class="form-control" type="file" id="postAttachment" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
