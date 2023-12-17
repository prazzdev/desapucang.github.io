export default function NavMenu({ text, target }) {
    return (
        <>
        <a 
            href={target} onClick={() => alert('Under Maintenance.')}
            className="font-inter-bold uppercase font-bold text-sm mx-[1.8em]">{text}</a>
        </>
    )
}