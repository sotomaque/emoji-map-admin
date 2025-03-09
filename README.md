# EmojiMap Admin Dashboard

<div align="center">
  <img src="public/logo-blur.png" alt="Emoji Map Logo" width="180" height="180" style="border-radius: 12px; margin-bottom: 20px;" />
  <h3>Find places on a map with emoji markers</h3>
  
  <div style="margin-top: 20px;">
    <a href="https://github.com/sotomaque/emoji-map-next">
      <img src="https://img.shields.io/badge/GitHub-Web_App-blue?style=for-the-badge&logo=github" alt="Web App Repository" />
    </a>
    <a href="https://github.com/sotomaque/emoji-map">
      <img src="https://img.shields.io/badge/GitHub-iOS_App-purple?style=for-the-badge&logo=github" alt="iOS App Repository" />
    </a>
  </div>
</div>

Admin dashboard for the EmojiMap application. This dashboard is restricted to administrators of the EmojiMap organization.

## Features

- Secure authentication with Clerk
- Organization-based access control
- Admin-only dashboard
- Type-safe environment variables with T3 Env
- Cyberpunk-themed UI with responsive design for both light and dark modes
- Interactive particle effects and animated backgrounds

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Copy the `.env.example` file to `.env` and fill in the required values:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
pnpm dev
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `CLERK_EMOJIMAP_ORG_ID` | ID of the EmojiMap organization in Clerk |

## UI Components

The application features a cyberpunk-themed UI with custom components:

### Cyberpunk Elements

- **CyberpunkParticles**: Interactive canvas-based particle system that creates a network of connected nodes
- **Animated Backgrounds**: Gradient backgrounds with grid overlays and scanline effects
- **Glowing Elements**: Buttons and UI components with glow effects that respond to user interaction
- **Responsive Design**: All cyberpunk elements are optimized for both light and dark modes

### Custom Components

- **CyberpunkButton**: Gradient-filled buttons with hover effects and optional glow
- **BlurLogo**: Special logo component for the unauthorized page with blur effects
- **Animated Header**: Header with subtle animations and theme-aware styling

## Testing

This project uses Vitest for testing. The tests are located in the same directory as the files they test, with a `.test.ts` or `.test.tsx` extension.

### Running Tests

To run all tests:

```bash
pnpm test
```

To run tests in watch mode:

```bash
pnpm test:watch
```

To run tests with coverage:

```bash
pnpm test:coverage
```

To run tests with the UI:

```bash
pnpm test:ui
```

## Authorization

The application uses Clerk for authentication and authorization. Only users who are members of the EmojiMap organization with the `org:admin` role can access the admin dashboard.

### Authorization Flow

1. When a user visits the site, the server checks if they're an admin in the EmojiMap organization
2. If they are, they're redirected to the admin dashboard
3. If not, they're redirected to the unauthorized page
4. If they sign in from the unauthorized page, the client-side code checks their permissions and redirects them to the admin dashboard if they're an admin

## License

This project is licensed under the MIT License - see the LICENSE file for details.
