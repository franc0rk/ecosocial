export default {
  setPosts (state, posts) {
    state.posts = posts
  },
  addPost (state, post) {
    state.posts.unshift(post)
  },
  addVote (state, updated_post) {
    let current_post = state.posts.find(post => post.id === updated_post.id)
    let post_index = state.posts.indexOf(current_post)
    let last_vote = updated_post.votes[updated_post.votes.length - 1]

    state.posts[post_index].votes.push(last_vote)
  },
  deleteVote (state, vote) {
    let current_post = state.posts.find(post => post.id === vote.post_id)
    let post_index = state.posts.indexOf(current_post)
    let current_vote = current_post.votes.find(_vote => _vote.id === vote.id)
    let vote_index = current_post.votes.indexOf(current_vote)

    state.posts[post_index].votes.splice(vote_index, 1)
  }
}
