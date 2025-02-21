import React from "react";
import CardRankingInfo from "@/app/invite/ranking-stats/CardRankingStats";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

const RankingStats = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-1">
      <CardRankingInfo
        icon={<MousePointerClick size={20} />}
        title="942"
        content="Acessos ao link"
      />
      <CardRankingInfo
        icon={<BadgeCheck size={20} />}
        title="875"
        content="Incrições feitas"
      />
      <CardRankingInfo
        icon={<Medal size={20} />}
        title="3°"
        content="Posição no ranking"
      />
    </div>
  );
};

export default RankingStats;
