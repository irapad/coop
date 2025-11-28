import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showNotification?: boolean;
  notificationCount?: number;
  rightAction?: React.ReactNode;
  leftAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  showNotification = false,
  notificationCount = 0,
  rightAction,
  leftAction
}) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 bg-card/95 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-3 max-w-app mx-auto">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {showBack ? (
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={24} className="text-textDark" />
            </button>
          ) : leftAction ? (
            leftAction
          ) : (
            <div className="w-10" /> // Spacer
          )}
        </div>

        {/* Center - Title */}
        {title && (
          <h1 className="text-title text-textDark font-semibold flex-1 text-center">
            {title}
          </h1>
        )}

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {showNotification && (
            <button
              onClick={() => navigate('/notifications')}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Bell size={24} className="text-textDark" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-danger text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                  {notificationCount > 9 ? '9+' : notificationCount}
                </span>
              )}
            </button>
          )}
          {rightAction}
          {!showNotification && !rightAction && <div className="w-10" />}
        </div>
      </div>
    </header>
  );
};
