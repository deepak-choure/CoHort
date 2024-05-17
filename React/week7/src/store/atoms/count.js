import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

export const evenSelector = selector({
    //evenselector need countAtom as prop so whenever it changes the logic re runs
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return (count % 2==0);
    }
});

// Todo creation application with filtering logic
// todos, filter
const filterTodos = selector({
    key:"filterTodos",
    get:(props)=>{
        const todos = props.get(todosAtom);
        const filter = props.get(filterAtom);
        return todos.filter(x => x.title.includes(filter)|| x.description.includes(filter));
    }
});