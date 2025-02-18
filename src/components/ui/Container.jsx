import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-[93.75rem] px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
