# Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Node.js and npm installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository `portfolio` (or any name you prefer)
5. Make it public
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 2. Update Package.json

Update the `homepage` field in `package.json` with your GitHub username:

```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### 4. Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

This command will:
- Build your React app
- Create a `gh-pages` branch
- Push the built files to GitHub Pages

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### 6. Access Your Portfolio

Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/portfolio`

It may take a few minutes for the changes to be reflected.

## Updating Your Portfolio

Whenever you make changes to your portfolio:

1. Make your changes
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update the `homepage` field in `package.json` with your custom domain

## Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`

### Deployment Issues
- Ensure your GitHub repository is public
- Check that the `homepage` field in `package.json` matches your repository URL
- Verify that GitHub Pages is enabled in repository settings

### 404 Errors
- Make sure you're using the correct URL format
- Check that the `gh-pages` branch exists and has content
- Wait a few minutes for changes to propagate

## Support

If you encounter any issues, check the [GitHub Pages documentation](https://docs.github.com/en/pages) or create an issue in this repository.
