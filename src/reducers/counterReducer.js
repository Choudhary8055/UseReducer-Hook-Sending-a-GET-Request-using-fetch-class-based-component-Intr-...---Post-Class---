import React, { useReducer, useState } from "react";

const counterReducer = (state, action) => {
  // const initialValues = {
  //   count: 0
  // };
  // const count = 0;
  state = {
    count: 0
  };
  switch (action.type) {
    case "INCREMENTBYONE":
      return {
        count: state.count + 1
      };
    case "DECREMENTBYONE":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

export { counterReducer };
