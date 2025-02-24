import React from "react";

import CardRankingMedal from "./CardRankingMedal";

import gold from "@/assets/medal-gold.svg";
import silver from "@/assets/medal-silver.svg";
import cooper from "@/assets/medal-cooper.svg";
import { getRanking } from "@/http/api";

const RankingMedals = async () => {
  // const {ranking}  = await getRanking();
  return (
    <section className="ml-auto w-full md:max-w-44 space-y-1 mt-4">
      <h1>{}</h1>
      <h2 className="text-heading-sm font-heading text-gray-200 ">
        Ranking de indicações
      </h2>
      <div className="flex flex-col justify-between gap-1">
        {/* {ranking?.map((item, index) => {
          const rankingPosition = index + 1
          return(
            <CardRankingMedal
            key={item.id}
            position={rankingPosition}
            name={item ? item.name : '-'}
            score={item ? item.score : '-'}
            urlMedal={gold}
          />
          )})} */}
          <CardRankingMedal 
          position="1"
          name="André Souza"
          score={1128}
          urlMedal={gold}/>
           <CardRankingMedal 
          position="2"
          name="Melissa Loures"
          score={928}
          urlMedal={silver}/>

           <CardRankingMedal 
          position="3"
          name="Rodrigo Gonçalves"
          score={875}
          urlMedal={cooper}/>
      </div>
    </section>
  );
};

export default RankingMedals;
