import { useState } from "react";

function Success(prop) {
  const [show, setShow] = useState(true);

  return (
    <>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Error</strong> {prop.message}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

export default Success;
