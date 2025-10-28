# AI Image Enhancer

A minimal React app that uploads an image and uses a remote enhancement API to upscale, denoise and restore images. Built with React, Axios and Tailwind CSS utility classes.

## Features
- Upload images (JPG, PNG, WEBP)
- Asynchronous upload + polling for enhanced result
- Simple responsive UI with preview for original and enhanced images
- Tailwind-based styling for a clean, minimal design

## Requirements
- Node.js 16+
- npm or pnpm
- A valid API key for the image enhancement service (PicWish)

## Setup (Windows)
1. Clone the repo

2. Change directory:
   cd Img-Enhancer
3. Install dependencies:
   npm install
4. Add environment variable (recommended)
   - Create a `.env` in project root:
     REACT_APP_API_KEY=your_api_key_here`
5. Start the dev server:
   npm start
   (or `npm run dev` if your template uses Vite)

## Usage
1. Open the app in the browser (usually http://localhost:3000).
2. Click or drag an image into the upload area.
3. Wait for the enhancement process — progress shows a spinner.
4. View and download the enhanced image.

## Project structure (key files)
- src/
  - App.jsx — main UI / state
  - src/Components/
    - ImageUpload.jsx — upload UI
    - ImagePreview.jsx — original / enhanced preview
    - Loading.jsx — spinner component
  - src/utils/
    - apicall.js — Axios calls + polling for enhancement result
