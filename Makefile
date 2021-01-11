# build the page and server the side locally (default make target)
# if you face problems with --incremental builds use --watch instead
serve:
	bundle exec jekyll serve --incremental

debug:
	bundle exec jekyll serve --incremental --verbose --profile

# clean the build artifacts
clean:
	bundle exec jekyll clean

# just build the page without serving
build:
	bundle exec jekyll build
