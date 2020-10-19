import { TodoList, Todo } from './class';
import { crearHtml, crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();
// const tarea =  new Todo('Aprender JavaScript');
// todoList.nuevoTodo( tarea );

// crearTodoHtml( tarea );

todoList.todos.forEach( todo => crearTodoHtml( todo ) );