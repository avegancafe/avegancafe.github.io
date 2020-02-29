---
title: Time to First Wow
date: "2019-10-10"
description: "A summary of my thoughts on barriers to entry of technologies"
---

![path drawing](./buildPath.jpg)

<span class="subtext image-description">
Disclaimer: This is entirely my opinion; there are many ways to slice it, this is just my favorite!
</span>

A couple of weeks ago I was starting up a new project and needed a file server
to serve some static assets. I didn’t need anything fancy, really just to serve
a bunch of files from a folder. There are a lot of ways you can do this, whether
it’s with a WEBrick, a small python http.server, generate a rails app (or any of
the [ innumerable other variations ](https://gist.github.com/willurd/5720255)) —
those aren’t my go-to’s though. Although they definitely get the job done, you
don’t have much control over anything, and I don’t want to deal with setting up
a bunch of config for weeks, especially since I’m doing this in my free time. So
I picked my personal favorite flavor, which is spinning up a tiny express server
that looks something like this:

```js
const express = require('express')
const app = express()

app.use('/', express.static('.'))
app.listen(3000, () => console.log('Listening on port 3000...'))
```

I was ecstatic after writing this because it reminded me exactly why I fell in
love with JavaScript + Node.js: it has an incredible Time to First Wow ™. What I
mean by that is, the amount of time it takes to go from having nothing to having
something someone can actually pick up and play with is seconds. Coming from my
normal day to day where I’m working in pretty robust JSON APIs, web servers, and
SPAs, where much of my time is spent getting lost in configuration options,
reading tomes full of docs, or figuring out why my monitoring alerts aren’t
firing, this little node applet was a nice crisp breath of fresh air. Technology
should empower us to achieve real-world outcomes, not just invent new technical
problems to bikeshed about or make us think about decisions orthogonal to our
end-goal.

------

When it comes down to it, what I love about a nice short Time to First Wow ™ is
that it helps users get their hands on whatever I’m building as soon as
possible. While the above example is of course very small, keeping with this
idea of small, simple solutions from day one can help you push towards this
right out of the gate. Assuming your users are cognizant that you’re trying to
gather early feedback, this can be a great tool to get eyes on your project
early in its development. From there, you can aggregate that user feedback,
iterate on ideas and features, and start adding real user value right from the
beginning. Because at the end of the day, what’s the point of creating
applications if not to fulfill real end-user needs?

