import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { GradientMesh } from './components/ui/GradientMesh';

// Pages
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { Dashboard } from './pages/Dashboard';
import { Accounts } from './pages/Accounts';
import { AccountDetail } from './pages/AccountDetail';
import { Transfer } from './pages/Transfer';
import { Deposit } from './pages/Deposit';
import { Withdraw } from './pages/Withdraw';
import { Loans } from './pages/Loans';
import { LoanDetail } from './pages/LoanDetail';
import { LoanPayment } from './pages/LoanPayment';
import { LoanApply } from './pages/LoanApply';
import { Shares } from './pages/Shares';
import { BuyShares } from './pages/BuyShares';
import { Transactions } from './pages/Transactions';
import { TransactionDetail } from './pages/TransactionDetail';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Menu } from './pages/Menu';
import { Notifications } from './pages/Notifications';
import { Calculator } from './pages/Calculator';
import { Statements } from './pages/Statements';
import { Contact } from './pages/Contact';
import { Scan } from './pages/Scan';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <GradientMesh />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/accounts"
          element={isAuthenticated ? <Accounts /> : <Navigate to="/login" />}
        />
        <Route
          path="/accounts/:id"
          element={isAuthenticated ? <AccountDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/transfer"
          element={isAuthenticated ? <Transfer /> : <Navigate to="/login" />}
        />
        <Route
          path="/deposit"
          element={isAuthenticated ? <Deposit /> : <Navigate to="/login" />}
        />
        <Route
          path="/withdraw"
          element={isAuthenticated ? <Withdraw /> : <Navigate to="/login" />}
        />
        <Route
          path="/loans"
          element={isAuthenticated ? <Loans /> : <Navigate to="/login" />}
        />
        <Route
          path="/loans/:id"
          element={isAuthenticated ? <LoanDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/loans/:id/pay"
          element={isAuthenticated ? <LoanPayment /> : <Navigate to="/login" />}
        />
        <Route
          path="/loans/apply"
          element={isAuthenticated ? <LoanApply /> : <Navigate to="/login" />}
        />
        <Route
          path="/shares"
          element={isAuthenticated ? <Shares /> : <Navigate to="/login" />}
        />
        <Route
          path="/shares/buy"
          element={isAuthenticated ? <BuyShares /> : <Navigate to="/login" />}
        />
        <Route
          path="/transactions"
          element={isAuthenticated ? <Transactions /> : <Navigate to="/login" />}
        />
        <Route
          path="/transactions/:id"
          element={isAuthenticated ? <TransactionDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/scan"
          element={isAuthenticated ? <Scan /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/settings"
          element={isAuthenticated ? <Settings /> : <Navigate to="/login" />}
        />
        <Route
          path="/menu"
          element={isAuthenticated ? <Menu /> : <Navigate to="/login" />}
        />
        <Route
          path="/notifications"
          element={isAuthenticated ? <Notifications /> : <Navigate to="/login" />}
        />
        <Route
          path="/calculator"
          element={isAuthenticated ? <Calculator /> : <Navigate to="/login" />}
        />
        <Route
          path="/statements"
          element={isAuthenticated ? <Statements /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact"
          element={isAuthenticated ? <Contact /> : <Navigate to="/login" />}
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
