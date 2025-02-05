import React, { useState } from "react";
import { Container, Input, Button, IconWrapper, Form, Label, GoBackText } from "./styles";
import { FaKeyboard, FaLink, FaUserPlus, FaEye, FaEyeSlash, FaRegStickyNote } from "react-icons/fa";

const SavePassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <h1>Save Password</h1>
      <Form>
        <Label>
          <Input type="text" placeholder="Title" />
          <IconWrapper><FaKeyboard /></IconWrapper>
        </Label>

        <Label>
          <Input type="text" placeholder="Link" />
          <IconWrapper><FaLink /></IconWrapper>
        </Label>

        <Label>
          <Input type="text" placeholder="Email/User Name" />
          <IconWrapper><FaUserPlus /></IconWrapper>
        </Label>

        <Label>
          <Input type={showPassword ? "text" : "password"} placeholder="Password" />
          <IconWrapper onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </IconWrapper>
        </Label>

        <Label>
          <Input type="text" placeholder="Description" />
          <IconWrapper><FaRegStickyNote /></IconWrapper>
        </Label>

        <Button>Accepted</Button>
      </Form>

      <GoBackText>TO GO BACK</GoBackText>
    </Container>
  );
};

export default SavePassword;
