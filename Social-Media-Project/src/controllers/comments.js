const { Posts, Comments, Users } = require('../db/models')

async function createNewComment(userId, title, body, postId) {
    const comment = await Comments.create({
      title,
      body,
      userId,
      postId
    })
  
    return comment
  }
  
async function findAllComments(query) {
    // TODO: Handle query params
    const comments = await Comments.findAll({
      include: [Posts]
    }) 
    return comments
}
  
module.exports = {
    createNewComment,
    findAllComments
}

async function task() {
    console.log(
      await createNewComment(
        1,
        'This is a sample comment',
        'Body of the comment goes here',
        18
      )
    ),
    console.log(
      await createNewComment(
        2,
        'Another sample comment',
        'Some body example here as well',
        19
      )
    )
    const comments = await findAllComments()
    
    for (let c of comments) {
      console.log(c.post) ;
      console.log(`${c.title}\nauthor: \n${c.body}\nPost-Title: ${c.post.title} \n==========\n`)
    }
  }
task().catch((err)=> console.log(err))