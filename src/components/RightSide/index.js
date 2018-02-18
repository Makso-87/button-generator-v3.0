import React from 'react';

export const preview = (
    <div>
        <h2>Предварительный просмотр</h2>
        <div className='field'>
            <div className='button'>
                <a className='custom' href='#'></a>
            </div>
        </div>
    </div>
);

export const codeField = (
    <div>
        <h3 className='code'>Код для вставки</h3>
        <div className='field'>
            <div id='container'>
                <p className='source'></p>
                <p className='source1'></p>
                <p>}</p>
                <p className='source2'></p>
                <p>}</p>
            </div>
        </div>
    </div>
);


