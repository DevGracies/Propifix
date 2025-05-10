import { Card, Rating } from '@mui/material';
import React from 'react'
import ProfileAvatar from './ProfileAvatar';

const FeedbackCard = ({ratingValue,feedback, author, imageSrc, date}) => {
  return (
    <div
      className="!p-5 !max-w-[419px] !mx-auto !rounded-[12px] !shadow-[0px_13px_19px_0px_rgba(0,0,0,0.24)]
 !flex !flex-col justify-between !gap-4 h-[240px]"
    >
      <Rating
        precision={0.5}
        defaultValue={ratingValue}
        readOnly
        className="!text-[#5D14AD] size-[24px]"
      />
      <p className="text-[14px]">{feedback}</p>
      <div className="flex items-center gap-2">
        <ProfileAvatar
          className={"w-[60px] h-[60px]"}
          name={author}
          image={imageSrc}
        />
        <div className="flex flex-col justify-between h-full">
          <h3 className="text-[14px] font-bold capitalize">{author}</h3>
          <p className="text-[14px]">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard