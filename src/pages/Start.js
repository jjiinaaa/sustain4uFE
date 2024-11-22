import React from "react";
import styled from "styled-components";
import plane from "../assets/image/plane.svg";
import { useNavigate } from "react-router-dom";
import pb from "../services/pb";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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

const LoginButton = styled.button`
  width: 100%;
  background-color: #005bac;
  font-weight: 700;
  color: white;
  border-radius: 100px;
  border: none;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    padding: 13px 0;
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    padding: 13px 0;
    font-size: 1rem;
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
          <LoginButton onClick={handleGoogleLogin}>
            Sign in with Google{" "}
          </LoginButton>
        </LoginBox>
      </Container>
    </div>
  );
}

export default Start;
