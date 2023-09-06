import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import colors from '../../../styles/colors';

const ExperienceCard = ({ experience }): JSX.Element => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: `${colors.primary}`,
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: `7px solid  border-primary` }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full cursor-pointer'>
            <a href={experience.websiteUrl} target="_blank">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[85%] mx-auto h-[90%] object-cover rounded-full'
            />
            </a>
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point: string, i: number) => (
            <li
              key={`experience-point-${i}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };

export default ExperienceCard