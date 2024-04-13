#!/bin/sh
set -ex
icons="brands/discourse brands/github brands/mastodon solid/video solid/person-biking solid/arrow-right solid/arrow-left solid/lightbulb solid/bars solid/xmark solid/moon solid/sun"

dest=fontawesome
url=https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs

mkdir -p "${dest}"
for path in $icons; do
  name=$(basename ${path})
  wget -O "${dest}/${name}.svg" "${url}/${path}.svg"
done
