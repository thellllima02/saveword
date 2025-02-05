import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f9f9f9;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 300px;
`;

export const Label = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #555;
  cursor: pointer;
`;

export const Button = styled.button`
  background: #8bc34a;
  color: black;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  
  &:hover {
    background: #7cb342;
  }
`;

export const GoBackText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;
