import styled, { css } from "styled-components"

const buttonStyles = css`
  background-color: #a1c91e;

  &:hover {
    background-color: #aad12a;
  }
`

const googleSignInStyles = css`
  min-width: 225px;
  background-color: #3b79dd;

  &:hover {
    background-color: #4184f0;
  }
`

const invertedButtonStyles = css`
  display: block;
  position: absolute;
  min-width: 188px;
  opacity: 0.5;
  background-color: rgba(255, 255, 255, 0.75);
  color: #4a4a4a;

  &:hover {
    opacity: 1 !important;
    background-color: rgba(170, 209, 42, 0.85);
    color: rgb(255, 255, 255);
  }
`

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  }
  return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 145px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  color: white;
  cursor: pointer;
  align-content: center;
  justify-content: center;
  border: 0.5px solid #222c00;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.7s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  }
  
  ${getButtonStyles}
`
