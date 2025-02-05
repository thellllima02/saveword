import React, { useState } from "react";
import { Container, Input, Button, IconWrapper, Form, Label, GoBackText } from "./styles";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Container>
      <h1>Register</h1>
      <Form>
        <Label>
          <Input type="text" placeholder="User" />
          <IconWrapper><FaUser /></IconWrapper>
        </Label>

        <Label>
          <Input type={showPassword ? "text" : "password"} placeholder="Password" />
          <IconWrapper onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </IconWrapper>
        </Label>

        <Label>
          <Input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm PassWord" />
          <IconWrapper onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </IconWrapper>
        </Label>

        <Label>
          <Input type="email" placeholder="Email" />
          <IconWrapper><FaEnvelope /></IconWrapper>
        </Label>

        <Button>SIGN UP</Button>
      </Form>

      <GoBackText>TO GO BACK</GoBackText>
    </Container>
  );
};

export default Register;
