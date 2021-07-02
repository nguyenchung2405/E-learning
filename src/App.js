import { Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Home from './Pages/Home/Home';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import Detail from './Pages/Detail/Detail';
import KhoaHoc from './Pages/KhoaHoc/KhoaHoc';
import LoginTemplate from './Templates/LoginTemplate/LoginTemplate';
import DangKy from './Pages/DangKy/DangKy';
import DangNhap from './Pages/DangNhap/DangNhap';
import Profile from './Pages/Profile/Profile';

export const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path='/detail/:maKhoaHoc' component={Detail} />
        <HomeTemplate path='/khoahoc/:tenKhoaHoc' component={KhoaHoc} />
        <HomeTemplate path='/profile' component={Profile} />
        <LoginTemplate path="/signup" component={DangKy} />
        <LoginTemplate path="/signin" component={DangNhap} />


        <HomeTemplate path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
