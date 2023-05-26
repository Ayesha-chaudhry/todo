import { Todo } from "@/lib/drizzle";

const getData = async () => {    
    try{
        const res = await fetch("http://127.0.0.1:3000/api/todo",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(!res.ok){
            throw new Error("Failed to fetch the data")
        };
        const result = await res.json()
        
        return result     
    }catch (err){
        console.log(err);
    }
}



const TodoList = async() => {
    const data:{ data:Todo[]} = await getData();
    console.log('data',data);
    
  return (
    <div className="max-h-[350px] overflow-auto mb-4">
    {
        data.data.map((item) =>{
            return(
                <div key={item.id} className="bg-gray-100 p-4 flex items-center gap-x-3 shadow rounded-lg my-3">
                {/* Circle */}
                <div className="h-3 w-3 bg-secondary rounded-full"></div>
                {/* Task Title */}
                <p className="text-lg font-medium">{item.task}</p>
            </div>
            )
        })
    }
    </div>
  )
}

export default TodoList;
