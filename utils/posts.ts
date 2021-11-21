import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory: string = path.join(process.cwd(), 'posts')

export const getSortedPostsData = () => {
  // Get file name under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id: string = fileName.replace(/\.md$/, '')
    const fullPath: string = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...matterResult.data,
    } as { id: string; title: string; createdAt: string; updatedAt: string }
  })
  return allPostsData.sort(({ createdAt: a }, { createdAt: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
