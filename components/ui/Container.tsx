import React from 'react';
import styled from 'styled-components';

const Container = styled.div` 
  max-width: 1240px;  
  padding: 0 20px;  
  margin: 0 auto;  
  @media (max-width: 768px) {  
    padding: 0 10px;  
  }  
`;

const ContainerComponent: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};

export default ContainerComponent;