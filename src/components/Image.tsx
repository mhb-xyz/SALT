import React from 'react';

interface Props {
  pic: string;
  title: string;
  hook: string;
}

export const Image: React.FC<Props> = ({pic, title, hook}) => {
  return (
    <div className='imgAreaContainer'> 
      <div className='imgContainer'>
        <img data-test={hook} src={pic} alt={title} />
      </div>
    </div>
  )
}
