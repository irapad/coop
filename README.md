# COSMA Coop - สหกรณ์ออมทรัพย์

แอปพลิเคชันสหกรณ์ออมทรัพย์พนักงานคอสม่าและเพื่อน จำกัด ออกแบบให้ใช้งานง่ายสไตล์ K PLUS

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Lucide React (Icons)
- Recharts (Charts)
- Framer Motion (Animations)
- React Router DOM

## Features

### บัญชี
- ดูยอดเงินรวมทั้งหมด
- จัดการบัญชีหลายบัญชี (ออมทรัพย์, ออมทอง, ฝากประจำ)
- ฝากเงิน
- ถอนเงิน
- โอนเงินระหว่างบัญชี

### เงินกู้
- ดูยอดกู้คงเหลือ
- ชำระเงินกู้
- สมัครกู้ใหม่
- คำนวณเงินกู้

### หุ้น
- ดูมูลค่าหุ้น
- ซื้อหุ้นเพิ่ม
- ดูปันผล

### อื่นๆ
- รายการธุรกรรมทั้งหมด
- แจ้งเตือน
- Statement
- โปรไฟล์
- ตั้งค่า

## Design Highlights

- **Mobile-first**: ออกแบบสำหรับมือถือ (max-width: 430px)
- **Clean UI**: ใช้งานง่าย เน้นความชัดเจน
- **K PLUS Style**: แรงบันดาลใจจากแอป K PLUS
- **Bottom Navigation**: แท็บด้านล่างแบบ floating
- **PIN Security**: ยืนยันตัวตนด้วย PIN
- **Smooth Animations**: ใช้ Framer Motion

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # UI components
│   ├── layout/          # Layout components
│   └── [features]       # Feature components
├── pages/               # Page components
├── data/                # Mock data
├── hooks/               # Custom hooks
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## Mock Login Credentials

- **เลขสมาชิก**: CM-001234
- **รหัสผ่าน**: (อะไรก็ได้)
- **PIN**: 123456

## Features Implemented

✅ Landing Page with onboarding
✅ Login with PIN/Biometric
✅ Dashboard with balance overview
✅ Multiple account management
✅ Transfer between accounts
✅ Deposit & Withdraw
✅ Loan management & payment
✅ Share trading
✅ Transaction history
✅ Notifications
✅ Profile & Settings
✅ Calculator
✅ Statements
✅ Contact

## Color Scheme

- Primary: #8b3f9e (purple)
- Primary Light: #a855f7
- Accent: #f59e0b (gold)
- Success: #10b981 (green)
- Danger: #ef4444 (red)
- Background: #f8f9fa
- Card: #ffffff

## Browser Support

Modern browsers with ES6+ support

## License

© 2024 COSMA Cooperative. All rights reserved.
