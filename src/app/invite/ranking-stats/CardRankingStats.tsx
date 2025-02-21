import React, { ReactNode } from "react";

interface CardRankingInfoProps {
  icon: ReactNode;
  title: string;
  content: string;
}

const CardRankingInfo = ({ icon, title, content }: CardRankingInfoProps) => {
  return (
    <article className="bg-gray-700 rounded-xl px-2 pt-[28px] pb-2 md:min-w-[180px] relative text-center space-">
      <figure className="text-purple absolute top-1 left-1 size-2">
        {icon}
      </figure>

      <h1 className="font-heading text-heading-md text-gray-200">{title}</h1>
      <p className="text-gray-300 text-body-sm">{content}</p>
    </article>
  );
};

export default CardRankingInfo;
