import "./App.css";
import Main from "./components/Main";
import { useContext } from "react";
// css

import "./App.css";
import "./components/css/News.css";
import "../src/components/css/Home.css";
import "./components/css/TeacherAndStudents.css";
import "./components/css/Fillter.css";
import "./components/css/Comment.css";
import "./components/css/Profil.css";
import "./components/Profil Pages/Css/BalanceStyle.css";
import "./components/css/Room.css";
import "./components/css/LearingCenterRegister.css";
import "./components/css/Pictures.css";
import "./components/css/Reviev.css";
import "../src/components/css/Registratsiya.css";

// responsive css
import "./ResponsiveCss/HomeRes.css";
import "./ResponsiveCss/NewsMainRes.css";
import "./ResponsiveCss/FooterRes.css";
import "./ResponsiveCss/HeaderRes.css";
import "./ResponsiveCss/FillterRes.css";
import "./ResponsiveCss/TeacherAndHomeComments.css";
import "./ResponsiveCss/ProfilRes.css";
import "./ResponsiveCss/CenterRes.css";
import "./ResponsiveCss/RoomRes.css";
import "./ResponsiveCss/ProviteRoomRes.css";
import "./ResponsiveCss/RegisterREs.css";

// register pages
import Permission from "./components/Registratsiya/permission";
import ChoseType from "./components/Registratsiya/choosethetype";
import RegisterUchb from "./components/Registratsiya/resgistratsiyauchb";
import RegisterTeach from "./components/Registratsiya/registratsiyateach";
import { RegisterStud } from "./components/Registratsiya/registratsiyastud";
import ConfrimCode from "./components/Registratsiya/confirmationcode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfilPage } from "./components/Profil Pages/Profil/ProfilPage";
import { MyChat } from "./components/Profil Pages/ProfileMyChat/MyChat";
import { MyCalendar } from "./components/Profil Pages/MyCalendar/MyCalendar";
import { Balance } from "./components/Profil Pages/MyBalance/Balance";
import { PaidServices } from "./components/Profil Pages/PaidServices/PaidServices";
import { TransactionsPage } from "./components/Profil Pages/TransactionsPage/TransactionsPage";
import { Reviews } from "./components/Profil Pages/Reviews/Reviews";
import ScrollTop from "./ScrollTop";
import NewsMain from "./components/News/MainNews";
import OneNews from "./components/News/OneNews";
import CommentMain from "./components/Comment/Comments";
import CenterRoom from "./components/CenterRoom/LearingCenterRoom";
import PutProfil from "./components/Profil/PutProfil";
import Chat from "./components/Profil/Chat";
import Balanc from "./components/Profil/Balanc";
import Platnieservises from "./components/Profil/PlatnieServises";
import Transaksiya from "./components/Profil/Transaksiya";
import MyOtzif from "./components/Profil/MyOtzif";
import Pictures from "./components/Profil/Pictures";
import Edit from "./components/Profil/Edit";
import { Header } from "./components/Header/Header";
import { Context } from "./Context/Context";

import MainCenter from "../src/components/LearingCenterRegisterPage/MainCenter";
import LearingCenterChat from "./components/LearingCenterRegisterPage/LearingCenterChat";
import LearingBlance from "./components/LearingCenterRegisterPage/LearingBlance";
import LearingTeacher from "./components/LearingCenterRegisterPage/LearingTeacher";
import LearingPlatnie from "./components/LearingCenterRegisterPage/LearingPlatnie";
import LearingTransaksiya from "./components/LearingCenterRegisterPage/LearingTrasatsiya";
import LearingOtviz from "./components/LearingCenterRegisterPage/LearingOtviz";
import LearingEdit from "./components/LearingCenterRegisterPage/LearingEdit";
import ProviteRoom from "./components/ProviteRoom/PrivoteRoom";

export function App() {
  const { dark, setDark } = useContext(Context);

  return (
    // <ScrollTop />
    <div
      className="container"
      style={{ background: dark !== true ? "#F9F9F9" : "#593E69" }}
    >
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/profile" element={<ProfilPage />} />
        <Route path="/my-chat" element={<MyChat />} />
        <Route path="/my-calendar" element={<MyCalendar />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/paid-services" element={<PaidServices />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/NewsMain" element={<NewsMain />}></Route>
        <Route path="/OneNews/:id" element={<OneNews />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/Comment" element={<CommentMain />}></Route>
        {/* profil  */}
        <Route path="/MainProfil" element={<PutProfil />}></Route>
        <Route path="/Chat" element={<Chat />}></Route>
        <Route path="/Balanc" element={<Balanc />}></Route>
        <Route path="/PlatnieServises" element={<Platnieservises />}>
          {" "}
        </Route>
        <Route path="transanksiya" element={<Transaksiya />}>
          {" "}
        </Route>
        <Route path="/MyOtzif" element={<MyOtzif />}>
          {" "}
        </Route>
        <Route path="/Pictures" element={<Pictures />}></Route>
        <Route path="/Edit" element={<Edit />}></Route>
        {/* LearingCenterChat */}
        <Route path="/MainCenter" element={<MainCenter />}></Route>
        <Route
          path="/LearingCenterChat"
          element={<LearingCenterChat />}
        ></Route>
        <Route path="/LearingBlance" element={<LearingBlance />}>
          {" "}
        </Route>
        <Route path="/LearingTeacher" element={<LearingTeacher />}></Route>
        <Route path="/LearingPlatnie" element={<LearingPlatnie />}>
          {" "}
        </Route>
        <Route path="/LearingTransaksiya" element={<LearingTransaksiya />}>
          {" "}
        </Route>
        <Route path="/LearingOtviz" element={<LearingOtviz />}></Route>
        <Route path="/LearingEdit" element={<LearingEdit />}>
          {" "}
        </Route>

        {/* Room  */}
        <Route path="/CenterRoom" element={<CenterRoom />}>
          {" "}
        </Route>
        <Route path="/ProviteRoom/:id" element={<ProviteRoom />}></Route>
        <Route path="/RegisterUchb" element={<RegisterUchb />}>
          {" "}
        </Route>
        <Route path="/RegisterStud" element={<RegisterStud />}>
          {" "}
        </Route>
        <Route path="/RegisterTeach" element={<RegisterTeach />}>
          {" "}
        </Route>
        <Route path="/ConfrimCode" element={<ConfrimCode />}></Route>

        {/* register pages  */}
        <Route path="/Passwordrecovery" element={<RegisterStud />}></Route>
        <Route path="/Permission" element={<Permission />}>
          {" "}
        </Route>
        <Route path="/ChoseType" element={<ChoseType />}></Route>
      </Routes>
    </div>
  );
}

export default App;
