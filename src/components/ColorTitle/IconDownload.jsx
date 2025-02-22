// import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

const IconDownload = ({ handleDownload }) => {
  return (
    <Wrapper className="download" onClick={handleDownload}>
      <svg
        t="1568731641905"
        className="icon"
        viewBox="0 0 1047 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1446"
        width="32"
        height="32"
      >
        <path
          d="M523.987449 0a42.759353 42.759353 0 0 0-42.759353 42.759353v498.158822L301.663529 361.353608a43.500845 43.500845 0 0 0-60.555153 0 42.759353 42.759353 0 0 0 0 60.431572l227.020033 227.267198a79.092445 79.092445 0 0 0 111.223751 0l227.514362-227.143616a42.635771 42.635771 0 0 0 0-60.555154 42.882935 42.882935 0 0 0-60.555153 0L566.870384 540.918175V42.759353A42.882935 42.882935 0 0 0 523.987449 0z"
          fill="#ffffff"
          p-id="1447"
        ></path>
        <path
          d="M860.871832 120.245233a42.882935 42.882935 0 1 0 0 85.642288 101.584359 101.584359 0 0 1 101.460777 101.584359v529.301473a101.584359 101.584359 0 0 1-101.460777 101.584359H187.226647a101.707941 101.707941 0 0 1-101.584359-101.584359V307.47188a101.707941 101.707941 0 0 1 101.584359-101.584359 42.882935 42.882935 0 0 0 0-85.642288A187.473811 187.473811 0 0 0 0 307.47188v529.301473a187.473811 187.473811 0 0 0 187.226647 187.226647h673.645185A187.350229 187.350229 0 0 0 1047.974897 836.773353V307.47188A187.350229 187.350229 0 0 0 860.871832 120.245233z"
          fill="#ffffff"
          p-id="1448"
        ></path>
      </svg>
    </Wrapper>
  );
};

export default IconDownload;
