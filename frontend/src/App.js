import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Loader from './Components/Loader/Loader';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Admin from './Pages/Admin';
import AdminLogin from './Pages/Admin/AdminLogin';

function App() {
  const {loading, portfolioData, reloadData} = useSelector(state => state.root);
  // const [showLoading, setShowLoading] = useState(false);
  const dispatch = useDispatch()
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  }
  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData])

  useEffect(() =>{
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData])


  
  return (
    <BrowserRouter>
      {loading ? <Loader/> : null}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin-login" element={<AdminLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
