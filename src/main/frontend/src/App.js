import {Routes, Link, Route, useNavigate, Outlet} from "react-router-dom";
import Main from "./component/Main";
import ThemeList from "./component/ThemeList";
import ThemeView from "./component/ThemeView";
import AddPlace from "./component/AddPlace";


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={ <Main/>}></Route>
        <Route path='/themeList' element={ <ThemeList />}></Route>
        <Route path='/themeView' element={<ThemeView />}></Route>
        <Route path='/addPlace' element={<AddPlace />}></Route>
      </Routes>

    </div>
  );
}

export default App;
