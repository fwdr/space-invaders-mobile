# Retro Space Invaders Mobile Game

A mobile-optimized web-based Space Invaders game with retro graphics.

## Features

- Mobile-optimized controls with full-screen touch movement
- Tap anywhere to shoot, swipe anywhere to move
- Smart layout adaptation for mobile browsers including Safari's URL bar
- Retro-style pixelated graphics with optimized sprite sizes
- Adaptive scaling system that automatically adjusts to screen size
- Score tracking with local storage for high scores
- Responsive design for all screen sizes
- Destructible shields that protect your ship
- 100 points per alien destroyed
- Progressive difficulty: enemies fire more frequently as they change direction
- Classic formation with 10 enemies per row

## How to Play

1. Open the game in a web browser on your mobile device or desktop
2. Click the "START GAME" button on the welcome screen
3. Controls:
   - **Mobile**: Tap anywhere to shoot, swipe anywhere to move
   - **Desktop**: Use arrow keys to move left/right, spacebar to shoot
4. Use the shields to block enemy fire
5. Destroy all the invaders before they reach the bottom of the screen!
6. Be careful! Aliens will increase their attack rate each time they change direction

## Deployment Options

### Vercel Deployment (Recommended)

This game is configured for easy deployment to Vercel:

1. Fork or clone this repository
2. Install the Vercel CLI: `npm install -g vercel`
3. Navigate to the project directory
4. Run: `vercel login` and follow the prompts
5. Deploy with: `vercel`
6. For production deployment: `vercel --prod`

Alternatively, connect your GitHub repository to Vercel's dashboard for automatic deployments.

### Running Locally

You can run this game locally by following these steps:

#### Option 1: Directly open HTML file
1. Clone or download this repository
2. Open the `index.html` file in a web browser

#### Option 2: Using the included Node.js server
1. Clone or download this repository
2. Make sure you have Node.js installed
3. Run one of the following commands in the project directory:
   ```
   npm start
   ```
   or
   ```
   node server.js
   ```
4. The game will be available at:
   - On your computer: http://localhost:3000
   - On mobile devices: [YOUR_COMPUTER_IP_ADDRESS]:3000

## Game Features

- Three different enemy types with unique pixel art designs
- Full classic formation with 10 enemies per row
- Improved touch controls: move by swiping anywhere on screen
- Fast tap detection to fire bullets
- Increased player speed for more responsive controls
- Intelligent adaptive scaling that fits any screen size
- Dynamic resizing of all game elements based on screen dimensions
- Enemy movement patterns similar to classic Space Invaders
- Auto-scaling to fit different mobile screen sizes (including Safari URL bar)
- Only bottom-most enemies in each column can fire bullets
- Dynamic difficulty: enemy fire rate increases with each direction change
- Score tracking and high score persistence
- Destructible shields that take damage from both player and enemy fire
- Classic scoring system (100 points per alien)
- Optimized player visibility on mobile devices

## Mobile Browser Compatibility

- The game automatically detects mobile browsers and adjusts the layout
- Special handling for Safari's URL bar to ensure all game elements remain visible
- Intelligent scale factor calculation based on screen dimensions
- Minimum and maximum scale constraints to ensure optimal play experience
- Extra scaling adjustments for very small screens
- Seamless repositioning and resizing of all game elements when orientation changes
- Larger, more visible player ship gun on mobile devices
- Full-screen touch controls with no restricted play areas

## Technical Details

- Advanced proportional scaling system that maintains game balance on any screen size
- Automatic recalculation of game scale when screen size or orientation changes
- All game elements (player, enemies, bullets, shields) scale proportionally
- Reference sizing system based on 800×600 baseline (landscape) or 400×700 (portrait)
- Minimum scale factor of 0.4 to ensure visibility on all devices
- Dynamic padding adjustment for enemy formations to fit any screen size
- Pixel-perfect rendering with proper rounding of scaled dimensions
- Touch timing detection to distinguish between taps and swipes
- Vercel-ready configuration for easy cloud deployment

## Future Improvements

This is a basic implementation. Future improvements could include:
- Sound effects and music
- Power-ups and multiple levels
- Player lives
- More enemy types
- Boss battles 