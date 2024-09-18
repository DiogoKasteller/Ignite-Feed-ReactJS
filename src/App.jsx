import { Header } from "./components/Header.jsx"
import { Sidebar } from "./components/Sidebar.jsx"
import { Post } from "./components/Post.jsx"

import styles from "./App.module.css"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Diego Fernandes" content="Um novo post muito legal" />
          <Post author="Diogo Kasteller" content="Um novo post muito legal 2" />
        </main>
      </div>
    </div>
  )
}
