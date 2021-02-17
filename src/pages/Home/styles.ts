import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ScrollProps {
  scrollPosition: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

export const ContentMenu = styled.header<ScrollProps>`
  width: 100%;
  height: 100px;
  padding: 0px 15px;
  position: fixed;
  z-index: 1000;
  transition: all 0.35s ease;

  display: flex;
  align-items: center;
  background-color: transparent;

  ${(props) =>
    props.scrollPosition >= 52 &&
    css`
      background-color: #fff;
      height: 70px;
    `}

  h1 {
    flex-basis: 240px;
    height: 40px;

    img {
      filter: brightness(0) invert(1);

      ${(props) =>
        props.scrollPosition >= 52 &&
        css`
          filter: initial;
        `}
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex: 1;
    height: 40px;

    li:first-child {
      margin-left: 0;
    }

    li {
      margin-left: 31px;

      a {
        font-weight: bold;
        font-size: 19px;
        line-height: 29px;
        color: #fff;

        ${(props) =>
          props.scrollPosition >= 52 &&
          css`
            color: #00a5f0;
          `}
      }
    }
  }
`;

export const ContentBanner = styled.section`
  background: #0073cd;
  min-height: 380px;
  padding: 110px 0px 24px 0px;

  article {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    header {
      display: flex;
      flex-direction: column;
      max-width: 524px;
      width: 100%;
      height: 360px;
      margin: 0px 0px 0px 95px;
      padding: 0px 15px 0px;

      h1 {
        font-size: 50px;
        line-height: 60px;
        color: #fff;
        text-align: left;
        flex-wrap: bold;
      }

      & > p {
        margin-top: 20px;
        color: #fff;
      }

      p + p {
        width: 179px;
      }
    }

    img {
      max-width: 505px;
      width: 100%;
    }
  }
`;

export const Main = styled.main`
  margin: 40px 0px 0px;
  width: 100%;
`;

export const ContainerMovie = styled.article`
  max-width: 1140px;
  padding: 0px 20px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .container-video {
    width: 740px;
    height: 399px;
    margin-bottom: 20px;

    iframe {
      border-radius: 10px;
    }
  }
`;

export const Products = styled.section`
  max-width: 1140px;
  width: 100%;
  width: 100%;
  padding: 50px 0px 0px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > header {
    display: flex;
    flex: 1;
    margin-bottom: 40px;

    h1 {
      font-size: 30px;
      line-height: 40px;
    }
  }

  .button-all-products {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;

    div {
      background: #00a5f0;
      border-radius: 62.5rem;

      &:hover {
        background: ${shade(0.3, '#00a5f0')};
      }
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 20px 40px 20px;

  article {
    flex-basis: calc(33% - 18px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 350px;
    width: 100%;
    height: 359px;

    transition: all 0.3s ease;
    cursor: pointer;
    border-radius: 10px;
    padding: 20px;

    header {
      order: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        width: 100%;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        font-weight: 700;
        margin-bottom: 20px;
      }

      p {
        font-size: 18px;
        line-height: 28px;
        color: #fff;
        text-align: center;
        width: 100%;
      }
    }

    img {
      max-width: 150px;
      width: 100%;
      order: 0;
      margin-bottom: 20px;
    }
  }

  article:nth-child(1) {
    background: #0046a0;

    :hover {
      background: ${shade(0.2, '#0046a0')};
    }
  }

  article:nth-child(2) {
    background: #0073cd;

    :hover {
      background: ${shade(0.2, '#0073cd')};
    }
  }

  article:nth-child(3) {
    background: #008282;

    :hover {
      background: ${shade(0.2, '#008282')};
    }
  }
`;

export const AppDownloadStore = styled.section`
  padding: 60px 0px;
  background: #0073cd;
`;

export const AppContent = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 0px;

  display: flex;
  align-items: center;
  /* justify-content: space-around; */

  header {
    padding: 0px 15px;
    margin-left: 92px;

    h1 {
      font-size: 30px;
      line-height: 40px;
      margin-bottom: 32px;
      color: #fff;
      font-weight: 700px;
      width: 430px;
    }

    img {
      cursor: pointer;
    }

    img:last-child {
      margin-left: 20px;
    }
  }

  > img {
    max-width: 350px;
    width: 100%;
    height: 678px;
    padding: 0px 15px;
    margin-left: 92px;
  }
`;

export const Footer = styled.footer`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px -15px 20px;

    img:first-child {
      margin-left: 0px;
    }

    img {
      margin-left: 20px;
      cursor: pointer;
      transition: all 0.35s ease;

      :hover {
        opacity: 0.8;
      }
    }
  }

  .container-footer {
    ul {
      display: flex;
      align-items: center;

      li {
        display: flex;
        align-items: center;

        a {
          color: #0073cd;
          font-size: 14px;
          line-height: 20px;
          font-weight: 700;
        }

        :nth-child(even)::after,
        :nth-child(even)::before {
          content: '•';
          margin: 0px 10px;
          color: #0073cd;
        }

        :last-child::after {
          content: '';
          margin: 0px;
        }
      }
    }
  }

  .copyright-footer {
    max-width: calc(940px - 20px);
    width: 100%;
    padding: 10px 10px 0px 10px;

    hr {
      margin: 9px 0px;
    }

    ul {
      width: 100%;

      li {
        line-height: 14px;
        text-align: center;
        strong,
        span {
          font-size: 12px;
        }
      }
    }
  }

  .info-footer {
    max-width: calc(940px - 20px);
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px 10px;

    .info {
      flex: 1;
      p {
        font-size: 12px;
        line-height: 18px;
      }
    }

    .seal {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-basis: 215px;

      img {
        width: 165px;
        margin: 0px 0px 0px 40px;
      }

      p {
        font-size: 12px;
        line-height: 18px;
        text-align: right;
      }
    }
  }
`;
