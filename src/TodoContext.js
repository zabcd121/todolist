import React, {createContext, useReducer, useContext, useRef} from 'react';

const initialTodos = [
  {
    id:1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id:2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id:3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id:4,
    text: '기능 구현하기',
    done: false,
  }
];

/*
CREATE TOGGLE REMOVE 
*/
function todoReducer(state, action){
 /*추후에 useReducer에서 사용할 함수임. state와 action을 가져와서 그 다음상태를  리턴함*/
  switch(action.type){
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(
        todo => todo.id === action.id ? {...todo, done: !todo.done} : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error('Unhandled action type: ${action.type}')
  }
  return <div></div>;
}

/*state와 dispatch를 위한 컨텍스트를 두개 만들어줌 */
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();
/* TodoNextIdContext는 상태로 관리하는게 아닌 바로 변화를 시킬수있는 값을 관리하기위해 useRef를 사용 */

/*app컴포넌트를 컨텍스트로 감싸야됨 */
/* 컴포넌트임 */
export function TodoProvider({children}) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos); /*reducer함수와 초기상태 */
  // dispatch는 reducer함수를 실행시키는데 여기서 파라미터로 action객체를 넘겨줌
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      {/* 위에서 createContext로 만든 컨텍스트에 값을 제공하기위해 Provider를 사용 */}
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );

}

// const state = useContext(TodoStateContext)
//를 TodoList에서 TodoStateContext안에 있는 컨텐스트를 쓰고 싶을 때 
//쓸 수 있지만 custom hook을 만들어 편리하게 사용

//커스텀 훅
export function useTodoState(){
  const context = useContext(TodoStateContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
}
 
export function useTodoDispatch(){
  const context = useContext(TodoDispatchContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
}

export function useTodoNextId(){
  const context = useContext(TodoNextIdContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
}