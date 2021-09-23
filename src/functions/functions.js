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
    });
  }, []);
  return { blogCardList };
};
