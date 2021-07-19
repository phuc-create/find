import styled from "styled-components";

export const StyledUserContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const BoxUser = styled.div`
  width: 200px;
  height: 350px;
  border-radius: 5px;
  border: 2px solid;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0px 10px 10px;
`;
export const TitleUser = styled.h1`
  width: 200px;
  text-align: center;
  border: 2px solid;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const IdUser = styled.div`
  font-weight: bold;
  font-size: 25px;
  position: absolute;
  top: 3%;
  left: 3%;
`;
export const ContentUser = styled.div`
  width: 200px;
  height: 200px;
  font-weight: bold;
  font-size: 15px;
  line-height: 32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const ImgUser = styled.img`
  width: 100%;
  height: 165px;
  object-fit: cover;
`;
