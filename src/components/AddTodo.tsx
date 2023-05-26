"use client";
import { NewTodo } from "@/lib/drizzle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTodo = () => {
  const [task, setTask] = useState<NewTodo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const {refresh} = useRouter();

  const handleSubmit = async () => {
    try {
        setLoading(true)
      if (task) {
        const res = await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify({
            task: task.task
          })
        })

        console.log(res.ok);
        refresh()
      }
    } catch (error) {
      console.log("error");
    } finally{
        setLoading(false)
    }
  };

  return (
    <div>
      <form className="w-full flex gap-x-3">
        <input
          onChange={(e) => setTask({ task: e.target.value })}
          className="w-full py-3.5 px-5 rounded-full border focus:outline-secondary"
          type="text"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-gradient-to-b from-primary to-secondary p-4 shrink-0 rounded-full"
        >
          <Image src={"/Vector.png"} width={20} height={20} alt="vector" />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
