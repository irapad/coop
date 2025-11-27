import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <PageContainer title="ติดต่อเรา" showBack showNotification notificationCount={2}>
      <div className="p-4 space-y-4">
        <Card>
          <div className="flex gap-3 mb-4">
            <MapPin size={24} className="text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-textDark mb-2">ที่อยู่</h3>
              <p className="text-sm text-textMuted">
                123 ถนนสุขุมวิท แขวงคลองเตย<br />
                เขตคลองเตย กรุงเทพฯ 10110
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-primary" />
              <div>
                <p className="text-sm text-textMuted">โทรศัพท์</p>
                <p className="font-medium text-textDark">02-123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} className="text-primary" />
              <div>
                <p className="text-sm text-textMuted">อีเมล</p>
                <p className="font-medium text-textDark">contact@cosmacoop.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={20} className="text-primary" />
              <div>
                <p className="text-sm text-textMuted">เวลาทำการ</p>
                <p className="font-medium text-textDark">จันทร์-ศุกร์ 08:30-16:30</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="aspect-video bg-gray-200 rounded-app flex items-center justify-center">
            <p className="text-textMuted">🗺️ แผนที่</p>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};
