/*
 * @Author: 陈潍溢
 * @Date: 2022-07-15 10:44:56
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-15 12:50:38
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

const ChildMemo = memo(Child)

function App () {
  const [obj, setObj] = useState({ num: 1 })
  console.log('render parent')

  function onClick () {
    // setObj(obj)
    setObj({ ...obj })
  }

  const clickHandler = useCallback(() => {
    setObj({ ...obj })
  }, [])

  return (
    <div className='App'>
      <button onClick={onClick}>点我</button>
      <ChildMemo num={obj.num} onClick={clickHandler}></ChildMemo>
    </div>
  )
}

export default App
