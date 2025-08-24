# Portfolio Website

A high-performance, modern portfolio website built with Next.js 15, featuring smooth animations, optimized performance, and responsive design.

## 🚀 Live Demo

[View Portfolio](https://portfolio-shivang.vercel.app/)

## ✨ Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Performance Optimized**: Lazy loading, code splitting, Memoization
- **Smooth Animations**: Custom typing animations, scroll-triggered animations
- **Responsive Design**: Mobile-first approach with seamless mobile experience
- **SEO Optimized**: Server-side rendering with proper meta tags
- **Accessibility**: Motion preferences respected, keyboard navigation

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) 

## 🏃♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with font optimization
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation component
│   │   └── Footer.tsx      # Footer component
│   └── sections/
│       ├── About.tsx       # About section
│       ├── Projects.tsx    # Projects showcase
│       └── Contact.tsx     # Contact form
└── utils/
    └── Performance.ts
```

## ⚡ Performance Features

### Implemented Optimizations

- **Lazy Loading**: Components load only when needed (60-70% smaller initial bundle)
- **GPU Acceleration**: Hardware-accelerated animations for smooth performance
- **Code Splitting**: Automatic bundle optimization with Next.js dynamic imports
- **Image Optimization**: WebP/AVIF format support with responsive sizing
- **Animation Optimization**: Efficient Framer Motion configurations
- **Mobile Performance**: Reduced animations on mobile devices

### Performance Results

- **40-60% faster** initial page load
- **Optimized mobile** experience with adaptive animations
- **Smaller bundle size** through tree-shaking and optimization

##  Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy automatically with zero configuration

## SEO 

### Built-in SEO Features

- Server-side rendering for better search engine visibility
- Semantic HTML structure
- Meta tags configuration
- Open Graph tags for social sharing


## Known Issues & Solutions

### Hydration Warnings

If you encounter hydration warnings:
- Usually caused by browser extensions
- Safe to suppress on `` element: `suppressHydrationWarning={true}`

### Animation Performance

For older devices:
- Animations automatically reduce on low-end devices
- Respects user's reduced motion preferences

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Contact

Your Name - [skjnvspn@gmail.com](mailto:skjnvspn@gmail.com)

Project Link: [https://github.com/shivang-jnv/shivang-portfolio](https://github.com/shivang-jnv/shivang-portfolio)

***

**Star this repository** if you found it helpful!

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons

***

*Built with ❤️ and optimized for performance*
