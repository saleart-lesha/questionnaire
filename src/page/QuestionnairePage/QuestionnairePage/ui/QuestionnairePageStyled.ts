import styled from 'styled-components'

export const Section = styled.div`
  padding: 0 16px 32px 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  @media (max-width: 1670px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1370px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const PreviewQuestionnaire = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #edf2ff;
  }

  &:hover img {
    transform: translateY(-8px);
  }
`

export const Image = styled.img`
  margin-top: 16px;
  height: 250px;
  width: 250px;
  border-radius: 8px;
  transition: transform 0.3s ease;

  @media (max-width: 850px) {
    height: 200px;
    width: 200px;
  }
  @media (max-width: 450px) {
    height: 250px;
    width: 250px;
  }
`

export const Text = styled.p`
  padding-top: 8px;
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: center;
  margin-bottom: 8px;
  color: #495057;
  @media (max-width: 1370px) {
    font-size: 18px;
  }
  @media (max-width: 850px) {
    font-size: 16px;
  }
`
