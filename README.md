# FoodSaver - Reduce Food Waste, Save Money

FoodSaver is a web application that connects consumers with local businesses to reduce food waste while providing great deals on quality food items. Businesses can list their surplus food items at discounted prices, and customers can browse and purchase these items for pickup.

## Features

- **For Customers**
  - Browse local deals on surplus food
  - Filter by category, location, and pickup time
  - Create an account and manage orders
  - Rate and review businesses
  - Save favorite businesses

- **For Businesses**
  - Easy-to-use dashboard to manage deals
  - Real-time analytics and insights
  - Manage business profile and settings
  - Track sales and impact metrics
  - Customer reviews and ratings

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI, Heroicons
- **Authentication**: NextAuth.js
- **Database**: Prisma with your choice of database
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/foodsaver.git
   cd foodsaver
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   DATABASE_URL="your-database-url"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
foodsaver/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable components
│   ├── business/          # Business-related pages
│   ├── deals/             # Deal-related pages
│   └── ...
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all the businesses and users helping to reduce food waste
- Inspired by Too Good To Go and similar initiatives
- Built with modern web technologies and best practices 