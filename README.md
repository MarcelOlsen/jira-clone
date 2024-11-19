
# Jira Clone

A full-featured project management application built with Next.js, inspired by Jira's functionality.

Built with inspiration from [this legend](https://www.youtube.com/@codewithantonio). The culmination of a 2 week long project, which I'm really proud of, as it's the first project of this size for me. It uses Hono for the server, which makes it more type-safe. Also implemented RPC for even more type-safety. Check it out by either signing up through an email and password, or simply use Google or Github!

## Live Demo
Visit [jira.marcelolsen.dev](https://jira.marcelolsen.dev) to try out the application.

## Features

- 🔐 Authentication & Authorization
- 🏢 Workspace Management
- 📊 Project Organization
- ✅ Task Management with:
  - Kanban Board View
  - List/Table View
  - Calendar View
- 👥 Team Member Management
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time Updates
- 📱 Responsive Design

## Tech Stack

- **Runtime**: Bun
- **Framework**: Next.js 14
- **Authentication**: Appwrite
- **Database**: Appwrite
- **Styling**: Tailwind CSS
- **UI Components**:
  - Radix UI
  - Shadcn/ui
- **State Management**:
  - React Query
  - NuQs (URL State)
- **Forms**: React Hook Form + Zod
- **Calendar**: React Big Calendar
- **Charts**: Recharts

## Prerequisites

- [Bun](https://bun.sh) installed on your machine
- Appwrite instance (self-hosted or cloud)

## Getting Started

1. Clone the repository:
``` bash
git clone https://github.com/yourusername/jira-clone.git

cd jira-clone
```

2. Install dependencies:
``` bash
bun install
```


3. Create a `.env.local` file in the root directory with your Appwrite credentials:
``` bash
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
```

4. Run the development server:
``` bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
src/

├── app/ # Next.js app router pages

├── components/ # Shared components

├── features/ # Feature-based modules

│ ├── auth/ # Authentication

│ ├── tasks/ # Task management

│ ├── projects/ # Project management

│ └── members/ # Team member management

├── lib/ # Utility functions

└── types/ # TypeScript types

## Deployment

The project is deployed on Vercel. To deploy your own instance:

1. Fork this repository

2. Create a new project on Vercel

3. Configure the following environment variables:

```

NEXT_PUBLIC_APPWRITE_ENDPOINT=your_endpoint

NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id

```

4. Configure Appwrite:

- Add your deployment domain to Appwrite's platforms list

- Update OAuth providers' callback URLs:

```

https://your-domain.com/api/oauth/callback/[provider]

```

- Update allowed domains in Appwrite console

## Scripts
``` bash
bun dev # Start development server

bun build # Build for production

bun start # Start production server

bun lint # Run linting
```


## Key Features in Detail

### Task Management
- Create, edit, and delete tasks
- Assign tasks to team members
- Set due dates and priorities
- Add descriptions and updates
- Track task status

### Views
- Kanban board for visual task management
- Table view with sorting and filtering
- Calendar view for deadline tracking

### Project Organization
- Create and manage multiple projects
- Organize tasks within projects
- Track project progress

## Troubleshooting

### OAuth Issues
If you encounter OAuth authentication issues:

1. Verify Appwrite Console Settings:
   - Check platform settings
   - Verify OAuth provider configurations
   - Ensure callback URLs are correct

2. Environment Variables:
   - Verify all required environment variables are set
   - Check for any typos in variable values

3. Domain Configuration:
   - Ensure your domain is added to Appwrite's allowed domains
   - Check SSL/HTTPS configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Marcel Olsen
- Website: [marcelolsen.dev](https://marcelolsen.dev)
- Demo: [jira.marcelolsen.dev](https://jira.marcelolsen.dev)
