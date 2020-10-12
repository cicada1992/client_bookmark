import { focusedInputStyle } from '@src/lib/styleUtils';
import React, { SyntheticEvent, useCallback } from 'react';
import styled, { css } from 'styled-components';

const errorStyle = css`
  border: 1px solid red;
  outline: none;
`;

const Container = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${({ width }) => width};
`;

const Label = styled.div`
  margin-bottom: 3px;
  font-size: 13px;
  color: #555;
`;

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 30px;
  margin: 0;
  padding: 10px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 13px;
  transition: all 0.25s ease;
  border-radius: 3px;

  &::placeholder {
    color: #9e9e9e;
  }

  &:focus {
    ${({ hasError }) => !hasError && focusedInputStyle};
  }

  ${({ hasError }) => hasError && errorStyle};
`;

const ErrorCaption = styled.div`
  margin-top: 2px;
  color: red;
  font-size: 11px;
  white-space: nowrap;
`;

interface Props {
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  width?: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<Props> = ({
  label,
  value,
  error,
  placeholder = '',
  width = '100%',
  onChange
}) => {
  const handleInputChange = useCallback(
    (evt: SyntheticEvent<HTMLInputElement>) => {
      onChange(evt.currentTarget.value);
    },
    [onChange]
  );
  return (
    <Container width={width}>
      <Label>{label}</Label>
      <Input
        type="text"
        value={value}
        hasError={!!error}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {Boolean(error) && <ErrorCaption>{error}</ErrorCaption>}
    </Container>
  );
};

export default TextInput;
