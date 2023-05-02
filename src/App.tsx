import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import HomePage from "./pages/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
