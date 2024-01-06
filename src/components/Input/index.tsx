import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { RegularText } from '../Typography'
import {
  InputStyleContainer,
  InputWrapper,
  InputStyled,
  RightText,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
  children?: ReactNode
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer haserror={!!error}>
          <InputStyled ref={ref} {...props} />
          {children}
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)

// Input.displayName = 'Input'
