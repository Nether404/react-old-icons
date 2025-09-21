# 🪟 React Old Windows Icons - Web Browser

A retro Windows 98-style web interface to browse and discover all available icons in the library.

## Features

- **🎨 Authentic Windows 98 UI** - Complete with title bars, status bars, and retro styling
- **🔍 Real-time Search** - Search by icon name, original name, or category
- **📁 Category Filtering** - Filter by Games, Software, System, Windows versions, etc.
- **📏 Adjustable Preview Size** - Slider to change icon size from 16px to 64px
- **📋 One-Click Copy** - Click any icon to copy the React component code
- **⌨️ Keyboard Shortcuts** - Ctrl/Cmd+F to focus search, Escape to clear
- **📱 Responsive Design** - Works on desktop and mobile devices

## Usage Instructions

### For Library Users:
1. Browse the icons visually
2. Use the search bar to find specific icons
3. Filter by category if needed
4. Click on any icon to copy the component code
5. Paste the code directly into your React project

### For Development:
1. Open `index.html` in a web browser
2. The page loads `names.json` to display all available icons
3. Icons are loaded directly from GitHub repository

## Files

- `index.html` - Main page structure
- `styles.css` - Windows 98 retro styling
- `script.js` - Interactive functionality
- `names.json` - Icon data (copied from root)

## Local Development

To run locally:
```bash
# Navigate to the page directory
cd page

# Start a simple HTTP server (required for loading JSON)
python3 -m http.server 8000
# or
npx serve .

# Open http://localhost:8000 in your browser
```

## Features Breakdown

### 🎯 Icon Display
- Grid layout with responsive columns
- Hover effects with Windows 98 styling
- Error handling for missing images
- Lazy loading for performance

### 🔧 Search & Filter
- Case-insensitive search across all fields
- Category dropdown with icon counts
- Real-time filtering (no submit button needed)
- Clear filters with Escape key

### 📊 Statistics
- Total icon count display
- Filtered results counter
- Status bar with current state
- Live updates as you filter

### 🎁 Easter Eggs
- Konami code easter egg (↑↑↓↓←→←→BA)
- Windows 98 sound effect placeholders
- Retro loading animations

## Customization

You can easily customize:
- Color scheme in CSS variables
- Grid layout and sizing
- Search functionality
- Icon URL patterns

## Browser Compatibility

Works in all modern browsers that support:
- ES6+ JavaScript
- CSS Grid
- Fetch API
- Clipboard API

For older browsers, fallbacks are provided where possible.
