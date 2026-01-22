## 🎮 Game Hub

A modern video game discovery platform built with React and TypeScript. Users can search for games, filter by genre, and view ratings.

 ![image alt](https://github.com/keerthivasan-mp4/GameHub/blob/412950a8bea6aa9dca160fc27374e516886263f6/demo.png)

## 🚀 Features
- **Game Library:** Browse thousands of games using the RAWG API.
- **Filtering:** Filter by genre, platform (PC, PlayStation, Xbox), and rating.
- **Dark Mode:** Fully responsive dark-themed UI.

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Styling:** Chakra UI
- **State Management:** React Hooks

## 💻 Getting Started

### Prerequisites
- Node.js installed
- Chakra UI
```bash
npm i @chakra-ui/react
```

### Installation
 1.Clone the repository:
   ```bash
   git clone [https://github.com/keerthivasan-mp4/Game-Hub.git](https://github.com/keerthivasan-mp4/Game-Hub.git)
   ```
2.Navigate to Project Folder
   ```bash
   cd Game-Hub
   ```
3.Install dependencies:
   ```bash
   npm install
   ```
4.Start the Server
   ```bash
   npm run dev
   ```
##Project Structure
```text
Game-Hub/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── logo.svg              
│   │   └── No-Image.webp       
│   ├── component/
│   │   ├── services/
│   │   │   ├── api-client.ts
│   │   │   └── ImageUrl.ts
│   │   ├── ColorMode.tsx
│   │   ├── CriticScore.tsx
│   │   ├── GameCard.tsx
│   │   ├── GameCardContainer.tsx
│   │   ├── GameCardSkeleton.tsx
│   │   ├── GameGrid.tsx
│   │   ├── GameHeading.tsx
│   │   ├── Genre.tsx
│   │   ├── NavBar.tsx
│   │   ├── PlatformIcon.tsx
│   │   ├── PlatformSelector.tsx
│   │   ├── SearchBox.tsx
│   │   └── SortBy.tsx
│   ├── Hooks/
│   │   ├── useData.ts
│   │   ├── useGame.ts
│   │   ├── UseGenre.ts
│   │   └── usePlatforms.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── theme.ts
```

## API
The app uses the RAWG API to Games data.
