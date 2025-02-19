import Button from "@/components/Button";
import CopyButton from "@/components/CopyButton";
import InputField from "@/components/InputRoot/InputField";
import InputIcon from "@/components/InputRoot/InputIcon";
import InputRoot from "@/components/InputRoot/InputRoot";
import { ArrowRight, Copy, User } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* <Button>
        Confirmar
        <ArrowRight />
      </Button>

      <CopyButton>
        <Copy />
      </CopyButton> */}

      {/* Essa é uma maneira mais simples de criar um componente, porém pouco editável
      <Input type="text" placeholder="Nome Completo">
        <User/>
      </Input> */}

      {/*Composition Pattern - Quebrar o componente em mais componentes, sendo o InputRoot o container principal, onde cada item será um children, sendo mais dinâmico*/}
      {/* <InputRoot>
        <InputIcon>
          <User />
        </InputIcon>
        <InputField placeholder="Nome" type="text" />
      </InputRoot> */}
    </main>
  );
}
