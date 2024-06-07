## Pre-reqs

- Node 22+ (yes, really)
- PNPM 9
- Need `node-gyp` installed

```shell
npm install -g node-gyp
```

- Visual Studio 2022 w/ ClickOnce enabled (CodeSign.exe)
  - Add CodeSign.exe to `PATH`
- Visual Studio 2022 w/ latest "Desktop development with C++" installed
- `winget install NASM.NASM` (to build Node on Windows)
- `winget install Python.Python.3.10` (to build Node on Windows)

## Git Submodules

We submodule'd `src/electron` to avoid issues with retaining the FS replacement script in other ways

## Workspaces

**Do not change the workspaces to include _all_ subpackages from `src/electron`, we only need `electron/lib/node` deps; not any of the subpackages**

## Usage

```shell
pnpm make
```

## Making Node

We need a custom build of Node currently to support accessing `internal/fs/utils` from the `asar` module.

On Windows, with pre-req installed:

```shell
cd vendor/node && .\vcbuild
```

Then:

```
cp out/Release/node.exe ../../..
```

A pre-built Node binary is included in the repo, but you can build it yourself if you want to.
