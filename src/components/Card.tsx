import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

const Card = ( {venueName, imgSrc} : {venueName : string, imgSrc : string}) => {
  return (
    <InteractiveCard contentName = {venueName}>
      <div className='w-full h-[70%] relative rounded-t-lg'>
        <Image src={imgSrc} alt="The Bloom Pavilion" fill={true} className='object-cover rounded-t-lg' />
      </div>
      <div className = 'w-full h-[30%] p-[10px] text-2xl text-black'>{venueName}</div>
    </InteractiveCard>
  );
};

export default Card;