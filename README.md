# 🎾 Project Breakpoint

A modern, responsive website for Project Breakpoint - a tennis non-profit organization providing free tennis programs and mentorship to underserved youth in Fullerton and San Diego.

## 🌟 About Project Breakpoint

Project Breakpoint is dedicated to breaking down barriers through tennis, providing free tennis instruction and mentorship to underserved youth. Our mission is to create pathways to college scholarships and lifelong success through the sport of tennis.

### Key Features:
- **Free Programs**: 100% free tennis programs for all participants
- **Professional Coaching**: Qualified tennis instructors and mentorship
- **Community Building**: Strong relationships and support networks
- **College Pathways**: Creating opportunities for scholarships and higher education

## 🚀 Website Features

### 🏠 **Home Page**
- **Hero Section**: Compelling mission statement with background imagery
- **Impact Statistics**: Real-time statistics (200+ kids served, 100% free programs)
- **Core Values**: Accessibility, Excellence, and Community
- **Call-to-Action**: Direct links to events and donation pages

### 👥 **About Page**
- **Organization Story**: Mission, vision, and impact
- **Impact Statistics**: Visual representation of our reach
- **Team Information**: Founder profiles and backgrounds
- **Modern Design**: Tailwind CSS styling with responsive layout

### 📅 **Events Page**
- **Event Listings**: Dynamic event management system
- **Countdown Timer**: Interactive countdown for upcoming events
- **Registration System**: Integrated popup forms for volunteer registration
- **Partnership Inquiries**: Dedicated form for partnership opportunities
- **Email Notifications**: Stay updated on program launches

### 💰 **Donation Page**
- **Venmo Integration**: Direct payment processing via Venmo
- **QR Code**: Easy mobile scanning for donations
- **Impact Stories**: Showcasing how donations make a difference
- **Multiple Amounts**: Preset and custom donation options
- **Transparent Funding**: Clear breakdown of where donations go

### 📞 **Contact Page**
- **Contact Form**: Integrated form with MongoDB backend
- **Service Areas**: Fullerton, San Diego, and Orange County
- **Multiple Contact Methods**: Email, phone, and form submissions
- **Real-time Validation**: Form validation and error handling

## 🛠️ Technology Stack

### **Frontend**
- **React.js**: Modern JavaScript framework for building user interfaces
- **React Router**: Client-side routing for single-page application
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Helmet**: SEO optimization and meta tag management

### **Backend**
- **Vercel Functions**: Serverless API endpoints
- **MongoDB**: NoSQL database for storing contact form submissions
- **MongoDB Atlas**: Cloud database service

### **Deployment**
- **Vercel**: Hosting and deployment platform
- **GitHub**: Version control and code repository

### **External Integrations**
- **Venmo**: Payment processing for donations
- **Google Forms**: Volunteer registration (external link)

## 📁 Project Structure

```
theprojectbreakpoint.org/
├── public/                 # Static assets
│   ├── ClinicPictures/    # Tennis clinic images
│   ├── PlayerPictures/    # Player and logo images
│   └── venmoQR.jpg        # Venmo QR code
├── src/
│   ├── components/        # Reusable React components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   └── shared/        # Shared components
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Home page
│   │   ├── About.jsx     # About page
│   │   ├── Contact.jsx   # Contact page
│   │   ├── Events.jsx    # Events page
│   │   └── Donate.jsx    # Donation page
│   ├── styles/           # CSS files
│   └── data/             # Static data files
├── api/                  # Vercel API functions
│   └── contact.js        # Contact form API endpoint
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB Atlas account (for backend functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kylevillepo2/theprojectbreakpoint.org.git
   cd theprojectbreakpoint.org
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   MONGODB_DB=projectbreakpoint
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to your environment variables

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 📧 Contact Form Setup

The contact form is fully integrated with MongoDB and includes:
- **Form Validation**: Client-side and server-side validation
- **Email Notifications**: Automatic email alerts for new submissions
- **Data Storage**: All submissions stored in MongoDB
- **Error Handling**: Comprehensive error handling and user feedback

### API Endpoint
- **URL**: `/api/contact`
- **Method**: POST
- **Data**: Name, email, subject, inquiry type, and message

## 🎨 Design Features

### **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interfaces

### **Modern UI/UX**
- Clean, professional design
- Consistent color scheme (green/emerald theme)
- Smooth animations and transitions
- Accessible design principles

### **Interactive Elements**
- Hover effects on cards and buttons
- Loading states for form submissions
- Success/error feedback messages
- Modal popups for forms

## 🤝 Contributing

We welcome contributions to improve Project Breakpoint's website!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use Tailwind CSS for styling
- Maintain responsive design
- Test on multiple devices
- Update documentation as needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

- Form validation and sanitization
- Secure API endpoints
- Environment variable protection
- HTTPS enforcement in production

## 📊 Analytics

- Vercel Analytics integration
- Performance monitoring
- User behavior tracking
- Conversion tracking

## 🚀 Deployment

The website is automatically deployed to Vercel on every push to the main branch.

### Production URL
- **Website**: [projectbreakpoint.org](https://projectbreakpoint.org)
- **GitHub**: [github.com/kylevillepo2/theprojectbreakpoint.org](https://github.com/kylevillepo2/theprojectbreakpoint.org)

## 📞 Support

For technical support or questions about the website:
- **Email**: proj.breakpoint@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/kylevillepo2/theprojectbreakpoint.org/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React.js** - For the amazing frontend framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For hosting and deployment
- **MongoDB** - For the database solution
- **Our Volunteers** - For making Project Breakpoint possible

---

**Made with ❤️ for the tennis community**

*Project Breakpoint - Breaking Barriers Through Tennis*
