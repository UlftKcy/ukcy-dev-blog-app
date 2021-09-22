import { useState, useEffect } from "react";
import firebase from "./firebase";

export const addCard = (cards) => {
  const blogCardRef = firebase.database().ref("blogCard");
  blogCardRef.push(cards);
};

export const useFetch = () => {
  const [blogCardList, setBlogCardList] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    const blogCardRef = firebase.database().ref("blogCard");
    blogCardRef.on("value", (snapshot) => {
      const blogCards = snapshot.val();

      const blogCardArray = [];
      for (let id in blogCards) {
        blogCardArray.push({ id, ...blogCards[id] });
      }
      setBlogCardList(blogCardArray);
      setIsLoading(false);
    });
  }, []);
  return { blogCardList, isLoading };
};
