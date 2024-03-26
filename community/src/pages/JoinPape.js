import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

// react-icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLock } from "react-icons/tb";
import { TbLockCheck } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { TbSchool } from "react-icons/tb";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IoLogoWechat } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { SiNaver } from "react-icons/si";

const JoinPage = () => {
  const {
    register,
    watch,
    formState: { errors, isValid, dirtyFields },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const password = useRef();
  password.current = watch("pw");

  const [eye, setEye] = useState(false);
  const [eyeCheck, setEyeCheck] = useState(false);
  const [showPw, setShowPw] = useState({
    type: "password",
    visible: false,
  });
  const [showPwCheck, setShowPwCheck] = useState({
    type: "password",
    visible: false,
  });

  const handleEye = () => {
    setEye(!eye);
  };

  const handleEyeCheck = () => {
    setEyeCheck(!eyeCheck);
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

  const handleShowPwChenck = () => {
    setShowPwCheck(() => {
      if (!showPwCheck.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const email = watch("email");
  const idRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const emailSubmit = idRegex.test(email) ? true : false;

  const nickname = watch("nickname");
  const nicknameRegex = /^[0-9a-zA-Zㄱ-힣]{1,6}$/i;
  const nicknameSubmit = nicknameRegex.test(nickname) ? true : false;

  return (
    <div className="JoinPage">
      <header>
        <img src={process.env.PUBLIC_URL + `/images/logo.png`} />
      </header>
      <section>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="section1">
            <div className="join_id_pw">
              <div className="join_image">
                <MdOutlineEmail size={30} />
              </div>
              <input
                className="email"
                type="email"
                style={errors.email && { borderColor: "red" }}
                placeholder="이메일"
                {...register("email", {
                  required: "•이메일: 필수 정보입니다.",
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                    message: "•이메일 형식에 맞지 않습니다.",
                  },
                })}
              />
              <button
                className="join_check"
                type="button"
                style={{
                  borderColor: emailSubmit ? "#5db1d3c9" : "#b7b7b7",
                  color: emailSubmit ? "#5db1d3c9" : "#b7b7b7",
                  fontWeight: emailSubmit ? "bold" : "",
                }}
              >
                인증
              </button>
            </div>
            <div className="join_id_pw">
              <div className="join_image">
                <TbLock size={30} />
              </div>
              <input
                className="pw"
                type={showPw.type}
                style={errors.pw && { borderColor: "red" }}
                placeholder="비밀번호"
                {...register("pw", {
                  required: "•비밀번호: 필수 정보입니다.",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,16}$/,
                    message:
                      "•비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.",
                  },
                })}
              />
              <div
                className="join_eyes"
                onClick={() => {
                  handleEye();
                  handleShowPw();
                }}
              >
                {eye && showPw.visible ? (
                  <FaEyeSlash size={25} className="join_eye" />
                ) : (
                  <FaEye size={25} className="join_eye" />
                )}
              </div>
            </div>
            <div className="join_id_pw">
              <div className="join_image">
                <TbLockCheck size={30} />
              </div>
              <input
                className="pw_check"
                type={showPwCheck.type}
                style={errors.pwCheck && { borderColor: "red" }}
                placeholder="비밀번호 확인"
                {...register("pwCheck", {
                  required: "•비밀번호 확인: 필수 정보입니다.",
                  validate: (value) => value === password.current,
                })}
              />
              <div
                className="join_eyes"
                onClick={() => {
                  handleEyeCheck();
                  handleShowPwChenck();
                }}
              >
                {eyeCheck && showPwCheck.visible ? (
                  <FaEyeSlash size={25} className="join_eye" />
                ) : (
                  <FaEye size={25} className="join_eye" />
                )}
              </div>
            </div>
          </div>
          {errors.email && <p id="error_message">{errors.email.message}</p>}
          {errors.pw && <p id="error_message">{errors.pw.message}</p>}
          {errors.pwCheck && <p id="error_message">{errors.pwCheck.message}</p>}
          {errors.pwCheck && errors.pwCheck.type === "validate" && (
            <p id="error_message">
              •비밀번호 확인: 비밀번호가 일치하지 않습니다.
            </p>
          )}
          <div className="section2">
            <div className="join_impormation">
              <div className="join_image">
                <FaRegUserCircle size={30} />
              </div>
              <input
                className="nickname"
                type="text"
                placeholder="닉네임"
                style={errors.nickname && { borderColor: "red" }}
                {...register("nickname", {
                  required: "•닉네임: 필수 정보입니다.",
                })}
              />
              <button
                className="join_check"
                type="button"
                style={{
                  borderColor: nicknameSubmit ? "#5db1d3c9" : "#b7b7b7",
                  color: nicknameSubmit ? "#5db1d3c9" : "#b7b7b7",
                  fontWeight: nicknameSubmit ? "bold" : "",
                }}
              >
                중복 확인
              </button>
            </div>
            <div className="join_impormation">
              <div className="join_image">
                <FaRegUser size={30} />
              </div>
              <input
                type="text"
                placeholder="이름"
                style={errors.name && { borderColor: "red" }}
                {...register("name", {
                  required: "•이름: 필수 정보입니다.",
                  pattern: {
                    value: /^[ㄱ-힣]{1,5}$/i,
                    message: "•이름: 2~5자의 한글만 사용해 주세요.",
                  },
                })}
              />
            </div>
            <div
              className="join_impormation"
              style={errors.gender && { borderColor: "red" }}
            >
              <div className="join_impormation_gender">
                <div>
                  <input
                    type="radio"
                    id="gender1"
                    name="gender"
                    {...register("gender", {
                      required: "•성별: 필수 정보입니다.",
                    })}
                  />
                  <label htmlFor="gender1">
                    <span
                      style={
                        errors.gender && {
                          borderColor: "red",
                          color: "red",
                        }
                      }
                    >
                      남자
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="gender2"
                    name="gender"
                    {...register("gender", {
                      required: "•성별: 필수 정보입니다.",
                    })}
                  />
                  <label htmlFor="gender2">
                    <span
                      style={
                        errors.gender && {
                          borderColor: "red",
                          color: "red",
                        }
                      }
                    >
                      여자
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="join_impormation">
              <div className="join_image">
                <LuSchool size={30} />
              </div>
              <input
                type="text"
                placeholder="학번"
                style={errors.classNumber && { borderColor: "red" }}
                {...register("classNumber", {
                  required: "•학번: 필수 정보입니다.",
                  pattern: {
                    value: /^[A-Za-z0-9]{1,15}$/i,
                    message: "•학번: 영문 대/소문자, 숫자를 사용해 주세요.",
                  },
                })}
              />
            </div>
            <div className="join_impormation">
              <div className="join_image">
                <TbSchool size={30} />
              </div>
              <input
                className="major"
                type="text"
                placeholder="전공"
                style={errors.major && { borderColor: "red" }}
                {...register("major", {
                  required: "•전공: 필수 정보입니다.",
                  pattern: {
                    value: /^[ㄱ-힣]{1,15}$/i,
                    message: "•전공: 한글로 입력해 주세요.",
                  },
                })}
              />
            </div>
          </div>
          {errors.nickname && (
            <p id="error_message">{errors.nickname.message}</p>
          )}
          {errors.name && <p id="error_message">{errors.name.message}</p>}
          {errors.gender && <p id="error_message">{errors.gender.message}</p>}
          {errors.classNumber && (
            <p id="error_message">{errors.classNumber.message}</p>
          )}
          {errors.major && <p id="error_message">{errors.major.message}</p>}
          <div className="join_submit">
            <button
              type="submit"
              style={{ backgroundColor: isValid ? "#5db1d3c9" : "#5db1d37a" }}
            >
              가입하기
            </button>
          </div>
          <div className="easy_join">
            <div className="easy_join_text">간편 로그인</div>
            <div className="easy_join_img">
              <RiKakaoTalkFill size={40} className="easy_join_img_kakao" />
              <IoLogoWechat size={40} className="easy_join_img_wechat" />
              <SiNaver size={30} className="easy_join_img_naver" />
              <FaGoogle size={35} className="easy_join_img_google" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default JoinPage;
