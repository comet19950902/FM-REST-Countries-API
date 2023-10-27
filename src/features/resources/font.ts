import { styled } from "styled-components";

interface H1Props {
  name?: boolean;
  bold?: boolean;
}

interface H2Props {
  extra?: boolean;
}

export const H1 = styled.h1`
  font-size: 24px;
  margin: 0;
  letter-spacing: 0.02rem;
`;

export const H2 = styled.h2<H2Props>`
  font-size: 18px;
  margin: 0;
  letter-spacing: -0.04rem;
  font-weight: ${(props) => (props.extra ? "900" : "300")};
`;

export const H3 = styled.h3<H1Props>`
  font-size: 16px;
  margin: 0;
  letter-spacing: ${(props) => (props.name ? "-0.04em" : "0.02rem")};
  font-weight: ${(props) => (props.bold ? "600" : "300")};
`;

export const H4 = styled.h4`
  font-size: 14px;
  margin: 0;
  letter-spacing: -0.04rem;

  span {
    letter-spacing: 0.02rem;
  }
`;
