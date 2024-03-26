import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { PiPersonFill } from "react-icons/pi";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandThumbsUp } from "react-icons/bs";

const MyPage = () => {
  return (
    <div className="MyPage">
      <header>
        <img src={process.env.PUBLIC_URL + `/images/logo.png`} />
        <span>My Page</span>
      </header>
      <section>
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div className="imformation">
            <nav className="imformation_nav1">
              <h2>Welcome to 하공대 관리학원 님</h2>
              <span>The best place for pension schem</span>
              <button>수정하기</button>
            </nav>
            <nav className="imformation_nav2">
              <div>
                <PiPersonArmsSpreadFill
                  color="white"
                  style={{ stroke: "gray", strokeWidth: "2" }}
                  className="imformation_nav2_img1"
                />
              </div>
              <PiPersonFill
                color="white"
                style={{ stroke: "gray", strokeWidth: "2" }}
                className="imformation_nav2_img2"
              />
            </nav>
          </div>
        </div>
      </section>
      <section>
        <nav className="profile_best">
          <aside className="profile">
            <h1>PROFILE</h1>
            <div className="profile_imformation">
              <BsPersonCircle size={100} />
              <div>
                <p>이름</p>
                <p>학번</p>
                <p>전공</p>
              </div>
              <div>
                <p>김광현</p>
                <p>L20338002</p>
                <p>시장마케팅</p>
              </div>
            </div>
          </aside>
          <aside className="best">
            <h1>BEST</h1>
            <div className="best_imformation">
              <article>
                <h2>
                  <IoIosHeartEmpty />
                  베스트 추천
                </h2>
                <div className="best_recommendation">
                  <div>
                    <span>날짜</span>
                    <span>제목</span>
                    <span>추천</span>
                  </div>
                  <div>
                    <span>23.12.23</span>
                    <span>날도 추운데 술?</span>
                    <span>28</span>
                  </div>
                </div>
              </article>
              <article>
                <h2>
                  <BsHandThumbsUp />
                  베스트 조회
                </h2>
                <div className="best_inquiry">
                  <div>
                    <span>날짜</span>
                    <span>제목</span>
                    <span>추천</span>
                  </div>
                  <div>
                    <span>24.01.13</span>
                    <span>공대 축구부 모집합니다.</span>
                    <span>42</span>
                  </div>
                </div>
              </article>
            </div>
          </aside>
        </nav>
      </section>
      <footer>
        <div className="latest">
          <a href="#">최신 글</a>|<a href="#">최신 댓글</a>
        </div>
        <div class="latest_writing">
          <div>
            <span>날짜</span>
            <span>종류</span>
            <span>제목</span>
            <span>댓글</span>
            <span>조회</span>
            <span>추천</span>
          </div>
          <div>
            <span>2023.12.11</span>
            <span>스터디</span>
            <span>같이 공부할까요?</span>
            <span>4</span>
            <span>14</span>
            <span>7</span>
          </div>
          <div>
            <span>2023.12.21</span>
            <span>취미</span>
            <span>날도 추운데 술?</span>
            <span>23</span>
            <span>39</span>
            <span>28</span>
          </div>
          <div>
            <span>2024.01.13</span>
            <span>활동</span>
            <span>봄학기 학생부 모집합니다.</span>
            <span>17</span>
            <span>42</span>
            <span>25</span>
          </div>
          <div>
            <span>2024.03.07</span>
            <span>운동</span>
            <span>같이 축구해요.</span>
            <span>12</span>
            <span>34</span>
            <span>21</span>
          </div>
        </div>
        <div className="latest_comment">
          <div>
            <span>날짜</span>
            <span>종류</span>
            <span>댓글 내용</span>
          </div>
          <div>
            <span>2023.12.11</span>
            <span>스터디</span>
            <span>어떤 공부 하시나요?</span>
          </div>
          <div>
            <span>2023.12.21</span>
            <span>취미</span>
            <span>저요 저 갈래요!</span>
          </div>
          <div>
            <span>2024.01.13</span>
            <span>활동</span>
            <span>누구한테 연락하면 되나요?</span>
          </div>
          <div>
            <span>2024.03.07</span>
            <span>운동</span>
            <span>내일 9시까지 서문으로 나와주세요.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyPage;
