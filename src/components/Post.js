import React from "react";
import { connect } from "react-redux";

class Post extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id.toString() === id)
  };
};

export default connect(mapStateToProps)(Post);
