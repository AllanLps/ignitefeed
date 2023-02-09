import { ThumbsUp, Trash } from "phosphor-react";
import React, { useState } from "react";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}


export default function Comment({ content, deleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    deleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1;
    }) 
  }

  return (
    <div className={styles.comment}>
      <img src="https://github.com/AllanLps.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Allan Lopes</strong>
              <time
                title="31 de janeiro as 12:00h"
                dateTime="2023-01-31 12:10:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
