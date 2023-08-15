function computeTags(posts) {
  let tags = new Map();
  posts.forEach(post => {
    post.frontMatter.tags.forEach(tag => {
      if(tags.has(tag)) {
        tags.get(tag).push(post)
      } else {
        tags.set(tag, [post])
      }
    })
  })
  tags = Array.from(tags);
  tags.sort();
  return tags
}

export { computeTags }