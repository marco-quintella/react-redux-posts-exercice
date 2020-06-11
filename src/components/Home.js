import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const postList = this.props.posts.length ? (
      this.props.posts.map(post => {
        return (
          <div className="card" key={post.id}>
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <p>Loading posts...</p>
    );
    console.log(this.props);
    return (
      <div>
        <h1>Home</h1>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
