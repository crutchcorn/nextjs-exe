# Tauri + React RSC Exploration

> **This is a bad idea that should not be used in production**.

What if we could get Next.js' SSR mode running in Tauri as a sidecar? That would allow us to use React's RSC mechanisms in our apps,
which could serve interestingly.

## Architecture Diagram

![](./assets/explainer.png)

> This isn't a great visual explainer. I wrote it quickly [while live on Twitch](https://twitch.tv/crutchcorn).

## Unfinished Warning

This project is _mostly_ finished but is not tested, as we are blocked by this issue:

https://github.com/nodejs/single-executable/issues/100

### Will it work?

I'm not sure, because our `fs` patch supposedly can read from `Buffer`s like `sea.getAsset` returns, however this **really heavily** expects
Next.js to not introspect the `dir` path as if it were a string in any way outside of using the `fs` APIs. I'm doubtful this is the case, but I could be wrong.
