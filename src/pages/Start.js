import React from "react";
import styled from "styled-components";
import plane from "../assets/image/plane.svg";
import googleLogo from "../assets/image/googleLogo.svg";
import { useNavigate } from "react-router-dom";
import pb from "../services/pb";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SchoolImgBox = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const SchoolImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SchoolTitle = styled.h1`
  font-weight: 400;
  color: #5c5b5b;
  text-align: center;
  margin: 0 auto 34px;

  @media screen and (max-width: 767px) {
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LoginBox = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 72.8%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;

// Google 로그인 버튼 스타일
const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  margin: 0 auto;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-size: 0.8rem; //
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: #5c5b5b;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0 8px; /* 텍스트 좌우 여백 설정 */

  &:hover {
    background-color: #f7f8f9;
  }

  &:active {
    background-color: #e8e9ea;
  }

  img {
    width: 18px; /* 로고 크기 */
    height: 18px;
    margin-right: 24px; /* 로고와 텍스트 사이 간격 */
  }
`;

function Start() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      // 구글 OAuth2 로그인
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      console.log("Google login successful");

      // 로그인한 사용자 정보 가져오기
      const currentUser = pb.authStore.model;

      if (!currentUser) {
        console.error("No logged-in user found");
        return;
      }

      // PocketBase에서 사용자 데이터 조회
      const userRecord = await pb.collection("users").getFirstListItem(
        `id="${currentUser.id}"` // 현재 로그인한 사용자 ID로 필터링
      );

      // 사용자 데이터 확인
      const { name, address, birth } = userRecord;

      if (!name || !address || !birth) {
        // name, address, birth 값이 없으면 /signup 페이지로 이동
        navigate("/signup");
      } else {
        // 값이 모두 존재하면 /main 페이지로 이동
        navigate("/main");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <div className='App'>
      <Container>
        <SchoolImgBox>
          <SchoolImg src={plane} alt='INHA UNIVERSITY LOGO' />
        </SchoolImgBox>
        <SchoolTitle>
          JOB SEARCH FOR <br></br> INTERNATIONAL STUDENT
        </SchoolTitle>
        <LoginBox>
          <GoogleLoginButton
            onClick={() => {
              handleGoogleLogin();
            }}
          >
            <img src={googleLogo} alt='Google Logo' />
            Login In with Google
          </GoogleLoginButton>
        </LoginBox>
      </Container>
    </div>
  );
}

export default Start;
