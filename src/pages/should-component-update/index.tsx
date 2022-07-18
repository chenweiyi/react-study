/*
 * @Author: 陈潍溢
 * @Date: 2022-07-18 15:42:31
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-18 15:45:43
 * @Description:
 */
import React from 'react'

type state = {
  name: string
  age: number
  job: string
}

export default class App extends React.Component<any, state> {
  constructor (props: any) {
    super(props)
    this.state = { name: '张三', age: 20, job: 'waiter' }
  }
  componentDidMount () {
    setInterval(() => this.setState({ job: 'chef' }), 1000)
  }
  // 阻止组件冲洗渲染
  shouldComponentUpdate (nextProps: any, nextState: state) {
    if (
      this.state.name !== nextState.name ||
      this.state.age !== nextState.age
    ) {
      return true
    }
    return false
  }

  render () {
    console.log('rendering')
    let { name, age } = this.state
    return (
      <div>
        {name} {age}
      </div>
    )
  }
}
