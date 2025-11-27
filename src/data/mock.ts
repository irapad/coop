export const user = {
  id: "CM-001234",
  name: "สมชาย รักออม",
  department: "ฝ่ายบัญชี",
  joinDate: "2020-03-15",
  phone: "089-123-4567",
  email: "somchai@example.com",
  idCard: "1234567890123",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Somchai"
};

export const accounts = [
  {
    id: "sav1",
    type: "savings",
    name: "ออมทรัพย์",
    accountNumber: "001-2-34567-8",
    balance: 150000,
    rate: 2.5,
    color: "#10b981"
  },
  {
    id: "gold1",
    type: "gold",
    name: "ออมทอง",
    accountNumber: "002-3-45678-9",
    balance: 85000,
    rate: 3.0,
    color: "#f59e0b"
  },
  {
    id: "fixed1",
    type: "fixed",
    name: "ฝากประจำ",
    accountNumber: "003-4-56789-0",
    balance: 200000,
    rate: 4.0,
    color: "#a855f7"
  }
];

export const loans = [
  {
    id: "ln1",
    type: "emergency",
    name: "กู้ฉุกเฉิน",
    principal: 50000,
    remaining: 32000,
    monthly: 5500,
    rate: 6.0,
    loanNumber: "LN-2023-001",
    startDate: "2023-06-15",
    endDate: "2024-06-15",
    installments: 12,
    paidInstallments: 6
  },
  {
    id: "ln2",
    type: "general",
    name: "กู้สามัญ",
    principal: 300000,
    remaining: 288000,
    monthly: 10500,
    rate: 7.5,
    loanNumber: "LN-2023-042",
    startDate: "2023-01-10",
    endDate: "2026-01-10",
    installments: 36,
    paidInstallments: 4
  }
];

export const shares = {
  units: 500,
  value: 50000,
  pricePerUnit: 100,
  monthly: 1000,
  dividend: 2500,
  rate: 5.0,
  lastDividendDate: "2024-03-31"
};

export const transactions = [
  {
    id: "t1",
    type: "deposit",
    desc: "ฝากเงิน",
    amount: 5000,
    date: "2024-11-19",
    time: "14:35",
    account: "ออมทรัพย์",
    refNumber: "TXN2024111900123"
  },
  {
    id: "t2",
    type: "loan",
    desc: "ชำระกู้",
    amount: -10500,
    date: "2024-11-18",
    time: "10:20",
    account: "กู้สามัญ",
    refNumber: "TXN2024111800089"
  },
  {
    id: "t3",
    type: "transfer",
    desc: "โอนเงิน",
    amount: -2000,
    date: "2024-11-17",
    time: "16:45",
    account: "ออมทรัพย์",
    refNumber: "TXN2024111700234"
  },
  {
    id: "t4",
    type: "share",
    desc: "ค่าหุ้น",
    amount: -1000,
    date: "2024-11-15",
    time: "09:00",
    account: "หุ้น",
    refNumber: "TXN2024111500012"
  },
  {
    id: "t5",
    type: "interest",
    desc: "ดอกเบี้ย",
    amount: 312,
    date: "2024-11-01",
    time: "00:01",
    account: "ออมทรัพย์",
    refNumber: "TXN2024110100001"
  },
  {
    id: "t6",
    type: "withdraw",
    desc: "ถอนเงิน",
    amount: -8000,
    date: "2024-10-28",
    time: "13:15",
    account: "ออมทรัพย์",
    refNumber: "TXN2024102800156"
  },
  {
    id: "t7",
    type: "deposit",
    desc: "ฝากเงิน",
    amount: 15000,
    date: "2024-10-25",
    time: "11:30",
    account: "ฝากประจำ",
    refNumber: "TXN2024102500078"
  }
];

export const notifications = [
  {
    id: "n1",
    title: "ชำระกู้สำเร็จ",
    message: "คุณได้ชำระเงินกู้งวดที่ 5 จำนวน 10,500 บาท",
    date: "2024-11-18",
    time: "10:21",
    read: false,
    type: "success"
  },
  {
    id: "n2",
    title: "รับดอกเบี้ย",
    message: "คุณได้รับดอกเบี้ยบัญชีออมทรัพย์ 312 บาท",
    date: "2024-11-01",
    time: "00:01",
    read: false,
    type: "info"
  },
  {
    id: "n3",
    title: "แจ้งเตือนชำระกู้",
    message: "ใกล้ถึงกำหนดชำระเงินกู้งวดที่ 6 วันที่ 10 ธ.ค. 2024",
    date: "2024-10-30",
    time: "09:00",
    read: true,
    type: "warning"
  }
];

export const chartData = [
  { month: 'มิ.ย.', amount: 140000 },
  { month: 'ก.ค.', amount: 145000 },
  { month: 'ส.ค.', amount: 138000 },
  { month: 'ก.ย.', amount: 152000 },
  { month: 'ต.ค.', amount: 148000 },
  { month: 'พ.ย.', amount: 150000 },
];

export const getTotalBalance = () => {
  const accountsTotal = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const sharesTotal = shares.value;
  return accountsTotal + sharesTotal;
};

export const getTotalLoan = () => {
  return loans.reduce((sum, loan) => sum + loan.remaining, 0);
};
