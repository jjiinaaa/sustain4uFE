import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Start from "./pages/Start";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Checklist1 from "./pages/Checklist1";
import Checklist2 from "./pages/Checklist2";
import Checklist3 from "./pages/Checklist3";
import Visa from "./pages/visa.js";
import GrandAttendance1 from "./pages/GrandAttendance1.js";
import Degree from "./pages/Degree.js";
import GrandAttendance2 from "./pages/GrandAttendance2.js";
import Koreanlevel from "./pages/Koreanlevel.js";
import Topik from "./pages/Topik.js";
import Kiiplevel from "./pages/Kiiplevel.js";
import Kiipscore from "./pages/Kiipscore.js";
import Sejong from "./pages/Sejong.js";
import Totaltime from "./pages/Totaltime.js";
import CannotJob from "./pages/CannotJob.js";
import UnpermittedMain from "./pages/UnpermittedMain.js";
import ProhibitedField from "./pages/ProhibitedField.js";
import ConductDistrubing from "./pages/ConductDistrubing.js";
import DetailConductDistrubing from "./pages/DetailConductDistrubing.js";
import Indirect from "./pages/Indirect.js";
import Exception from "./pages/Exception.js";
import Detailexception from "./pages/Detailexception.js";
import Detailexception6 from "./pages/Detailexception6.js";
import SpecialCase from "./pages/SpecialCase.js";
import DetailSpecialCase1 from "./pages/DetailSpecialCase1.js";
import DetailSpecialCase2 from "./pages/DetailSpecialCase2.js";
import DetailSpecialCase3 from "./pages/DetailSpecialCase3.js";

const GlobalStyle = createGlobalStyle`
  body, * {
    font-family: 'Pretendard';
  }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/main' element={<Main />} />
          {/* 세부기능 1 */}
          <Route path='/checklist1' element={<Checklist1 />} />
          <Route path='/checklist2' element={<Checklist2 />} />
          <Route path='/checklist3' element={<Checklist3 />} />
          <Route path='/visa' element={<Visa />} />
          <Route path='/grand-attendance1' element={<GrandAttendance1 />} />
          <Route path='/grand-attendance2' element={<GrandAttendance2 />} />
          <Route path='/degree' element={<Degree />} />
          <Route path='/koreanlevel' element={<Koreanlevel />} />
          <Route path='/topik' element={<Topik />} />
          <Route path='/kiiplevel' element={<Kiiplevel />} />
          <Route path='/kiipscore' element={<Kiipscore />} />
          <Route path='/sejong' element={<Sejong />} />
          <Route path='/totaltime' element={<Totaltime />} />
          <Route path='/cannot-job' element={<CannotJob />} />
          {/* 세부기능 2 */}
          <Route path='/unpermittedmain' element={<UnpermittedMain />} />
          <Route path='/prohibitedfield' element={<ProhibitedField />} />
          <Route path='/conductdistrubing' element={<ConductDistrubing />} />
          <Route
            path='detailconductdistrubing'
            element={<DetailConductDistrubing />}
          />
          <Route path='/indirect' element={<Indirect />} />
          <Route path='/exception' element={<Exception />} />
          <Route path='/detailexception' element={<Detailexception />} />
          <Route path='/detailexception6' element={<Detailexception6 />} />
          <Route path='/specialcase' element={<SpecialCase />} />
          <Route path='/detailspecialcase1' element={<DetailSpecialCase1 />} />
          <Route path='/detailspecialcase2' element={<DetailSpecialCase2 />} />
          <Route path='/detailspecialcase3' element={<DetailSpecialCase3 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
