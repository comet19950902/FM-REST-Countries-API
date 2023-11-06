import { styled } from "styled-components";

interface H1Props {
  bold?: boolean;
}

interface H4Props {
  name?: boolean;
  bold?: boolean;
}

interface H2Props {
  extra?: boolean;
}

export const H1 = styled.h1<H1Props>`
  font-size: 32px;
  margin: 0;
  letter-spacing: 0.02rem;
  font-weight: ${(props) => (props.bold ? "900" : "300")};
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin: 0;
  letter-spacing: 0.02rem;
`;

export const H3 = styled.h3<H2Props>`
  font-size: 18px;
  margin: 0;
  letter-spacing: -0.04rem;
  font-weight: ${(props) => (props.extra ? "900" : "300")};
`;

export const H4 = styled.h4<H4Props>`
  font-size: 16px;
  margin: 0;
  letter-spacing: ${(props) => (props.name ? "-0.04em" : "0.02rem")};
  font-weight: ${(props) => (props.bold ? "600" : "300")};
`;

export const H5 = styled.h5`
  font-size: 14px;
  margin: 0;
  letter-spacing: -0.04rem;

  span {
    letter-spacing: 0.02rem;
  }
`;
