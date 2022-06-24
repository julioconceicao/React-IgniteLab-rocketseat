import { Logo } from "./imgs/Logo";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-zinc-800">
            <Logo/>
        </header>
    )
}