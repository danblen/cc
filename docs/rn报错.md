# 1. Watchman error

metro-file-map: Watchman crawl failed. Retrying once with node crawler.
Usually this happens when watchman isn’t running. Create an empty `.watchmanconfig` file in your project’s root folder or initialize a git or hg repository in your project.

```
$ watchman shutdown-server
$ watchman
```

Run this in your terminal