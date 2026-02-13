import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-lg px-4 py-6 mx-auto">
      {children}
    </div>
  );
};

export default Container;