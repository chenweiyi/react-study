/*
 * @Author: 陈潍溢
 * @Date: 2022-07-15 10:44:56
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-15 14:23:39
 * @Description:
 */
import { memo, useCallback, useMemo, useState } from 'react'

type ChildProps = {
  num: number
  onClick: () => void
}

const Child = memo((props: Omit<ChildProps, 'num'>) => {
  console.log('render child')
  return (
    <div>
      <button onClick={() => props.onClick()}>点我+1(child)</button>
    </div>
  )
})

function App () {
  const [obj, setObj] = useState({ num: 1 })
  const [refresh, setRefresh] = useState(1)
  console.log('render parent')

  function onClickAddOne () {
    setObj({ num: obj.num + 1 })
  }

  const clickHandler = useCallback(() => {
    console.log('num:', obj.num)
    setObj({ num: obj.num + 1 })
  }, [refresh])

  return (
    <div className='App'>
      <button onClick={onClickAddOne}>点我+1</button>
      <button onClick={() => setRefresh(refresh + 1)}>update callback</button>
      <Child onClick={clickHandler}></Child>
      <div>{obj.num}</div>
    </div>
  )
}

export default App
