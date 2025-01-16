import React from 'react'
import TodoItem from './TodoItem'
import { useTodos } from '@/contexts/TodoContext'
import Accordion from '../ui/Accordion'
import AccordionItem from '../ui/AccordionItem'
import { AccordionProvider } from '@/contexts/AccordionContext'

const TodoBody = () => {

  const todos = useTodos();
  const filterTodos = (todos, selectedCategory) => selectedCategory === 'ALL' ? todos : todos.filter(todo => todo.category === selectedCategory);
  const filteredTodos = filterTodos(todos.data, todos.category);
  
  return (
    <AccordionProvider>
      <Accordion>
        <ul className='px-0 my-8'> 
          {filteredTodos.map((todo, index) => (
            <AccordionItem key={index} id={todo.id} title={todo.title}>
              <TodoItem todo={todo} />
            </AccordionItem>
          ))}
        </ul>
      </Accordion>
    </AccordionProvider>
  )
}
export default TodoBody

