/*
 * @Author: 陈潍溢
 * @Date: 2022-07-18 11:12:28
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-18 13:42:17
 * @Description:
 */
import { Dispatch, memo, SetStateAction, useReducer, useState } from 'react'

const ChildWithState = (props: {
  change: Dispatch<SetStateAction<number>>
}) => {
  console.log('render child with State')
  return (
    <div>
      <span>child with state</span>
      <button onClick={() => props.change(prev => prev + 1)}>+1</button>
    </div>
  )
}

const ChildWithReducer = (props: {
  change: Dispatch<{
    type: 'increment' | 'decrement'
  }>
}) => {
  console.log('render child with reducer')
  return (
    <div>
      <span>child with reducer</span>
      <button onClick={() => props.change({ type: 'increment' })}>+1</button>
      <button onClick={() => props.change({ type: 'decrement' })}>-1</button>
    </div>
  )
}

const reducer = (
  state: { count: number },
  action: { type: 'increment' | 'decrement' },
) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const initialState = { count: 0 }

export default () => {
  const [num, setNum] = useState(1)
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log('render parent')
  return (
    <div>
      <div>
        num: {num}, state.count: {state.count}
      </div>
      <ChildWithState change={setNum}></ChildWithState>
      <ChildWithReducer change={dispatch}></ChildWithReducer>
    </div>
  )
}
