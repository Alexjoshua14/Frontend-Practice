import './globals.css'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'Frontend Practice',
  description: 'Practicing JS and CSS in React Framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
