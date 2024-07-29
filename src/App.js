import './App.css';
import { Toaster } from "react-hot-toast";
import Container from "./components/Container";

function App() {
  return (
    <>
      <div className='container flex flex-row items-center justify-center h-full'>
        <Container />
      </div>
      <Toaster />
    </>
  );
}

export default App;
