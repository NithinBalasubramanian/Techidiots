import './App.scss';
import Header from './includes/navbar';
import Footer from './includes/footer';
import ContentManager from './contentManage';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ContentManager />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
