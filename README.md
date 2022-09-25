# Learn and Focus

This is my entry to Con's Code Compete. Honestly, it's terrible.

My idea was showing the user a random Wikipedia page, and allowing them to reflect on it. It came out okay, but there's a lot I could've done better.

- Add support for the other versions of Wikipedia (this was planned)
- Allow highlighting
- Just fix the UX

It "works", but definetly isn't "production-ready".

A version is being hosted on [my website](http://learnandfocus.the0show.com:3000), but probably only for a week or two (which is why I didn't bother to get a https certificate or setup a reverse proxy)

If you want to run it locally, it uses NodeJS and Express. It's as simple as `npm i` and `node .`.

## What went wrong

Honestly, just about everything. I took too long in the planning phase, most of my time was taken by me trying to call the Wikipedia API, before realizing that I just had to use an iframe, and just more. With more time I could've probably made it better, but _shrug_
