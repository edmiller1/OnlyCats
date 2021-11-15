import React, { Fragment } from "react";
import { AvatarSkeleton } from "..";

export const PageSkeleton = () => {
  const skeleton = (
    <div className="max-w-2xl w-full mx-auto mb-10">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <Fragment>
        {skeleton}
        {skeleton}
        {skeleton}
        {skeleton}
      </Fragment>
    </div>
  );
};
