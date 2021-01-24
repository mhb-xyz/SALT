import React from 'react';

interface Props {
  text: string;
  hook: string;
}

export const Footer: React.FC<Props> = ({text, hook}) => {
  return (
    <div className='footerText' data-test={hook}>&copy; {new Date().getFullYear()} | {text}</div>
  )
}
