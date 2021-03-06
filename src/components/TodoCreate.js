import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import { useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover{
        background: #63e6be;
    }
    &:active{
        background: #20c997;
    }

    z-index:5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left:50%;
    bottom: 0px;
    transform: translate(-50%, 50%); /*더 정확한 위치를 찾아가게 함 */

    font-size: 60px;
    color: white;
    border-radius: 50%;

    border:none; /*테투리 없애는거*/
    outline: none;

    transition: 0.125s all ease-in;
    ${props => props.open && css`
      background: #ff6b6b;
      &:hover{
        background: #ff8787;
      }
      &:active{
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`; /*특정폼의 위치를 정해주는 컴포넌트 */

const InsertForm = styled.div`
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius:16px; /*TodoTemplate에서 border-radius:16px로 줬으므로 삐져나가지 않게 하기위해 필요 */
  border-bottom-right-radius:16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box; 
`;

function TodoCreate(){
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);


  return (
    <>
      {open && 
        <InsertFormPositioner>
          <InsertForm>
            <Input placeholder="할 일을 입력 후, Enter를 누르세요" autoFocus/>
            {/* autoFocus는 해당 컴포넌트가 나타날 때 자동으로 포커스를 잡아줌 */}
          </InsertForm>
        </InsertFormPositioner>}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}


export default TodoCreate ;
