# Tour Planning Assistant

A comprehensive web application for musicians and bands to efficiently schedule tour dates, coordinate travel logistics, and send automated itineraries to all involved parties.

## 🎵 Features

### Tour Management
- Create and manage tours with start/end dates, descriptions, and budgets
- Invite band members, crew, and other stakeholders with role-based access
- Track tour status (planning, active, completed, cancelled)

### Venue Management
- Search venues by location, capacity, and availability
- Store venue contact information, technical specs, and past performance notes
- Track booking status with each venue (inquiry, pending, confirmed, contracted)

### Event Scheduling
- Add shows and events with date, time, venue, and ticket information
- View calendar-based visualization of all scheduled events
- Manage additional events like radio appearances, interviews, etc.

### Travel Logistics
- Plan optimized travel routes between venues
- Book and track transportation (van, bus, flights)
- Send travel details to all tour participants

### Accommodation Management
- Book and track accommodations for each location
- Store preferences for band and crew members
- Provide accommodation details for each tour stop

### Equipment and Gear
- Create and manage lists of required gear
- Track equipment being brought vs. rented at each venue
- Access to technical riders and venue specs

### Itinerary Generation
- Generate detailed daily itineraries for all tour participants
- Send automated notifications via email or in-app
- Share relevant details with venues and local contacts

### Budget Tracking
- Create and monitor tour budgets
- Record expenses and income for each show
- Generate financial summaries and reports

## 🛠️ Technology Stack

### Frontend
- React.js with TypeScript
- Redux for state management
- Material-UI component library
- Google Maps integration
- FullCalendar for calendar views

### Backend
- Node.js with Express
- RESTful API architecture
- JWT authentication
- Prisma ORM for database interactions
- SendGrid for email notifications

### Database
- PostgreSQL
- Redis for caching
- Elasticsearch for advanced search

### DevOps
- Docker containerization
- GitHub Actions for CI/CD
- AWS/Google Cloud Platform deployment
- HTTPS encryption

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL (v15+)
- Redis
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/touring-assistant-20250703.git
cd touring-assistant-20250703
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your database credentials and API keys
```

4. Run database migrations
```bash
npm run db:migrate
```

5. Install frontend dependencies
```bash
cd ../frontend
npm install
```

6. Start development servers
```bash
# In one terminal (backend)
cd backend
npm run dev

# In another terminal (frontend)
cd frontend
npm start
```

7. Access the application at `http://localhost:3000`

## 📦 Project Structure

```
touring-assistant-20250703/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── config/          # Configuration files
│   │   ├── controllers/     # Request handlers
│   │   ├── middlewares/     # Express middlewares
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helper functions
│   │   └── server.js        # Server entry point
│   ├── prisma/              # Prisma schema and migrations
│   └── package.json
├── frontend/                # React frontend
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── pages/           # Page components
│   │   ├── redux/           # Redux state management
│   │   ├── services/        # API services
│   │   ├── utils/           # Helper functions
│   │   ├── App.tsx          # Main App component
│   │   └── index.tsx        # Entry point
│   └── package.json
├── docker/                  # Docker configuration
├── .github/                 # GitHub Actions workflows
├── docs/                    # Documentation
└── README.md                # Project documentation
```

## 💡 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

- All user authentication is handled securely with JWT
- Passwords are hashed and never stored in plain text
- Role-based access control for sensitive operations
- HTTPS enforced for all connections
- Regular security updates and dependency monitoring

## 📱 Mobile Responsiveness

The application is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile phones
- Progressive Web App (PWA) capabilities for offline access

## 🔄 Integrations

- Calendar applications (Google Calendar, iCal)
- Mapping services (Google Maps, Mapbox)
- Email services for notifications
- Social media platforms for tour announcements
- Music industry platforms (Bandsintown, Songkick)

## 🌟 Future Enhancements

- Native mobile apps (iOS/Android)
- AI-powered route optimization
- Integration with ticketing platforms
- Fan engagement features
- Merchandise inventory management
- Advanced analytics and reporting
- Blockchain-based payment tracking

## 📞 Support

For support, email support@tourplanner.example.com or open an issue in the GitHub repository.