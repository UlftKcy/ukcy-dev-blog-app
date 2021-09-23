import { useState, useEffect } from "react";
import firebase from "./firebase";

export const addCard = (newCard) => {
  const blogCardRef = firebase.database().ref("blogCard");
  blogCardRef.push(newCard);
};

export const useFetch = () => {
  const [blogCardList, setBlogCardList] = useState([]);

  useEffect(() => {
    const blogCardRef = firebase.database().ref("blogCard");
    blogCardRef.on("value", (snapshot) => {
      const blogCards = snapshot.val();

      const blogCardArray = [];
      for (let id in blogCards) {
        blogCardArray.push({ id, ...blogCards[id] });
      }
      setBlogCardList(blogCardArray);
      // console.log(blogCardArray)
    });
  }, []);
  return { blogCardList };
};

export const editHandler = (updateCard) => {
  const blogCardRef = firebase.database().ref("blogCard").child(updateCard.id);
  blogCardRef.update({
    title: updateCard.title,
    image: updateCard.image,
    content: updateCard.content,
  });
};

export const deleteHandler = (id) => {
  const blogCardRef = firebase.database().ref("blogCard").child(id);
  blogCardRef.remove();
  // console.log("id: ", id)
  /* const blogCardRef = firebase.database().ref("blogCard").child(newCard.id);
  blogCardRef.update(newCard) */
};
