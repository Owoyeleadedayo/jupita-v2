import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignIn/SignUp'
import VerifyEmail from './components/SignIn/VerifyEmail';
import SuccessPage from './components/SignIn/SuccessPage';
import LoanInformation from './components/IndividualLoanFlow/LoanInformation';
import Sidebar from './components/Sidebar';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import { Box } from '@chakra-ui/react';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/loan-info" element={<LoanInformation />} />
          <Route element={<LayoutWithSidebar />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function LayoutWithSidebar() {
  return (
    <Box>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Box>
  )
}

export default App
