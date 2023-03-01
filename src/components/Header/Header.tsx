import Link from "next/link"

export const Header = () => {
    return (
        <header className="w-full bg-skyblue-400 p-5">
            <div className="flex justify-between">
                <a><img /></a>
                <nav className="text-white text-lg">
                    <ul className="flex gap-7">
                        <Link href="/" className="hover:text-skyblue-100">Categorias</Link>
                        <Link href="/" className="hover:text-skyblue-100">Etiquetas</Link>
                        <Link href="/" className="hover:text-skyblue-100">Portafolio</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

