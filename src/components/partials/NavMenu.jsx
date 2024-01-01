import Image from "next/image"

export default function NavMenu({ text, target, haveChild, child }) {
    if(haveChild ==  undefined) {
        return (
            <a href={target} className="font-inter-bold uppercase font-bold text-sm mx-[1.8em]">{text}</a>
        )
    } else if(haveChild == true) {
        return (
            <>
            <div className="dropdown dropdown-left dropdown-end dropdown-hover">
                <div 
                    tabIndex={0} role="button" 
                    className="font-inter-bold uppercase font-bold text-sm flex flex-row items-center mx-[1.8em]">
                        <span>{text}</span> <span><Image src={'/assets/images/arrow.svg'} width={23} height={23} className="arrow rotate-90" /></span>
                </div>
                <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow-md bg-base-100 w-fit h-fit">
                    {
                    child.map((child, i) => {
                        return <li key={i} className="min-w-[200px] rounded-none -my-[.3em]"><a href={'/' + child.title.replaceAll(' ', '-').toLowerCase()}>{child.title}</a></li>
                    })
                    }
                </ul>
            </div>
            </>
        )
    }
}