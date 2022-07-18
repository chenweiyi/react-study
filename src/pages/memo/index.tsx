/*
 * @Author: 陈潍溢
 * @Date: 2022-07-18 15:50:47
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-18 15:51:18
 * @Description:
 */
import { memo, useEffect, useState } from 'react'

function ShowName ({ name }: { name: string }) {
  console.log('showName render...')
  return <div>{name}</div>
}

const ShowNameMemo = memo(ShowName)

function App () {
  const [index, setIndex] = useState(0)
  const [name] = useState('张三')
  useEffect(() => {
    setInterval(() => {
      setIndex(prev => prev + 1)
    }, 1000)
  }, [])
  return (
    <div>
      {index}
      <ShowNameMemo name={name} />
    </div>
  )
}

export default App
