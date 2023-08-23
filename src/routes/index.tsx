import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Contact } from '../pages/Contact';
import { About } from '../pages/About';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { SecurityPolicy } from '../pages/SecurityPolicy';
import { PageNotFound } from '../pages/PageNotFound';
import { AccountSecurity} from '../pages/AccountSecurity/'
import { MooveResource } from '../pages/MooveResource';
import {ServicesPayment} from '../pages/ServicesPayment';
import {Debts} from '../pages/Debts';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/quem-somos" element={<About />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/politica-de-seguranca" element={<SecurityPolicy />} />
        <Route path="/conta-protegida" element={<AccountSecurity />} />
        <Route path="/movimentar-recurso" element={<MooveResource />} />
        <Route path="/ServicesPayment" element={<ServicesPayment />} />
        <Route path="/Debts" element={<Debts />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
