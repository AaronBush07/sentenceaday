import { FETCH_SENTENCES, NEW_SENTENCE, ADD_SENTENCE } from "./types";

export const fetchSentences = () => (dispatch) => {
  //   fetch("http://localhost:3000/sentences")
  //     .then((res) => res.json())
  //     .then((sentences) =>
  //       dispatch({
  //         type: FETCH_SENTENCES,
  //         payload: sentences,
  //       })
  //     );
  dispatch({
    type: FETCH_SENTENCES,
    payload: [],
  });
};

export const newSentence = (postData) => (dispatch) => {
  //   fetch("http:localhost:3000/sentence", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(postData),
  //   })
  //     .then((res) => res.json())
  //     .then((sentence) => dispatch({ type: NEW_SENTENCE, payload: sentence }));
  console.log(postData)
  dispatch({ type: NEW_SENTENCE, payload: postData });

};

export const addSentence = (sentences, value) => dispatch => {
    const payload = [...sentences, {sentence:value}]
    dispatch({type: ADD_SENTENCE, payload: payload})
};
