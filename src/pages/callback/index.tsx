/*
 * @Author: 陈潍溢
 * @Date: 2022-07-15 10:44:56
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-15 11:47:12
 * @Description:
 */
import { memo, useCallback, useMemo, useState } from 'react'

type ChildProps = {
  num: number
  onClick: () => void
}

function Child (props: ChildProps) {
  console.log('render child')
  return <div onClick={props.onClick}>{props.num}</div>
}

function App () {
  const [obj, setObj] = useState({ num: 1 })
  console.log('render parent')

  function onClick () {
    setObj(obj)
    // setObj({ ...obj })
  }

  return (
    <div className='App'>
      <button onClick={onClick}>点我</button>
      <Child num={obj.num} onClick={onClick}></Child>
    </div>
  )
}

export default App
