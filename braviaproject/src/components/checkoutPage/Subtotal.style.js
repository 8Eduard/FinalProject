import styled from "styled-components";

export const FullSubtotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 2px solid #f36d38;
  border-radius: 3px;
`;

export const SubtotalGift = styled.small`
  display: flex;
  align-items: center;
`;

export const SubtotalGiftInput = styled.input`
  margin-right: 5px;
`;

export const SubtotalButton = styled.button`
  background: #f36d38;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #f36d38 #f36d38 #f36d38;
  color: #111111;
`;
