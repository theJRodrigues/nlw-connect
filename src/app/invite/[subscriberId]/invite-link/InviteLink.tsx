'use client'
import React from "react";

import { Copy, Link } from "lucide-react";
import CopyButton from "@/components/CopyButton";
import InputRoot from "@/components/InputRoot/InputRoot";
import InputField from "@/components/InputRoot/InputField";

interface InviteLinkProps{
  inviteLink: string
}

const InviteLink = ({inviteLink}: InviteLinkProps) => {
  const handleCopyLink = ()=>{
    navigator.clipboard.writeText(inviteLink)
  }
  return (
    <InputRoot className="flex w-full items-center gap-1 bg-gray-800 px-1 py-0.5 rounded-xl border border-gray-600">
      <Link color="white" />
      <InputField
        readOnly
        defaultValue={inviteLink}
      />
      <CopyButton onClick={handleCopyLink}>
        <Copy size={20} />
      </CopyButton>
    </InputRoot>
  );
};

export default InviteLink;
