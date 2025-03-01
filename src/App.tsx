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
import ApiStatusPage from './Pages/Dashboard/ApiStatusPage';
import ApplicationsPage from './Pages/Applications/ApplicationsPage';
import DetailsPage from './Pages/Applications/DetailsPage';
import ClientsPage from './Pages/Clients/ClientsPage';
import InfoPage from './Pages/Clients/InfoPage';
import CreditSearchPage from './Pages/CreditSearch/CreditSearchPage';
import LogsPage from './Pages/Log/LogsPage';
import SettingsPage from './Pages/Settings/SettingsPage';
import AnalyzePage from './Pages/Analyze/AnalyzePage';

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
            <Route path="/api-status" element={<ApiStatusPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route
              path="/applications/:applicantsName"
              element={<DetailsPage />}
            />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/clients/:userId" element={<InfoPage />} />
            <Route path="/credit-search" element={<CreditSearchPage />} />
            <Route path="/analyze" element={<AnalyzePage />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
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
          <Route path="/api-status" element={<ApiStatusPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route
            path="/applications/:applicantsName"
            element={<DetailsPage />}
          />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/clients/:userId" element={<InfoPage />} />
          <Route path="/credit-search" element={<CreditSearchPage />} />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Box>
  );
}

export default App
