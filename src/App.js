import './App.css';
import Customer from './pages/Customer';
import CustomerForm from './Components/CustomerForm'
// import DashBoardForm from './pages/DashBoardForm';
import Invoice from './pages/Invoice';
import InvoiceForm from './Components/InvoiceForm';
import Item from './pages/Item'
import ItemForm from './Components/ItemForm';
import EditCustomer from './Components/EditCustomer';
import EditInvoice from './Components/EditInvoice';
import EditItem from './Components/EditItems';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path='/CustomerForm' element={<CustomerForm />}/>
            <Route path='/Customer' element={<Customer />}/>
            {/* <Route path='/DashBoardForm' element={<DashBoardForm />}/> */}
            <Route path='/Invoice' element={<Invoice />}/>
            <Route path='/InvoiceForm' element={<InvoiceForm />}/>
            <Route path='/Item' element={<Item />}/>
            <Route path='/ItemForm' element={<ItemForm />}/>
            <Route path="/editCustomer/:customerId" element={<EditCustomer />} />
            <Route path="/editInvoice/:invoiceId" element={<EditInvoice />} />
            <Route path="/editItem/:itemId" element={<EditItem />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
