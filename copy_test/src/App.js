import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './page/Main';
import Admin from './page/Admin';
import Auth from './page/Auth';
import PDFviewer from './component/PDFviewer';
import ErrorPage from './page/Error';
import { Routes, Route, Link } from 'react-router-dom';
import AdminLayout from './component/AdminLayout';


export default function App() {

  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>} />
        
        <Route path="/pdf" element={<PDFviewer></PDFviewer>} />
        
        <Route path="/auth" element={<Auth></Auth>} >
          <Route path="change" element={<AdminLayout></AdminLayout>} />
        </Route>
        
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
    </div>
    </>
  );
}

