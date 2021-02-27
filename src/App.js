import './App.scss';
import Header from './includes/navbar';
import Footer from './includes/footer';
import ContentManager from './contentManage';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentManager />
      <footer />
    </div>
  );
}

export default App;
