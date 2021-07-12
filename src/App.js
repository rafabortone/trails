import Home from "./pages/home";
import TrailsListProvider from './context/TrailsList'
import Modal from "./components/modal";

function App() {
  
  return (
    <main>
      <TrailsListProvider>
        <Home />
        <Modal/>
      </TrailsListProvider>
        
    </main>
  );
}

export default App;
