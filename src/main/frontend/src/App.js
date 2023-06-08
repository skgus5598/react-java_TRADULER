import {Routes, Link, Route, useNavigate, Outlet} from "react-router-dom";
import Main from "./component/Main";
import ThemeList from "./component/ThemeList";
import ThemeView from "./component/ThemeView";
import AddPlace from "./component/AddPlace";
import LoginForm from "./component/LoginForm";
import RegisterForm from "./component/RegisterForm";
import {useEffect} from "react";
import MyPageMenu from "./component/MyPageMenu";
import MyPage from "./component/MyPage";
import MySchedule from "./component/MySchedule";


function App() {

  useEffect( () => {
      if (localStorage.watched === undefined){
        localStorage.setItem('watched', JSON.stringify( []));
      }
    }, []);

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={ <Main/>}></Route>
        <Route path='/themeList' element={ <ThemeList />}></Route>
        <Route path='/themeView' element={<ThemeView />}></Route>
        <Route path='/addPlace' element={<AddPlace />}></Route>
        <Route path='/login' element={<LoginForm /> }></Route>
        <Route path='/register' element={<RegisterForm/> }></Route>
        <Route path='/myPageMenu' element={<MyPageMenu/> }></Route>
        <Route path='/myPage' element={<MyPage/> }></Route>
        <Route path='/mySchedule' element={<MySchedule/> }></Route>

      </Routes>

    </div>
  );
}

export default App;
