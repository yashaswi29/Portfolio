# DevOps Engineer Portfolio

A minimal, professional portfolio website built with React and Python, featuring a clean design with a focus on DevOps and cloud engineering expertise.

## Features

- Clean, minimalist design
- Responsive layout
- Dark/light mode toggle
- Contact form with Python backend
- Project showcase
- Professional experience timeline
- Technology stack display
- Social media integration

## Prerequisites

- Node.js (v18 or higher)
- Python (v3.8 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd devops-portfolio
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
pip install -r backend/requirements.txt
```

## Running the Application

1. Start the frontend development server:
```bash
npm run dev
```

2. In a separate terminal, start the backend server:
```bash
npm run backend
```

The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:5000`.

## Project Structure

```
.
├── backend/
│   ├── app.py           # Flask backend server
│   └── requirements.txt # Python dependencies
├── src/
│   ├── components/      # React components
│   ├── context/         # React context providers
│   ├── pages/          # Page components
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── package.json        # Node.js dependencies
```

## Customization

1. Update personal information in `src/pages/Home.tsx` and `src/pages/About.tsx`
2. Modify projects in `src/pages/Projects.tsx`
3. Update contact information in `src/pages/Contact.tsx`
4. Customize social links in `src/components/Footer.tsx`

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Flask
- Vite