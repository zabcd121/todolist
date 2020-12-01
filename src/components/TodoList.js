import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem.js';
import {useTodoState} from '../TodoContext'

const TodoListBlock = styled.div`
    flex: 1; /* TodoTemplate에 display:flex랑 direction을 coulumn으로
     설정했으므로 여기서 flex:1을 하면 자신이 차지할 수 있는 모든 영역을 차지함 */
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto; /*항목이 많아지면 아래로 내릴 수 있게 스크롤바를 만들어줌 */
`;

function TodoList(){
  const state = useTodoState();
  console.log(state);
  return (
    <TodoListBlock>
        <TodoItem text="프로젝트 생성하기" done={true} />
        <TodoItem text="그래놀라 먹기" done={true} />
        <TodoItem text="비피더스 먹기" done={false} />
        <TodoItem text="김밥먹기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList ;
