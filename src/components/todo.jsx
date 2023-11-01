import React from 'react'

const todo = ({todo}) => {
  return (
    <div className="todo" key={todo.id}>
    <div className="content">
      <p > {todo.text}</p>
      <p className='category'>({todo.category})</p>
      
    </div>
    <div className='botoes'>
      <button>completar</button>
      <button>x</button>
    </div>
  </div>
  )
}

export default todo
