import React, { useReducer, useState } from "react";

const counterReducer = (state, action) => {
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
      throw new Error();
  }
};

export { counterReducer };
