import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 20vw;
  min-width: 180px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 5px 15px;
  &:hover {
    cursor: pointer; /* custom */
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 245px;
  display: none;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 350px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.85);
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 1px 10px 0px rgba(0, 0, 0, 0.2),
      0 1px 2px 0 rgba(255, 255, 255, 0.5);
`;

export const BackgroundImage = styled.div`
  width: 100%;
  /* height: 95%; */
  height: 350px; /* custom */
  background-size: cover;
  background-position: center;
  /* margin-bottom: 5px; */
  opacity: 1; /* custom */
  transform: scale(1); /* custom */
  transition: all 0.25s cubic-bezier(0.25, 0.45, 0.45, 0.95); /* custom */  
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  ${CollectionItemContainer}:hover & {
        opacity: 0.85;
        transform: scale(1.05);
      }
`;

export const CollectionFooterContainer = styled.div`
  /* width: 100%; */
  width: 95%; /* custom */
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin: 5px 0 15px; /* custom */
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px; /* custom */
  &:hover {
    width: 90%;
  }
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;