# openbikesensor.github.io

You can find this site at https://www.openbikesensor.org/

## Development

Make sure to clone the repository with the `--recursive` flag, or if you forgot that, initialize submodules like this:

```bash
git submodule update --init --recursive
```

Install postcss and other postprocessing tools using npm:

```bash
npm install
```

To build the site for development, you can choose between docker and a locally installed version og hugo.

### Run hugo with docker

All you need to do is:

```bash
docker-compose up
```

* Wait a moment, until you see `Web Server is available at`
* Open http://localhost:1313

### Run hugo locally

Install [hugo](https://gohugo.io/) (extended version!) and then run:

```bash
hugo server -D
```

### Dependency versions

We try to keep up to date with hugo and docsy. The current docsy version is
referenced in the submodule, so we're not sticking to any releases there. The
current hugo version is specified in the [github flow
file](.github/workflows/gh-pages.yml).

Since hugo does not introduce many breaking changes, it should be fine to work
with other versions locally. If you run into trouble, try to install the exact
version referenced in the github flow file, as that is used to build this site
for production. Always make sure to install hugo's *extended version*.

As for Node.js, we currently use version 12 for installing the dependencies
(postcss etc., see above). However, any newer version that is supported on your
operating system should work just as well, since we're not really using node
itself, just the package manager (npm).

If you want to update any of these components, feel free to do so and change
the places where it is referenced in the github flow or submodule, as well as
this documentation. It makes sense to stay up to date, but isn't really
required for a site of this size and scope. When updating, please create a
separate pull request to change the canonical version(s) in this repository.
