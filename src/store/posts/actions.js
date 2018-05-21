import PostsService from 'src/services/posts'

export default {
  fetch ({commit}) {
    PostsService.all().then(posts => {
      commit('setPosts', posts)
    })
  },
  save ({commit}, payload) {
    // Setting FormData payload
    let post_payload = new FormData()
    post_payload.append('body', payload.body)
    payload.attachments.forEach(attachment => {
      post_payload.append('attachments[]', attachment)
    })

    return new Promise((resolve, reject) => {
      PostsService.add(post_payload).then(post => {
        commit('addPost', post)

        resolve(post)
      })
    })
  },
  vote ({commit}, payload) {
    return new Promise((resolve, reject) => {
      PostsService.vote(payload).then(post => {
        commit('addVote', post)

        resolve(post)
      })
    })
  },
  unvote ({commit}, payload) {
    return new Promise((resolve, reject) => {
      PostsService.unvote(payload.post_id, payload.vote_id).then(vote => {
        commit('deleteVote', vote)

        resolve(vote)
      })
    })
  }
}
