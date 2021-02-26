import React, { Component } from 'react'
import './app.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {

  state = { todos: [
    {id: 0,name:'吃饭',done:true},
    {id: 1,name:'睡觉',done:false},
    {id: 2,name:'学习',done:true}
  ]}

  // addTodo用于添加一个todo,接收参数是todo对象
  addTodo=(todoObj)=>{
    // 获取原todos
    const {todos} = this.state
    // 追加一个todo
    const newTodos = [todoObj,...todos]
    // 更新state
    this.setState({todos:newTodos})
  }

  // 更新todo
  updateTodo = (id,done)=>{
    // 获取原todos
    const {todos} = this.state
    // 创建一个新的todos
    const newTodos = todos.map(todoObj=>{
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  // 删除一个todo
  deleteTodo=(id)=>{
    // 获取原todos
    const {todos} = this.state
    // 加工数据
    const newTodos = todos.filter(todo=>todo.id !== id)
    // 更新state
    this.setState({todos:newTodos})
  }

  checkAll = (done)=>{
    // 获取原todos
    const {todos} = this.state
    // 加工数据
    const newTodos = todos.map(todoObj=>{
      return {...todoObj,done}
    })
    // 更新state
    this.setState({todos:newTodos})
  }

  clearAllDone=()=>{
    // 获取原todos
    const {todos} = this.state
    // 加工数据
    const newTodos = todos.filter(todoObj=> !todoObj.done)
    // 更新state
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

