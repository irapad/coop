import React from 'react';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
  showNotification?: boolean;
  notificationCount?: number;
  showBottomNav?: boolean;
  headerRightAction?: React.ReactNode;
  headerLeftAction?: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  showBack = false,
  showNotification = false,
  notificationCount = 0,
  showBottomNav = true,
  headerRightAction,
  headerLeftAction,
  className = ''
}) => {
  return (
    <div className="app-container">
      <Header
        title={title}
        showBack={showBack}
        showNotification={showNotification}
        notificationCount={notificationCount}
        rightAction={headerRightAction}
        leftAction={headerLeftAction}
      />

      <main className={`pb-24 ${className}`}>
        {children}
      </main>

      {showBottomNav && <BottomNav />}
    </div>
  );
};
