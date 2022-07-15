/*
 * @Author: 陈潍溢
 * @Date: 2022-07-15 10:44:56
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-15 14:16:11
 * @Description:
 */
import { memo, useCallback, useMemo, useState } from 'react'

type ChildProps = {
  num: number
  onClick: () => void
}

const Child = memo((props: ChildProps) => {
  console.log('render child')
  return (
    <div>
      <span>{props.num}</span>
      <button onClick={() => props.onClick()}>点我+1(child)</button>
    </div>
  )
})

function App () {
  const [obj, setObj] = useState({ num: 1 })
  console.log('render parent')

  function onClick () {
    setObj({ ...obj })
  }

  // 执行该方法时，会修改num, 因此也会出发child更新
  function onClickAddOne () {
    setObj({ num: obj.num + 1 })
  }

  // 执行该方法时，会修改num, 但是会以缓存值修改
  const clickHandler = useCallback(() => {
    console.log('num:', obj.num)
    setObj({ num: obj.num + 1 })
  }, [])

  // 执行过一次useCallback方法后，该方法会被缓存，obj.num将是第一次执行时候的值
  const onClickAddOne2 = useCallback(() => {
    setObj({ num: obj.num + 1 })
  }, [])

  return (
    <div className='App'>
      <button onClick={onClick}>点我</button>
      <button onClick={onClickAddOne}>点我+1</button>
      <button onClick={onClickAddOne2}>点我2+1</button>
      <Child num={obj.num} onClick={clickHandler}></Child>
    </div>
  )
}

export default App
