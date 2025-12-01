import {Link, NavLink} from "react-router-dom";
import {sidebarItems} from "~/constants";
import {cn} from "~/lib/utils";

const NavItems = ({handleClick}: { handleClick?: () => void }) => {
    const user = {
        name: "Adrain",
        email: 'contact@jsmastery.pro',
        imageUrl: '/assets/images/david.webp',
    }
    return (
        <section className="nav-items">
            <Link to="/" className="link-logo">
                <img
                    src="/assets/icons/logo.svg"
                    alt="logo"
                    className="w-[30px] h-[30px]"
                />
                <h1>Tourvisto</h1>
            </Link>

            <div className="container">
                <nav>
                    {sidebarItems.map(({id, href, icon, label}) => (
                        <NavLink
                            onClick={handleClick}
                            key={id}
                            to={href}
                            className={({isActive}) =>
                                cn(
                                    "group nav-item flex items-center gap-2 p-2 rounded",
                                    {
                                        "bg-primary-100 !text-white": isActive,
                                    }
                                )
                            }
                        >
                            {({isActive}) => (
                                <>
                                    <img
                                        src={icon}
                                        alt={label}
                                        className={cn(
                                            "size-[20px] transition group-hover:brightness-0 group-hover:invert",
                                            isActive
                                                ? "brightness-0 invert"
                                                : "text-dark-200"
                                        )}
                                    />
                                    <span>{label}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
                <footer className="nav-footer">
                    <img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name || 'David'}/>
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>
                    <button onClick={() => console.log("logout")} className="cursor-pointer">
                        <img src="/assets/icons/logout.svg" alt="Log Out" className='size-6'/>
                    </button>
                </footer>
            </div>
        </section>
    );
};

export default NavItems;
