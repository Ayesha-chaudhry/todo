import AddTodo from '@/components/AddTodo'
import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <main className='bg-gradient-to-tr from-primary to-secondary h-screen 
    flex justify-center items-center'>
      <div className='px-3 py-4 rounded-xl w-full bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60 backdrop:blur-xl  max-w-md'>
        {/* TodoList */}
        {/* @ts-ignore */}
        <TodoList/>
        {/* Add TodoList */}
        <AddTodo/>
        <div className='w-1/2 h-1.5 bg-black/80 mx-auto rounded'></div>

      </div>
    </main>
  )
}
