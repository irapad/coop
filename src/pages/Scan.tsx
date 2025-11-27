import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { ScanLine, QrCode } from 'lucide-react';

export const Scan: React.FC = () => {
  return (
    <PageContainer title="สแกน QR" showNotification notificationCount={2}>
      <div className="p-4 space-y-4">
        <Card>
          <div className="aspect-square bg-gray-900 rounded-app flex flex-col items-center justify-center text-white">
            <ScanLine size={64} className="mb-4 animate-pulse" />
            <p className="text-lg">สแกน QR Code</p>
            <p className="text-sm text-white/70 mt-2">วางกล้องไว้เหนือ QR Code</p>
          </div>
        </Card>

        <div className="text-center">
          <p className="text-sm text-textMuted">หรือ</p>
        </div>

        <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-app hover:border-primary tap-scale">
          <QrCode size={32} className="mx-auto mb-2 text-primary" />
          <p className="text-sm text-textDark">อัพโหลด QR Code</p>
        </button>
      </div>
    </PageContainer>
  );
};
