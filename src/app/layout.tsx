import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                       analytics,
                                       dashboard
                                   }: {
    children: React.ReactNode
    analytics: React.ReactNode
    dashboard: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {analytics}{dashboard}
        {children}</body>
        </html>
    )
}
