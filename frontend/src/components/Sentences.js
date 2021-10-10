import {connect} from 'react-redux'

const mapStatetoProps = (state=>
    {return {sentences: state.sentences.sentences}
    }
)

const Sentences = (props) => {
  const display = props.sentences.map((v, i) => {
    return <div key={i}>{v.sentence}</div>;
  });
  return display
};

export default connect(mapStatetoProps)(Sentences);
