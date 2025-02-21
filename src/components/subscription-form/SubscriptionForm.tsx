"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ArrowRight, Mail, User } from "lucide-react";

import InputRoot from "../InputRoot/InputRoot";
import InputIcon from "../InputRoot/InputIcon";
import InputField from "../InputRoot/InputField";
import Button from "../Button";

const SubscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z
    .string()
    .min(2, "Digite seu email Completo")
    .email("Digite um email válido"),
});

type SubscriptionFormSchema = z.infer<typeof SubscriptionSchema>

const SubscriptionForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<SubscriptionFormSchema>({ resolver: zodResolver(SubscriptionSchema) });

  const onSubscribe = (data: SubscriptionFormSchema) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="space-y-3 flex flex-col justify-between h-full"
    >
      <fieldset className="space-y-1">
        <fieldset>
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              placeholder="Nome Completo"
              type="text"
              {...register("name")}
            />
          </InputRoot>
          {errors.name && <p>teste</p>}
        </fieldset>
        <fieldset>
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              placeholder="E-mail"
              type="text"
              {...register("email")}
            />
          </InputRoot>
          {errors.email && <p>teste</p>}
        </fieldset>
      </fieldset>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
};

export default SubscriptionForm;
