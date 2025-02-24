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
// import { subscribeToEvent } from "@/http/api";
import { useRouter, useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const SubscriptionSchema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .min(2, "Digite seu nome completo"),
  email: z
    .string()
    .min(1, "O email é obrigatório")
    .min(2, "Digite seu email completo")
    .email("Digite um email válido"),
});

type SubscriptionFormSchema = z.infer<typeof SubscriptionSchema>;

const SubscriptionForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionFormSchema>({
    resolver: zodResolver(SubscriptionSchema),
  });

  // const onSubscribe = async ({ name, email }: SubscriptionFormSchema) => {
  //   const referrer = searchParams.get("referrer");

  //   // const { subscriberId } = await subscribeToEvent({ name, email, referrer });
  //   router.push(`/invite/${subscriberId}`);
  // };

  const onSubscribe =  () => {
    const subscriberId = uuidv4()
    router.push(`/invite/${subscriberId}`);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="space-y-3 flex flex-col justify-between h-full"
    >
      <fieldset className="space-y-1">
        <fieldset>
          <InputRoot error={errors.name && true}>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              placeholder="Nome Completo"
              type="text"
              {...register("name")}
            />
          </InputRoot>
          {errors.name && (
            <p className="text-body-xs text-danger">{errors.name.message}</p>
          )}
        </fieldset>
        <fieldset>
          <InputRoot error={errors.email && true}>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              placeholder="E-mail"
              type="text"
              {...register("email")}
            />
          </InputRoot>
          {errors.email && (
            <p className="text-body-xs text-danger">{errors.email.message}</p>
          )}
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
