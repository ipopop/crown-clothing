import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  min-width: 340px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 60px;
  padding: 5px;
  polygon {
    fill: #aad12a;
  }
  circle {
    fill: #aad12a;
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  min-width:  82px;
  padding: 20px 15px 10px 15px;
  cursor: pointer;
`
