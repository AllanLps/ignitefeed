import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id:1, 
    author: {
      avatarUrl: "https://github.com/AllanLps.png",
      name: "Allan Lopes",
      role: "Developer Front-end"
    },
    content: [
      { type:'paragraph', content: 'Fala galeraa 👋' },
      { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'allan.design/doctorcare' } 
    ], 
    publishedAt: new Date('2023-01-21 20:00:00'),
  },
  
  {
    id:2, 
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator"
    },
    content: [
      { type:'paragraph', content: 'Fala galeraa 👋' },
      { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'mayk.design/doctorcare' } 
    ], 
    publishedAt: new Date('2023-01-22 20:00:00'),
  }
]

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
          return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            
            />
          )
         })}
        </main>
      </div>
    </>
  );
}

export default App;
