import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;

    border-radius: 16px;
    border:1px solid #ced4da;
    font-size: 24px; /*여기서는 아이콘 크기를 말함 */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => props.done && css`
    /* css를 쓰는것은 조건부 스타일링 하기 위해서*/
        border: 1px solid #e8d9a9;
        color: #38d9a9;
    `} /* done값이 true이면 색을 바꿈 */
`;
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.done && css`
        color: #ced4da;
    `}
`;
const Remove = styled.div`
    opacity: 0; /*Todoitemblock에 커서를 올렸을 때만 보이게 할거임 */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #ff6b6b;
    }
`;
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    
    &:hover{
        /*Remove컴포넌트의 styled-components에서 만들어준 클래스이름이 들어감 */
        ${Remove}{
            opacity: 1;
        }
    }
`;

function TodoItem({ id, done, text }){

  return (
    <TodoItemBlock>
        <CheckCircle done={done}>
            {done && <MdDone />}
        </CheckCircle>
        <Text done={done}>{text}</Text>
        <Remove>
            <MdDelete />
        </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem ;
