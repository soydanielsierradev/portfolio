# Daniel Sierra — Portfolio

Personal site of Daniel Sierra, a telecommunications engineer who builds
software. It presents his work in IoT monitoring, industrial protocols, and the
web interfaces that turn sensor data into something people can use.

Live at **[danielsierra.vercel.app](https://danielsierra.vercel.app)**.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** with [shadcn/ui](https://ui.shadcn.com) and [Magic UI](https://magicui.design)
- **content-collections** for the MDX blog
- Deployed on **Vercel**

## Running locally

```bash
pnpm install
pnpm dev
```

The site is driven by a single config file: [`src/data/resume.tsx`](./src/data/resume.tsx).
Identity, skills, work history, education, and projects all live there.

```bash
pnpm lint    # eslint
pnpm build   # production build
```

## Credits

Based on the open-source portfolio template by
[Dillion Verma](https://github.com/dillionverma/portfolio). The layout and
component foundation are his; the content, technology marks, IoT-focused
sections, SEO routes, and copy are original to this fork.

## License

[MIT](./LICENSE). Original template © Dillion Verma; personalization and
additions © Daniel Sierra.
