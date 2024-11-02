#!/bin/bash

KO_DOCS_PATH="astro/src/content/docs/ko"
CONSTS_PATH="astro/src/consts.ts"

rm -rf $KO_DOCS_PATH
mkdir -p $KO_DOCS_PATH

# copy README.md to introduction.md
cp README.md $KO_DOCS_PATH/introduction.md

# remove current sidebar consts
if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' '/export const SIDEBAR: Sidebar = {/,/^}/d' $CONSTS_PATH
else
    sed -i '/export const SIDEBAR: Sidebar = {/,/^}/d' $CONSTS_PATH
fi

# copy chapters to ko/chapter
chapters=$(find . -maxdepth 1 -type d -name 'chapter*' | sort -V)
for chapter in $chapters; do
    mkdir -p "$KO_DOCS_PATH/$chapter"
    cp -r "$chapter" "$KO_DOCS_PATH"
done

# add sidebar consts
echo "export const SIDEBAR: Sidebar = {" | tee -a $CONSTS_PATH
echo "  ko: {" | tee -a $CONSTS_PATH
for chapter in $chapters; do
    header=$(basename "${chapter/chapter/Chapter }")
    contents=$(find "$chapter" -maxdepth 1 -type f -name '*.mdx' | sort -V)
    echo "    '$header': [" | tee -a $CONSTS_PATH
    
    for content in $contents; do
        content=${content/.mdx/}
        content_name=$(basename "${content/ko\//}")
        # content name is {number}_{subnumber}_{title1}_{title2}_..._{titleN}. so remove {number}_{subnumber}_
        content_name=${content_name//[0-9]_[0-9]_/}
        content_name=${content_name//_/ }

        # remove "./" from content
        content=${content/.\//}
    
        echo "      { text: '$content_name', link: '/ko/$content' }," | tee -a $CONSTS_PATH
    done

    echo "    ]," | tee -a $CONSTS_PATH
done
echo "  }" | tee -a $CONSTS_PATH
echo "}" | tee -a $CONSTS_PATH
