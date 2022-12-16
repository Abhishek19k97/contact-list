import './App.css';
import Homepage from './components/HomePage/Homepage';
import AddContact from './components/AddContact/index';
import Header from './components/Header/index';
import AppRoutes from './routes/appRoutes';

function App() {
  return (
    <div className="App">
    <Header />
    <AppRoutes />
    </div>
  );
}

export default App;
