## Cozey Frontend Challenge
A carousel component that displays media files (videos).
<br/><br/>

## Getting Started
1. clone the repository file from the provided url.
2. Unzip the file:
    ```
    git clone https://github.com/ma-yo-wa/cozey-coding-challenge
    ```
3. Unzip the file:
    ```
    cd cozey-coding-challenge
    ```    
4. Install dependencies:
    ```
    npm ci
    ```
5. Build the frontend:
    ```
    npm run build
    ```    
<br/>

## Usage
1. Start vite server
    ```
    npm start
    ```
2. Visit http://localhost:5173 on any browser

## External Dependencies
~ React<br>
~ Styled Components<br>
<br/>

## Features
1. The first video in the carousel should play automatically when the page
loads. As the user navigates using the left (←) and right (→) arrows, the carousel
should shift through the videos. Only the currently visible video should be interactive (e.g., play/pause); all
others should remain inactive.
2. Implement infinite scrolling, so the user can continuously navigate in both
directions without an endpoint. Provide visible next/previous arrows for navigation.
3. Highlight or visually indicate which video is currently in focus.
4. The carousel must be fully responsive, working across all device sizes. Ensure the design is pixel-perfect based on the provided Figma file.