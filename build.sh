#!/bin/bash

KO_DOCS_PATH="astro/src/content/docs/ko"

rm -rf $KO_DOCS_PATH
mkdir -p $KO_DOCS_PATH

cp README.md $KO_DOCS_PATH/introduction.md

for chapter in chapter*; do
    mkdir -p "$KO_DOCS_PATH/$chapter"
    cp -r "$chapter" "$KO_DOCS_PATH"
done
