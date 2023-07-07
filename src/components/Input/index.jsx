import * as s from './styles'

const Input = ({leftIcon, name, ...rest}) => {
  return (
    <s.InputContainer>
        {leftIcon ? <s.IconContainer>{leftIcon}</s.IconContainer> : null}
        <s.InputText {...rest}/>
    </s.InputContainer>
  )
}

export default Input