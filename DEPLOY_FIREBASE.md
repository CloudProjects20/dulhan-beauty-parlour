# Deploying to Firebase Hosting

This project uses Next.js (App Router). There are two deployment options:

1. Static Export (simple, no server-side rendering)
2. Full Next.js on Cloud Run / Firebase Functions (supports SSR)

Option A — Static export (quick, best when your site is fully static):

1. Install Firebase CLI (if you don't have it):

```bash
npm install -g firebase-tools
```

2. Login and select your Firebase project:

```bash
firebase login
firebase use --add
# follow prompts and choose your Firebase project
```

3. Build and export the site (this creates the `out/` folder):

```bash
npm run deploy:firebase:prepare
```

4. Deploy to Firebase Hosting:

```bash
npm run deploy:firebase
```

Notes: 
- `next export` does not support server-side rendering (App Router features like server components, middleware, and API routes).
- If your site uses SSR or dynamic server behavior, use Option B.

Option B — Full Next.js (Cloud Run or Firebase Functions):

- For full Next.js (SSR), deploy the built app to a Node server or Cloud Run and connect Hosting to it using rewrites, or use the Firebase `nextjs` adapter (requires additional setup).
- Recommended: Deploy to Vercel for easiest Next.js support, or follow the Next.js on Cloud Run guide and configure `firebase.json` rewrites to the Cloud Run service.

If you want, I can:
- Configure a Cloud Run deployment (Dockerfile + GitHub Actions) so Hosting rewrites to Cloud Run.
- Or run the interactive `firebase init hosting` for you and deploy (requires Firebase CLI and your account).

