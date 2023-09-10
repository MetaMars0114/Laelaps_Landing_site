import React from "react";

const PageContainer = ({children}) => {
  return (
    <div className="w-full sm:h-[100vh] flex items-center justify-center">
      {children}
    </div>
  )
}

export default PageContainer;
