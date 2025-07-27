import React from 'react';

const LoadingSkeleton = ({ type = 'dish', count = 1 }) => {
  const SkeletonItem = () => {
    if (type === 'dish') {
      return (
        <div className="bg-white rounded-lg shadow p-4 animate-pulse">
          <div className="h-40 w-full bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
          </div>
        </div>
      );
    }

    if (type === 'order') {
      return (
        <div className="bg-white p-6 rounded-lg shadow animate-pulse">
          <div className="h-8 w-1/3 bg-gray-200 rounded mb-6"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-between py-4">
              <div className="space-y-2 w-2/3">
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-200 rounded"></div>
                <div className="h-5 w-5 bg-gray-200 rounded"></div>
                <div className="h-8 w-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
          <div className="h-12 w-full bg-gray-200 rounded mt-6"></div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow p-4 animate-pulse">
        <div className="h-6 w-full bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-full bg-gray-200 rounded"></div>
      </div>
    );
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </>
  );
};

export default LoadingSkeleton;