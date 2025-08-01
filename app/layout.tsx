import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "StudyForge",
	description: "This app lets users create study decks, generate flashcards, review them using spaced repetition, and take notes with tagging. It’s a great showcase of real-time data and fast API handling."
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <html lang="en">
		<body className="antialiased">
			{children}
		</body>
	</html>
}
