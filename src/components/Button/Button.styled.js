import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const ButtonLoad = styled.button`
  display: inline-block;

  min-width: 180px;
  padding: 8px 16px;
  border-radius: 2px;
  border: 0;

  color: #fff;
  background-color: #2196f3;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

  opacity: 1;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
