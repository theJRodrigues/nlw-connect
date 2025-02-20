import React from "react";
import { Copy, Link } from "lucide-react";
import CopyButton from "@/components/CopyButton";
import InputRoot from "@/components/InputRoot/InputRoot";
import InputField from "@/components/InputRoot/InputField";

const InvitePage = () => {
  return (
    <>
      <section>
        <div className="my-4 space-y-1">
          <h1 className="text-gray-100 text-heading-md md:text-heading-xl font-heading">
            Inscrição Confirmada
          </h1>
          <p className="text-gray-300 text-body-sm md:text-body-md">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-2 mb-2">
          <h2 className="text-gray-200 text-heading-sm font-heading">
            Indique e ganhe
          </h2>
          <p className="text-gray-300 text-body-sm md:text-body-md">
            Convide mais pessoas para o evento e concorra a prêmios exclusivos!
            É só compartilhar o link abaixo e acompanhar as inscrições:
          </p>
        </div>

        <InputRoot className="flex items-center justify-between gap-1 bg-gray-800 p-1 rounded-xl">
          <Link color="white" />
          <InputField readOnly defaultValue="devstage.com/codecraft-summit-2025/1289"/>
          <CopyButton>
            <Copy />
          </CopyButton>
        </InputRoot>
      </section>
    </>
  );
};

export default InvitePage;
