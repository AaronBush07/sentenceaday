import { ADD_SENTENCE, FETCH_SENTENCES, NEW_SENTENCE } from "../actions/types";

const initState = {
  sentences: [{ sentence: "wow" }],
  sentence: "",
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case FETCH_SENTENCES:
      return {
        ...state,
        sentences: action.payload,
      };
    case NEW_SENTENCE:
      return {
        ...state,
        sentence: action.payload,
      };
    case ADD_SENTENCE:
      return {
        ...state,
        sentences: action.payload,
      };
    default:
      return state;
  }
}
