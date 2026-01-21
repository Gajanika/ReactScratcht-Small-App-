import React, { forwardRef } from "react";

const ForwardInput = forwardRef((props, ref) => {
  return (
    <div>
      <h3>Forward Ref Input</h3>
      <input ref={ref} placeholder="Forward Ref Input" />
    </div>
  );
});

export default ForwardInput;
