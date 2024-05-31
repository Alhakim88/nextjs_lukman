function Navbar () {
    return (
    <header className="flex item-center justify-between bg-gray-700 px-1 py-0.5">
    <h1 className="text-3xl font-bold text-white ml-6 mt-0.25">Logo</h1>
    <nav>
    <ul className="flex gap-6">
    <li className="rounded-md p-2 hover:bg-red-500 text-white">Home</li>
    <li className="rounded-md p-2 hover:bg-yellow-500 text-white">About</li>
    <li className="rounded-md p-2 hover:bg-lime-500 text-white">Service</li>
    <li className="rounded-md p-2 hover:bg-blue-500 text-white">Contact</li>
    </ul>
    </nav>
    </header>
    );
}

export default Navbar