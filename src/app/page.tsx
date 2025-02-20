import Image from "next/image";
import logo from "../assets/logo.svg";
import { Radio } from "lucide-react";
import RegistrationForm from "@/components/registration-form/RegistrationForm";

export default function Home() {
  return (
    <>
      <h1 className="my-3 md:my-5 text-gray-100 text-heading-lg md:text-heading-hg font-heading flex flex-col not-md:text-center">
        <span className="text-blue">CodeCraft</span>Summit 2025
      </h1>

      <section className=" text-justify  flex flex-col md:flex-row gap-3">
        <div className="bg-gray-700 border-2 border-gray-600 rounded-xl max-w-[665] p-3">
          <hgroup className="flex justify-between">
            <h2 className="text-gray-200 font-heading text-heading-sm">
              Sobre o Evento
            </h2>
            <span className="text-body-xs text-purple flex gap-0.5 items-center ">
              <Radio /> AO VIVO
            </span>
          </hgroup>
          <p className="text-gray-300 text-body-md my-2">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
          </p>
          <strong className="text-gray-300 text-body-md">
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </strong>
        </div>
        <div className="bg-gray-700 p-3 flex flex-col gap-3 md:min-w-28">
          <h2 className="text-gray-200 font-heading text-heading-sm">
            Inscrição
          </h2>
          <RegistrationForm />
        </div>
      </section>
    </>
  );
}
