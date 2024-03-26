import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


// react-icons
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IoLogoWechat } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { SiNaver } from "react-icons/si";

const LoginPage = () => {
  const emailRef = useRef();
  const pwRef = useRef();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [eye, setEye] = useState(false);
  const [showPw, setShowPw] = useState({
    type: "password",
    visible: false,
  });

  const handleEye = () => {
    setEye(!eye);
  };

  const handleShowPw = () => {
    setShowPw(() => {
      if (!showPw.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  const handleSubmit = () => {
    if (email.length < 5) {
      emailRef.current.focus();
      return;
    } else if (pw.length < 5) {
      pwRef.current.focus();
      return;
    }
  };


  const navigate = useNavigate();

  return (
    <div className="loginPage">
      <header>
        <img src={process.env.PUBLIC_URL + `/images/logo.png`} />
      </header>
      <section>
        <div className="login_id_pw">
          <FaUser size={30} className="login_user" />
          <input
            className="login_input"
            type="email"
            name="email"
            placeholder="이메일"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login_id_pw">
          <FaLock size={30} className="login_user" />
          <input
            className="login_input"
            type={showPw.type}
            name="password"
            placeholder="비밀번호"
            ref={pwRef}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <div
          onClick={() => {
            handleEye();
            handleShowPw();
          }}
        >
          {eye && showPw.visible ? (
            <FaEyeSlash size={25} className="login_eye" />
          ) : (
            <FaEye size={25} className="login_eye" />
          )}
        </div>
        <div className="auto_search">
          <div className="auto_login">
            <label>
              <input type="checkbox" />
              <span> 자동 로그인</span>
            </label>
          </div>
          <div className="search_login">
            <a onClick={() => navigate("/login_search")} >{"아이디∙비밀번호 찾기 >"}</a>
          </div>
        </div>
        <div className="login_join">
          <button onClick={handleSubmit}>로그인</button>
          <button onClick={() => navigate("/join")}>회원가입</button>
        </div>
        <div className="easy_login">
          <div className="easy_login_text">간편 로그인</div>
          <div className="easy_login_img">
            <RiKakaoTalkFill size={40} className="easy_login_img_kakao" />
            <IoLogoWechat size={40} className="easy_login_img_wechat" />
            <SiNaver size={30} className="easy_login_img_naver" />
            <FaGoogle size={35} className="easy_login_img_google" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
