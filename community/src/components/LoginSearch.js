import { useState } from "react";

const LoginSearch = () => {
  const [idName, setIdName] = useState();
  const [idClassNumber, setIdClassNumber] = useState();
  const [pwName, setPwName] = useState();
  const [pwClassNumber, setPwClassNumber] = useState();
  const [email, setEmail] = useState();

  return (
    <div className="LoginSearch">
      <header>
        <img src={process.env.PUBLIC_URL + `/images/logo.png`} />
      </header>
      <section>
        <div className="search_id">
          <p>아이디(이메일)찾기</p>
          <input
            type="text"
            placeholder="이름"
            value={idName}
            onChage={(e) => setIdName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="학번"
            value={idClassNumber}
            onChange={(e) => setIdClassNumber(e.target.value)}
          ></input>
          <button type="submit">아이디 찾기</button>
        </div>
        <div className="search_pw">
          <p>비밀번호 찾기</p>
          <input
            type="email"
            placeholder="아이디(이메일)"
            value={email}
            onChage={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="이름"
            value={pwName}
            onChage={(e) => setPwName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="학번"
            value={pwClassNumber}
            onChange={(e) => setPwClassNumber(e.target.value)}
          ></input>
          <button type="submit">비밀번호 찾기</button>
        </div>
      </section>
    </div>
  );
};

export default LoginSearch;
