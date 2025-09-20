# 📝 Listify

**Listify** is a simple To-Do app built with **React** to help me practice and strengthen my understanding of the **Context API**.  
You can add tasks, mark them as completed, filter them, and eventually delete them — all while managing global state with Context.

---

## 🚀 Features
- ➕ Add new tasks easily  
- ✅ Mark tasks as completed with checkboxes  
- 🔄 Filter tasks by **All / Completed / Pending**  
- ❌ Delete tasks (planned for future updates)  
- 🌍 Global state management using **Context API**  
- 📱 Clean, responsive UI  

---

## 🛠️ Tech Stack
- **React (Vite or CRA)**  
- **Context API** for global state management  
- **CSS / Tailwind** for styling  

---

## 🎯 Purpose
I created this project as part of my **React practice**, specifically to get hands-on experience with **Context API** instead of prop drilling.  
It’s a great foundation for building more complex apps like a Cart system, Notes app, or any task manager.

---

## 📖 What I Learned
- Rendering **dynamic lists** with `map()` in React  
- Using **`useState`** for local and global state management  
- Setting up **Context API** for sharing state across multiple components  
- Consuming context using **`useContext`**  
- Structuring **task objects** with properties: `id`, `itemName`, `status`  
- Implementing **checkbox toggles** to switch task status (`Pending` ↔ `Completed`)  
- Filtering tasks with **All / Completed / Pending buttons**  
- Handling **keyboard events** to add tasks by pressing Enter  
- Applying **conditional styling** for completed tasks (line-through, color change)  
- Updating state **immutably** using the spread operator and `map()`  

---

## 📌 Future Improvements
- ❌ **Delete tasks** – remove tasks from the list  
- ✏️ **Edit tasks** – modify task text after adding  
- 🌙 **Dark mode / Light mode toggle** – learn theme management using Context   
- 💾 **Persistent storage** – save tasks in `localStorage`  

