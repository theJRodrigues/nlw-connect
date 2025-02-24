import Image from 'next/image'
interface CardRankingMedal{
    position: number | string,
    name: string | string,
    score: number | string,
    urlMedal: string
}

const CardRankingMedal = ({position, name, score, urlMedal}: CardRankingMedal) => {
  return (
    <article className='bg-gray-700 rounded-xl p-2 relative'>
        <div className='space-y-1'>
            <h3 className='text-body-md text-gray-300'><strong>{position}°</strong> | {name}</h3>
            <h4 className='text-gray-200 font-heading text-heading-md'>{score}</h4>
        </div>
        <figure className='absolute right-3 top-0'>
            <Image src={urlMedal} alt="medal" />
        </figure>
    </article>
  )
}

export default CardRankingMedal