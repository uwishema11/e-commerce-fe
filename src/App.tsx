import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import Layout from './components/Layout'
import NavBar from './components/NavBar'


export default function App() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <BrowserRouter>
       <Layout>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
       </Layout>
      </BrowserRouter>
    </div>
  );
}
