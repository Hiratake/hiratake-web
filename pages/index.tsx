import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { css } from '@emotion/react'
import { AppTab, AppTabItem } from '@/components'
import { breakpoints } from '@/utils/sizes'
import { getSortedPostsData } from '@/utils/posts'
import profile from '@/assets/profile.json'
import IconTwitter from '@/assets/images/twitter.svg'
import IconGitHub from '@/assets/images/github.svg'
import IconDiscord from '@/assets/images/discord.svg'

const Home: NextPage<{ allPostsData: ReturnType<typeof getSortedPostsData> }> =
  ({ allPostsData }) => {
    // Styles
    const styledProfile = css`
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 56px 0;
      ${breakpoints('md')} {
        padding: 80px 0;
      }
    `
    const styledProfileIcon = css`
      width: 120px;
      height: 120px;
      overflow: hidden;
      border-radius: 50%;
    `
    const styledProfileContent = css`
      width: 100%;
      padding: 16px 40px 0 40px;
      font-family: 'sofia-pro', 'Hiragino Kaku Gothic ProN', 'Yu Gothic',
        sans-serif;
      text-align: center;
      ${breakpoints('md')} {
        max-width: 400px;
        padding-top: 0;
        padding-right: 0;
        text-align: left;
      }
    `
    const styledProfileName = css`
      font-size: 36px;
      font-weight: 700;
    `
    const styledProfileBio = css`
      max-width: 320px;
      margin: auto;
      font-size: 14px;
      color: var(--color-text-muted);

      ${breakpoints('sm')} {
        max-width: none;
      }
    `
    const styledProfileSocial = css`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      ${breakpoints('sm')} {
        justify-content: flex-start;
      }
    `
    const styledProfileSocialItem = css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      padding: 2px;
      color: inherit;
      text-decoration: none;
      &:hover {
        color: var(--color-text-muted);
      }
      & ~ & {
        margin-left: 8px;
      }
    `
    const styledProfileSocialIcon = css`
      width: 100%;
      fill: currentColor;
    `
    const styledContent = css`
      padding: 24px 0 48px;
      ${breakpoints('md')} {
        padding: 40px 0 80px;
      }
    `

    const router = useRouter()
    const [currentTab, setCurrentTab] = React.useState('posts')

    return (
      <>
        <Head>
          <title>{process.env.baseName}</title>
          <meta name="description" content={process.env.baseDescription} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`${process.env.baseUrl}${router.pathname}`}
          />
          <meta property="og:title" content={process.env.baseName} />
          <meta
            property="og:description"
            content={process.env.baseDescription}
          />
          <meta
            property="og:image"
            content={`${process.env.baseUrl}${process.env.baseImage}`}
          />
          <meta name="twitter:card" content="summary" />
        </Head>

        <div css={styledProfile}>
          <div css={styledProfileIcon}>
            <Image src={profile.image} alt="Icon" width={120} height={120} />
          </div>
          <div css={styledProfileContent}>
            <p css={styledProfileName}>{profile.name}</p>
            <p css={styledProfileBio}>{profile.bio}</p>
            <div css={styledProfileSocial}>
              <Link href={profile.social.twitter} passHref>
                <a css={styledProfileSocialItem} target="_blank" rel="noopener">
                  <IconTwitter css={styledProfileSocialIcon} />
                </a>
              </Link>
              <Link href={profile.social.github} passHref>
                <a css={styledProfileSocialItem} target="_blank" rel="noopener">
                  <IconGitHub css={styledProfileSocialIcon} />
                </a>
              </Link>
              <Link href={profile.social.discord} passHref>
                <a css={styledProfileSocialItem} target="_blank" rel="noopener">
                  <IconDiscord css={styledProfileSocialIcon} />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div css={styledContent}>
          <AppTab
            headers={[
              { label: 'posts', key: 'posts' },
              { label: 'works', key: 'works' },
            ]}
            current={currentTab}
            onChange={setCurrentTab}
          >
            <AppTabItem current={currentTab} itemKey="posts">
              {allPostsData.map(({ id, title, createdAt, updatedAt }) => (
                <li key={id}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {createdAt}
                  <br />
                  {updatedAt}
                </li>
              ))}
            </AppTabItem>
            <AppTabItem current={currentTab} itemKey="works">
              い
            </AppTabItem>
          </AppTab>
        </div>
      </>
    )
  }

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Home
