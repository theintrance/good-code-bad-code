import { visit } from 'unist-util-visit';

export default function remarkCodeClass() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.lang) {
        // 언어 식별자에서 언어를 추출
        const lang = node.lang;

        // 메타데이터에서 클래스 추출
        const meta = node.meta ? node.meta.split(' ') : [];
        const classes = meta;

        // 클래스 속성 설정
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};

        const classList = node.data.hProperties.className || [];
        node.data.hProperties.className = [
          ...classList,
          `language-${lang}`,
          ...classes,
        ];
      }
    });
  };
}