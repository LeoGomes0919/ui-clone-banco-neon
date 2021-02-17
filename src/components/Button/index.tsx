import React, { LinkHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = LinkHTMLAttributes<HTMLLinkElement>;

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Container>
      <div className="default-button">
        <a href="http://">{children}</a>
      </div>
    </Container>
  );
};

export default Button;
