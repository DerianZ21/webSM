import React from 'react';

function Section({ section }) { 
    return (
        <div className="main-sections">
            {section.map((item, index) => (
                <div key={index} className={`section ${index % 2 === 0 ? 'section-color1' : 'section-color2'}`}>
                    <div className={`card-section ${index % 2 === 0 ? 'card-section1' : 'card-section2'}`}>
                        <img src={item.url} alt={item.descripcion} />
                        <div className='text'>
                            <h1>{item.descripcion}</h1>
                            <p>{item.info}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Section;