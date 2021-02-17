import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  .default-button {
    min-width: 155px;
    width: 100%;
    height: 40px;
    background: #ffc800;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 9.6875rem;
    border-radius: 1.5625rem;
    transition: all 0.3s;

    &:hover {
      background: ${shade(0.1, '#ffc800')};
    }

    a {
      text-transform: uppercase;

      font-weight: 700;
      font-size: 16px;
      line-height: 36px;
      color: #fff;
    }
  }
`;
