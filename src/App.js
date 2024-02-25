import './App.css';
import CustomerForm from './pages/CustomerForm';
import DashBoardForm from './pages/DashBoardForm';
import InvoiceForm from './pages/InvoiceForm';
import ItemForm from './pages/ItemForm';
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
            <Route path='/DashBoardForm' element={<DashBoardForm />}/>
            <Route path='/InvoiceForm' element={<InvoiceForm />}/>
            <Route path='/ItemForm' element={<ItemForm />}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
