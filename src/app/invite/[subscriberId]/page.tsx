import React from "react";

import RankingStats from "./ranking-stats/RankingStats";
import RankingMedals from "./ranking-medals/RankingMedals";
import InviteLink from "./invite-link/InviteLink";

interface InvitePageProps{
  params: Promise<{subscriberId: string}>
}

const InvitePage = async (props: InvitePageProps) => {
  const {subscriberId} = await props.params

  const inviteLink= `http://localhost:3333/invites/${subscriberId}`
  return (
    <div className="flex flex-col md:flex-row md:justify-between py-4">
      <section className="md:w-full md:max-w-58 flex flex-col justify-between space-y-1">
        <div className="space-y-1">
          <h1 className="text-gray-100 text-heading-md md:text-heading-xl font-heading">
            Inscrição Confirmada
          </h1>
          <p className="text-gray-300 text-body-sm md:text-body-md">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="text-gray-200 text-heading-sm font-heading">
            Indique e ganhe
          </h2>
          <p className="text-gray-300 text-body-sm md:text-body-md">
            Convide mais pessoas para o evento e concorra a prêmios exclusivos!
            É só compartilhar o link abaixo e acompanhar as inscrições:
          </p>
        </div>
        <InviteLink inviteLink={inviteLink} />
        <RankingStats subscriberId={subscriberId}/>
      </section>
      <RankingMedals />
    </div>
  );
};

export default InvitePage;
