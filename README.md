# openbikesensor.github.io

You can find this site at https://www.openbikesensor.org/

## Developing

Make sure to clone the repository with the `--recursive` flag, or if you forgot that, initialize submodules like this:

```bash
git submodule update --init --recursive
```

Install postcss and other postprocessing tools using npm:

```bash
npm install
```

To build the site for development, install [hugo](https://gohugo.io/) (extended version!) and then run:

```bash
hugo server -D
```
