import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { parseISO, format } from 'date-fns'
import { ja } from 'date-fns/locale'

const postsDirectory: string = path.join(process.cwd(), 'posts')

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getDescription = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents, {
    excerpt: true,
    excerpt_separator: '<!--more-->',
  })
  let processedContent
  if (matterResult.excerpt) {
    processedContent = await remark().use(html).process(matterResult.excerpt)
  } else {
    processedContent = await remark().use(html).process(matterResult.content)
  }
  const contentHtml = processedContent.toString()
  const descriptionText = contentHtml
    .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
    .replace(/\r?\n/g, '')
  const formattedDescription =
    descriptionText.length > 80
      ? `${descriptionText.substr(0, 80)}...`
      : descriptionText
  return formattedDescription
}

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const data = { ...matterResult.data }
  data.createdAt = format(parseISO(data.createdAt), 'yyyy-MM-dd', {
    locale: ja,
  })
  data.updatedAt = format(parseISO(data.updatedAt), 'yyyy-MM-dd', {
    locale: ja,
  })
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()
  const description = await getDescription(id)
  return {
    id,
    contentHtml,
    description,
    ...data,
  } as {
    id: string
    contentHtml: string
    title: string
    description: string
    createdAt: string
    updatedAt: string
  }
}

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id: string = fileName.replace(/\.md$/, '')
    const fullPath: string = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const data = { ...matterResult.data }
    data.createdAt = format(parseISO(data.createdAt), 'yyyy-MM-dd', {
      locale: ja,
    })
    data.updatedAt = format(parseISO(data.updatedAt), 'yyyy-MM-dd', {
      locale: ja,
    })
    data.postedOn = 'Blog'
    return {
      id,
      ...data,
    } as {
      id: string
      title: string
      createdAt: string
      updatedAt: string
      postedOn: string
    }
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
