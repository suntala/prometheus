import React from 'react';

function TextWithLineBreaks(props: any) {
  const textWithBreaks = props.text.split('\n').map((text: string, index: any) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ));

  return <div>{textWithBreaks}</div>;
}

export default TextWithLineBreaks;
