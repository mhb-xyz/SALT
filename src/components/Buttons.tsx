import React from 'react';

interface Props {
    data: Array<Data>;
}

export const Buttons: React.FC<Props> = ({data}) => {  
    return (        
        <div className='buttonsList'>
            { data.map((value, index) => 
                { return <button key={index} data-test={value.hook}>
                    <a href={value.site} target="_blank" rel="noreferrer">{value.name}</a>
                </button>
                }
            )
            } 
        </div>
    )
} 
