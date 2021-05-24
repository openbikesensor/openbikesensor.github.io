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
