import { useState } from "react";

function Alert(prop) {
  const [show, setShow] = useState(true);

  return (
    <>
      <div
        className={`alert alert-${prop.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong> {prop.message}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

export default Alert;
