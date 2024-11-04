export const SITE = {
  title: 'Good Code, Bad Code',
  description: 'Good Code, Bad Code',
  defaultLanguage: 'en-us'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  Korean: 'ko'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  ko: {
    'Chapter 1': [
      { text: '1.1. 코드는 어떻게 소프트웨어가 되는가', link: '/ko/chapter1/1_1_코드는_어떻게_소프트웨어가_되는가' },
      { text: '1.2. 코드 품질의 목표', link: '/ko/chapter1/1_2_코드_품질의_목표' },
      { text: '1.3. 코드 품질의 핵심 요소', link: '/ko/chapter1/1_3_코드_품질의_핵심_요소' },
      { text: '1.4. 고품질 코드 작성은 일정을 지연시키는가', link: '/ko/chapter1/1_4_고품질_코드_작성은_일정을_지연시키는가' },
    ],
    'Chapter 2': [
      { text: '2.1. 널값 및 의사코드 규약', link: '/ko/chapter2/2_1_널값_및_의사코드_규약' },
      { text: '2.2. 왜 추상화 계층을 만드는가', link: '/ko/chapter2/2_2_왜_추상화_계층을_만드는가' },
      { text: '2.3. 코드의 계층', link: '/ko/chapter2/2_3_코드의_계층' },
      { text: '2.4. 마이크로서비스는 어떤가', link: '/ko/chapter2/2_4_마이크로서비스는_어떤가' },
    ],
    'Chapter 3': [
      { text: '3.1. 자신의 코드와 다른 개발자의 코드', link: '/ko/chapter3/3_1_자신의_코드와_다른_개발자의_코드' },
      { text: '3.2. 여러분이 작성한 코드의 사용법을 다른 사람들은 어떻게 아는가', link: '/ko/chapter3/3_2_여러분이_작성한_코드의_사용법을_다른_사람들은_어떻게_아는가' },
      { text: '3.3. 코드 계약', link: '/ko/chapter3/3_3_코드_계약' },
      { text: '3.4. 체크 및 어서션', link: '/ko/chapter3/3_4_체크_및_어서션' },
    ],
    'Chapter 4': [
      { text: '4.1. 복구 가능성', link: '/ko/chapter4/4_1_복구_가능성' },
      { text: '4.2. 견고성 vs 실패', link: '/ko/chapter4/4_2_견고성_vs_실패' },
      { text: '4.3. 오류 전달 방법', link: '/ko/chapter4/4_3_오류_전달_방법' },
      { text: '4.4. 복구할 수 없는 오류의 전달', link: '/ko/chapter4/4_4_복구할_수_없는_오류의_전달' },
      { text: '4.5. 호출하는 쪽에서 복구하기를 원할 수도 있는 오류의 전달', link: '/ko/chapter4/4_5_호출하는_쪽에서_복구하기를_원할_수도_있는_오류의_전달' },
      { text: '4.6. 컴파일러 경고를 무시하지 말라', link: '/ko/chapter4/4_6_컴파일러_경고를_무시하지_말라' },
    ],
    'Chapter 5': [
      { text: '5.1. 서술형 명칭 사용', link: '/ko/chapter5/5_1_서술형_명칭_사용' },
      { text: '5.2. 주석문의 적절한 사용', link: '/ko/chapter5/5_2_주석문의_적절한_사용' },
      { text: '5.3. 코드 줄 수를 고정하지 말라', link: '/ko/chapter5/5_3_코드_줄_수를_고정하지_말라' },
      { text: '5.4. 일관된 코딩 스타일을 고수하라', link: '/ko/chapter5/5_4_일관된_코딩_스타일을_고수하라' },
      { text: '5.5. 깊이 중첩된 코드를 피하라', link: '/ko/chapter5/5_5_깊이_중첩된_코드를_피하라' },
      { text: '5.6. 함수 호출도 가독성이 있어야 한다', link: '/ko/chapter5/5_6_함수_호출도_가독성이_있어야_한다' },
    ],
  }
}
