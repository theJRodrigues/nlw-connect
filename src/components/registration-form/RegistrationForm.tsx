import React from "react";
import InputRoot from "../InputRoot/InputRoot";
import InputIcon from "../InputRoot/InputIcon";
import { ArrowRight, Mail, User } from "lucide-react";
import InputField from "../InputRoot/InputField";
import Button from "../Button";

interface IFormProps {
  name: string;
  email: string;
}
const RegistrationForm = () => {
  return (
    <form className="space-y-3 flex flex-col justify-between h-full">
      <fieldset className="space-y-1">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField placeholder="Nome Completo" type="text" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField placeholder="E-mail" type="text" />
        </InputRoot>
      </fieldset>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
};

export default RegistrationForm;
