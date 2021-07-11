import Modal from "./components/modal";
import Home from "./pages/home";
import TrailsListProvider from './context/TrailsList'

function App() {
  
  return (
    <main>
      <TrailsListProvider>
        <Home />
      </TrailsListProvider>
    </main>
  );
}

export default App;
