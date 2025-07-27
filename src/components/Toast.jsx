import React, { useEffect } from 'react';
import { 
  FaCheckCircle, 
  FaExclamationCircle, 
  FaInfoCircle,
  FaTimes 
} from 'react-icons/fa';

const Toast = ({ 
  message, 
  type = 'success', 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <FaCheckCircle className="h-5 w-5 text-green-400" />,
    error: <FaExclamationCircle className="h-5 w-5 text-red-400" />,
    info: <FaInfoCircle className="h-5 w-5 text-blue-400" />
  };

  const bgColors = {
    success: 'bg-green-50 border-green-400',
    error: 'bg-red-50 border-red-400',
    info: 'bg-blue-50 border-blue-400'
  };

  const textColors = {
    success: 'text-green-800',
    error: 'text-red-800',
    info: 'text-blue-800'
  };

  return (
    <div className={`fixed bottom-4 right-4 border-l-4 rounded-md shadow-lg ${bgColors[type]}`}>
      <div className="flex p-4">
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${textColors[type]}`}>
            {message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <button
            onClick={onClose}
            className={`inline-flex rounded-md focus:outline-none ${textColors[type]} hover:${bgColors[type].replace('50', '100')}`}
          >
            <FaTimes className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;