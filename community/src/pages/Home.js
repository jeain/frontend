import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <button onClick={() => navigate("/login")}>로그인</button>
      <button onClick={() => navigate("/join")}>회원가입</button>
      <button onClick={() => navigate("/mypage")}>마이페이지</button>
    </div>
  );
};

export default Home;
