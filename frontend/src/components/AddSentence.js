import React from "react";

import { Grid, TextField, Button } from "@mui/material";
import { connect } from "react-redux";

import { newSentence, addSentence } from "../actions/sentenceActions";

const mapStatetoProps = (state) => {
  return {
    sentences: state.sentences.sentences,
    sentence: state.sentences.sentence,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     newSentence: (value) => {
//       dispatch(newSentence(value));
//     },
//     addSentence: (sentences, value) => {
//       dispatch(addSentence(sentences, value));
//     },
//   };
// };

const AddSentence = (props) => {
  function updateSentence() {
    console.log("This was called", props.sentences);
    console.log(props.sentence);
    //props.newSentence(props.sentence);
    props.addSentence(props.sentences, props.sentence);
  }
  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item xs={12} md={8}>
        <TextField
          required
          variant="standard"
          multiline
          fullWidth
          id="test"
          value={props.sentence}
          onChange={(e) => props.newSentence(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Button disableElevation variant="contained" onClick={updateSentence}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(mapStatetoProps, {addSentence, newSentence})(AddSentence);
