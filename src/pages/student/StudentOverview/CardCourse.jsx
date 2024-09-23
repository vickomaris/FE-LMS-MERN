import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
export default function CardCourse({
  imageUrl = '/assets/images/thumbnails/th-1.png',
  id = '1',
  category = 'Programming',
  title = 'Mastering React',
}) {
  return (
    <div className="card flex items-center gap-5">
      <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
      </div>
      <div className="w-full">
        <Link
          to={`/student/detail-courses/${id}`}
          className="font-bold text-xl leading-[30px] line-clamp-1"
        >
          {title}
        </Link>
        <div className="flex items-center gap-[6px] mt-[6px]">
          <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
          <p className="text-[#838C9D]">{category}</p>
        </div>
      </div>
    </div>
  );
}

CardCourse.propTypes = {
  imageUrl: Proptypes.string,
  id: Proptypes.string,
  category: Proptypes.string,
  title: Proptypes.string,
};
