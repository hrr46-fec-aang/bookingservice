import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props ? "#009e74" : "white"};
  color: ${props => props ? "white" : "#009e74"};

  width: 100%;
  font-size: 1em;
  margin: 0em;
  padding: 0.25em;
  border: 2px solid #009e74;
  border-radius: 3px;
`;

export default Button;