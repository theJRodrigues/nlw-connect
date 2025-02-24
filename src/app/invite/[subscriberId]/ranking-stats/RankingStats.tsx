import React from "react";
import CardRankingInfo from "./CardRankingStats";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";
import { getSubscriberInviteClicks, getSubscriberInviteCount, getSubscriberRankingPosition } from "@/http/api";

interface RankingStatsProps{
  subscriberId: string
}
const RankingStats = async ({subscriberId}:RankingStatsProps) => {
  const {count: accessCount} = await getSubscriberInviteClicks(subscriberId)
  const {count: inviteCount} = await getSubscriberInviteCount(subscriberId)
  const {position} = await getSubscriberRankingPosition(subscriberId)
  
  return (
    <div className="flex flex-col md:flex-row justify-between gap-1">
      <CardRankingInfo
        icon={<MousePointerClick size={20} />}
        stats={accessCount}
        content={"Acessos ao link"}
      />
      <CardRankingInfo
        icon={<BadgeCheck size={20} />}
        stats={inviteCount}
        content="Incrições feitas"
      />
      <CardRankingInfo
        icon={<Medal size={20} />}
        stats= {position ? `${position}°` : '-'}
        content="Posição no ranking"
      />
    </div>
  );
};

export default RankingStats;
