import React from 'react';

export default function SeriesHeader({title = "Series"}: any) {
  return (
    <div>
      <hr />
      <h1 className='title'>{title}</h1>
      <hr />
    </div>
  );
}
