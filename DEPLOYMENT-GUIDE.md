# GitHub Pages Deployment Guide

This document explains how to deploy builds from other repositories to this GitHub Pages site, and how to handle path resolution issues.

## Quick Start

### Deploy a Project Build
```bash
cd ~/projects/yogski.github.io
./build-copy.sh --path ~/projects/PROJECT_NAME --output OUTPUT_NAME --repo-root ~/projects/yogski.github.io
```

**Example - Deploy Crosswords Maker:**
```bash
# 1. Build the source project first
cd ~/projects/crosswords-maker-ui
npm run build

# 2. Deploy to GitHub Pages
cd ~/projects/yogski.github.io
./build-copy.sh --path ~/projects/crosswords-maker-ui --output crosswords-maker-ui-v2 --repo-root ~/projects/yogski.github.io

# 3. Commit and push
git add crosswords-maker-ui-v2/
git commit -m "fix: resolve crosswords-maker-ui-v2 asset paths"
git push
```

## Understanding the Path Problem

### Why Assets Return 404

When deploying Single Page Applications (Vite, Create React App, etc.) to GitHub Pages subdirectories, assets fail to load:

```
GET https://yogski.github.io/assets/Crossword-Dln-XB2z.js → 404 Not Found
```

**Root Cause:**
1. Build tools generate JavaScript/CSS with absolute paths: `/assets/file.js`
2. When served from `yogski.github.io/crosswords-maker-ui-v2/`, the browser looks for `/assets/` at domain root
3. Assets actually exist at `yogski.github.io/crosswords-maker-ui-v2/assets/`

### Example: Vite Build Output

**Source HTML** (`vite` dev server uses `/` as root):
```html
<script src="/src/main.tsx"></script>
<link rel="icon" href="/favicon.ico" />
```

**Compiled HTML** (still has root-relative paths):
```html
<script src="./assets/index-Dck_VEzk.js"></script>
<link rel="icon" href="./favicon.ico" />
```

**But the bundled JavaScript contains hardcoded asset references:**
```javascript
// In assets/index-Dck_VEzk.js - still uses absolute paths!
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[
  "assets/Crossword-Dln-XB2z.js",      // ❌ Resolves to /assets/
  "assets/gridBitmask-hsA6u_tc.js",
  // ...
])))
```

## The Solution: `build-copy.sh` Path Transformation

The script automatically fixes all path references:

### 1. HTML File Paths
```diff
- <link rel="icon" href="/favicon.ico" />
+ <link rel="icon" href="./favicon.ico" />
- <script type="module" src="/src/main.tsx"></script>
+ <script type="module" src="./src/main.tsx"></script>
```

### 2. Bundled Asset References
```javascript
// Before (hardcoded in Vite bundles)
d=(m.f||(m.f=["assets/Crossword-Dln-XB2z.js", ...]))

// After (transformed by build-copy.sh)
d=(m.f||(m.f=["./assets/Crossword-Dln-XB2z.js", ...]))
```

Handles both quote types:
- Double quotes: `"assets/file.js"` → `"./assets/file.js"`
- Single quotes: `'assets/file.js'` → `'./assets/file.js'`

## Why Not Fix at Source?

The proper solution is to configure your build tool with a relative base path:

### Vite (Recommended)
Edit `vite.config.ts`:
```typescript
export default defineConfig({
  base: './',  // Use relative paths for deployment
  plugins: [react()],
  // ... rest of config
})
```

### Create React App
Edit `.env` or `.env.production`:
```
PUBLIC_URL=./
```

### Next.js / Other Frameworks
Consult your framework's deployment documentation for base path configuration.

**However**, the `build-copy.sh` script provides a flexible workaround for already-built outputs, useful when:
- Multiple versions share the same source (e.g., v1 and v2)
- You're redeploying without rebuilding
- The source project doesn't have base path configuration

## Troubleshooting

### Assets Still Return 404?

1. **Verify assets folder exists:**
   ```bash
   ls -la crosswords-maker-ui-v2/assets/
   ```

2. **Check the transformation was applied:**
   ```bash
   grep -m 1 "assets/" crosswords-maker-ui-v2/assets/index-Dck_VEzk.js
   # Should show: "./assets/..." not "assets/..."
   ```

3. **Check browser DevTools:**
   - Open DevTools → Network tab
   - Look for 404 errors
   - Click the failed request and check the actual URL

4. **Find remaining absolute paths:**
   ```bash
   grep -r '"/assets' crosswords-maker-ui-v2/  # Should find nothing
   grep -r "'/assets" crosswords-maker-ui-v2/  # Should find nothing
   ```

### CSS Not Loading?

CSS path issues often appear as:
```
Error: Unable to preload CSS for /assets/index.css
```

**Solution:** The `build-copy.sh` script handles CSS files. If CSS still fails:

```bash
# Manually check CSS files
grep "assets/" crosswords-maker-ui-v2/assets/*.css | head -5
```

## Manual Path Fix (If Needed)

If you need to fix paths manually:

```bash
cd YOUR_DEPLOYED_PROJECT

# Fix all asset references in JS files (both quote types)
find . -type f -name "*.js" \
  -exec sed -i 's|"assets/|"./assets/|g; s|'"'"'assets/|'"'"'./assets/|g' {} \;

# Fix HTML absolute paths
find . -type f -name "*.html" \
  -exec sed -i 's|="/|="./|g' {} \;
```

## Deployment Checklist

- [ ] Build the source project: `npm run build`
- [ ] Run `build-copy.sh` with correct paths
- [ ] Verify no 404 errors in browser DevTools
- [ ] Test the app functionality in the deployed location
- [ ] Commit changes: `git add PROJECT_NAME/ && git commit -m "fix: deploy PROJECT_NAME"`
- [ ] Push to GitHub: `git push`
- [ ] Verify on GitHub Pages: `https://yogski.github.io/PROJECT_NAME/`

## Real-World Example

### Deploying crosswords-maker-ui-v2

```bash
# Step 1: Build the source
cd ~/projects/crosswords-maker-ui
npm run build
# Output: dist/ folder created

# Step 2: Deploy to GitHub Pages
cd ~/projects/yogski.github.io
./build-copy.sh \
  --path ~/projects/crosswords-maker-ui \
  --output crosswords-maker-ui-v2 \
  --repo-root ~/projects/yogski.github.io

# Step 3: Verify the fix
grep -m 1 "assets/" crosswords-maker-ui-v2/assets/index-Dck_VEzk.js
# Output: const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./assets/...

# Step 4: Commit
git add crosswords-maker-ui-v2/
git commit -m "fix: resolve crosswords-maker-ui-v2 asset paths with build-copy.sh"
git push

# Step 5: Test in browser
# Visit: https://yogski.github.io/crosswords-maker-ui-v2/
```

## References

- [Vite Deployment Documentation](https://vite.dev/guide/static-deploy.html)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [GitHub Pages Documentation](https://pages.github.com/)
