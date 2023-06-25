import './globals.css'

export const metadata = {
  title: 'Spotify-Clone',
  description: 'A interface clone of spotify, from LuanCK '
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}