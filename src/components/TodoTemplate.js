import React from 'react';
import styled from 'styled-components';

const TodoTempelateBlock = styled.div`
    width:512px;
    height: 768px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;

    display:flex;
    flex-direction: column; /*위에서 아래로*/
`;

function TodoTemplate({children}){

  return (
    <TodoTempelateBlock>
        {children}
    </TodoTempelateBlock>
  );
}

export default TodoTemplate ;
