import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Bell, CheckCheck } from 'lucide-react';
import { notifications } from '../data/mock';

export const Notifications: React.FC = () => {
  return (
    <PageContainer title="การแจ้งเตือน" showBack>
      <div className="p-4 space-y-3">
        {notifications.map((notif) => (
          <Card
            key={notif.id}
            className={notif.read ? 'opacity-60' : ''}
          >
            <div className="flex gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                notif.type === 'success' ? 'bg-success/20' :
                notif.type === 'warning' ? 'bg-accent/20' :
                'bg-primary/20'
              }`}>
                <Bell size={20} className={
                  notif.type === 'success' ? 'text-success' :
                  notif.type === 'warning' ? 'text-accent' :
                  'text-primary'
                } />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-textDark mb-1">{notif.title}</h4>
                <p className="text-sm text-textMuted mb-2">{notif.message}</p>
                <p className="text-xs text-textMuted">{notif.date} {notif.time}</p>
              </div>
              {notif.read && <CheckCheck size={20} className="text-primary" />}
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};
