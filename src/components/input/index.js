import React, { forwardRef } from "react";

const Input = forwardRef(function MyInput(props, ref) {
  return (
    <div>
      <input
        type="text"
        name="test"
        onChange={(event) => {
          ref.current = event.target.value;
          // props.setArrayy([22, 44, 55, 66, 77, 88, 99]);
          props.funnn();
        }}
      />
    </div>
  );
});

export default Input;
