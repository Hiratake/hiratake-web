// pages > index

import type { NextPage } from 'next'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { siTwitter, siGithub, siDiscord } from 'simple-icons/icons'
import { css } from '@emotion/react'
import { LCenter } from '@/components/LCenter'
import { LCluster } from '@/components/LCluster'
import { LIcon } from '@/components/LIcon'
import { LSidebar } from '@/components/LSidebar'
import { LStack } from '@/components/LStack'
import { config } from '@/utils/config'
import { rem } from '@/utils/style'

// ----------------------------------------
// JSX
// ----------------------------------------

export const Page: NextPage = () => {
  return (
    <>
      <NextSeo
        description={config.description}
        canonical={`https://${config.domain}`}
        openGraph={{ url: `https://${config.domain}` }}
      />

      <LCenter max="520px">
        <div css={containerStyle}>
          <LSidebar side="left" contentMin="360px" space="32px 40px">
            <LCluster align="center" justify="center">
              <div css={iconStyle}>
                <Image
                  src="https://images.microcms-assets.io/assets/b984f78937f74b35a1f2253f21427563/fe89794cd8514285a23ba0dd457a1f8e/icon.jpg"
                  alt="icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </LCluster>

            <LStack space="8px">
              <div css={profileStyle}>
                <LStack space="8px">
                  <p css={nameStyle}>{config.author.name}</p>
                  <p css={bioStyle}>{config.author.bio}</p>
                </LStack>
              </div>

              <div css={socialStyle}>
                <a
                  href={`https://twitter.com/${config.social.twitter}`}
                  title="Twitter"
                >
                  <LIcon size="20px">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d={siTwitter.path} />
                    </svg>
                  </LIcon>
                </a>
                <a
                  href={`https://github.com/${config.social.github}`}
                  title="GitHub"
                >
                  <LIcon size="20px">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d={siGithub.path} />
                    </svg>
                  </LIcon>
                </a>
                <a
                  href={`https://discord.com/users/${config.social.discord}`}
                  title="Discord"
                >
                  <LIcon size="20px">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d={siDiscord.path} />
                    </svg>
                  </LIcon>
                </a>
              </div>
            </LStack>
          </LSidebar>
        </div>
      </LCenter>
    </>
  )
}
export default Page

// ----------------------------------------
// Style
// ----------------------------------------

const containerStyle = css`
  margin-top: 40px;
`

const iconStyle = css`
  position: relative;
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 50%;
`

const profileStyle = css`
  font-family: sofia-pro, sans-serif;
  text-align: center;

  @media screen and (min-width: 568px) {
    text-align: left;
  }
`

const nameStyle = css`
  font-size: ${rem(36)};
  font-weight: 700;
  line-height: 1;
`

const bioStyle = css`
  font-size: ${rem(14)};
  color: var(--color-text-muted);
`

const socialStyle = css`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 568px) {
    justify-content: flex-start;
  }

  & > a {
    color: inherit;

    &:hover {
      color: var(--color-text-muted);
    }
  }
`
