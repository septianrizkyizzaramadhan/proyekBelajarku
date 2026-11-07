import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div>
                <h1>GenesisDev</h1>
                <div>
                    <Link href='#'>Home</Link>
                    <Link href='#'>About</Link>
                </div>
            </div>
        </nav>
    )
}