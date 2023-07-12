import React from 'react';
import {Svg, Path} from 'react-native-svg';

const Person = props => {
  const {fill = '#CCCCCC', ...rest} = props;
  return (
    <Svg width="40" height="40" viewBox="0 0 55 54" fill="none" {...rest}>
      <Path
        d="M27.5 27C30.1853 27 32.7607 25.9333 34.6595 24.0345C36.5583 22.1356 37.625 19.5603 37.625 16.875C37.625 14.1897 36.5583 11.6143 34.6595 9.71554C32.7607 7.81674 30.1853 6.75 27.5 6.75C24.8147 6.75 22.2394 7.81674 20.3405 9.71554C18.4417 11.6143 17.375 14.1897 17.375 16.875C17.375 19.5603 18.4417 22.1356 20.3405 24.0345C22.2394 25.9333 24.8147 27 27.5 27ZM34.25 16.875C34.25 18.6652 33.5388 20.3821 32.273 21.648C31.0071 22.9138 29.2902 23.625 27.5 23.625C25.7098 23.625 23.9929 22.9138 22.727 21.648C21.4612 20.3821 20.75 18.6652 20.75 16.875C20.75 15.0848 21.4612 13.3679 22.727 12.102C23.9929 10.8362 25.7098 10.125 27.5 10.125C29.2902 10.125 31.0071 10.8362 32.273 12.102C33.5388 13.3679 34.25 15.0848 34.25 16.875ZM47.75 43.875C47.75 47.25 44.375 47.25 44.375 47.25H10.625C10.625 47.25 7.25 47.25 7.25 43.875C7.25 40.5 10.625 30.375 27.5 30.375C44.375 30.375 47.75 40.5 47.75 43.875ZM44.375 43.8615C44.3716 43.0312 43.8553 40.5337 41.567 38.2455C39.3665 36.045 35.2254 33.75 27.5 33.75C19.7712 33.75 15.6335 36.045 13.433 38.2455C11.1448 40.5337 10.6318 43.0312 10.625 43.8615H44.375Z"
        fill={fill}
      />
    </Svg>
  );
};

export default Person;
