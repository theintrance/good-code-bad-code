import { visit } from 'unist-util-visit';

export default function rehypeCodeClass() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'pre' &&
        node.children &&
        node.children[0] &&
        node.children[0].tagName === 'code'
      ) {
        const codeNode = node.children[0];
        const codeClasses = codeNode.properties.className || [];
        const preClasses = node.properties.className || [];

        // 'language-'로 시작하지 않는 클래스들만 추가
        const additionalClasses = codeClasses.filter(
          (className) => !className.startsWith('language-')
        );

        node.properties.className = [...preClasses, ...additionalClasses];
      }
    });
  };
}