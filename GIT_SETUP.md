# Git Repository Setup Guide

This document provides instructions on how to connect your local Git repository to a remote repository on GitHub, GitLab, or any other Git hosting service.

## Connecting to GitHub

1. Create a new repository on GitHub (do not initialize it with README, .gitignore, or license files)
2. Connect your local repository to the GitHub repository:

```bash
# Replace the URL with your GitHub repository URL
git remote add origin https://github.com/yourusername/space-invaders-mobile.git

# Push your local repository to GitHub
git push -u origin main
```

## Connecting to GitLab

1. Create a new repository on GitLab (do not initialize it with README, .gitignore, or license files)
2. Connect your local repository to the GitLab repository:

```bash
# Replace the URL with your GitLab repository URL
git remote add origin https://gitlab.com/yourusername/space-invaders-mobile.git

# Push your local repository to GitLab
git push -u origin main
```

## Connecting to Bitbucket

1. Create a new repository on Bitbucket (do not initialize it with README, .gitignore, or license files)
2. Connect your local repository to the Bitbucket repository:

```bash
# Replace the URL with your Bitbucket repository URL
git remote add origin https://bitbucket.org/yourusername/space-invaders-mobile.git

# Push your local repository to Bitbucket
git push -u origin main
```

## Deploying to Vercel

After pushing to a remote repository, you can connect the repository to Vercel for automatic deployments:

1. Go to [Vercel](https://vercel.com/) and sign in or create an account
2. Click "Import Project" and select your Git provider (GitHub, GitLab, or Bitbucket)
3. Give Vercel permission to access your repositories
4. Select the space-invaders-mobile repository
5. Configure your project:
   - The vercel.json file in the repository already has the necessary configuration
   - It will automatically serve the single HTML file that contains the entire game
6. Click "Deploy"

Vercel will automatically deploy your game whenever you push changes to your repository.

## Project Structure

This project has been simplified to use a single-file approach:
- `space-invaders-single-file.html` - Contains all HTML, CSS, and JavaScript for the game
- `404.html` - Custom error page for invalid URLs
- `vercel.json` - Configuration for Vercel deployment

No server setup or build process is required. You can run the game locally by simply opening the HTML file in a browser. 