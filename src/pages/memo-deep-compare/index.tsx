/*
 * @Author: 陈潍溢
 * @Date: 2022-07-18 16:05:21
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-18 16:09:45
 * @Description:
 */
import { memo, useState } from 'react'

type props = {
  person: {
    name: string
    age: number
    job: string
  }
}

function ShowPerson ({ person }: props) {
  console.log('ShowPerson render...')
  return (
    <div>
      {person.name} {person.age}
    </div>
  )
}

const ShowPersonMemo = memo(ShowPerson, comparePerson)

function comparePerson (prevProps: props, nextProps: props) {
  if (
    prevProps.person.name !== nextProps.person.name ||
    prevProps.person.age !== nextProps.person.age
  ) {
    return false
  }
  return true
}

function App () {
  const [person, setPerson] = useState({ name: '张三', age: 20, job: 'waiter' })
  return (
    <>
      <ShowPersonMemo person={person} />
      <button onClick={() => setPerson({ ...person, job: 'chef' })}>
        button
      </button>
    </>
  )
}

export default App
