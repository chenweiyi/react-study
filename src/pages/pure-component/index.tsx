/*
 * @Author: 陈潍溢
 * @Date: 2022-07-16 18:50:54
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-16 19:22:24
 * @Description:
 */
import React from 'react'

type props = {
  name: string
}

type state = {
  name: string
}

export default class App extends React.Component<props, state> {
  constructor (props: props) {
    super(props)
    this.state = { name: '张三' }
  }
  updateName () {
    setInterval(() => this.setState({ name: '张三' }), 1000)
  }
  componentDidMount () {
    this.updateName()
  }
  render () {
    return (
      <div>
        <RegularComponent name={this.state.name} />
        <PureChildComponent name={this.state.name} />
      </div>
    )
  }
}

class RegularComponent extends React.Component<props> {
  render () {
    console.log('RegularComponent')
    return <div>{this.props.name}</div>
  }
}

class PureChildComponent extends React.PureComponent<props> {
  render () {
    console.log('PureChildComponent')
    return <div>{this.props.name}</div>
  }
}
