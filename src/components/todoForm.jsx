import React, { useState } from 'react';

function TodoForm() {
  const [value, setValue] = useState(""); // Correção: Adicionei "import React" para usar o React.
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviou form!");
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a categoria"
          value={value} // Correção: Adicionei o valor do input vinculado ao estado "value".
          onChange={(e) => setValue(e.target.value)} // Correção: Adicionei um manipulador de alteração para atualizar o estado "value".
        />
        <select
          value={category} // Correção: Adicionei o valor do select vinculado ao estado "category".
          onChange={(e) => setCategory(e.target.value)} // Correção: Adicionei um manipulador de alteração para atualizar o estado "category".
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm;
