import { useRef } from "react";
import { Link } from "react-router-dom";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import {NavItems} from "../components";

const MobileSidebar= () => {
    const sidebarRef = useRef<SidebarComponent>(null);

    const toggleSidebar = () => {
        sidebarRef.current?.toggle();
    };

    return (
        <div className="mobile-sidebar wrapper">
            <header className="flex justify-between items-center p-4">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/assets/icons/logo.svg" alt="logo" className="w-[30px] h-[30px]" />
                    <h1>Tourvisto</h1>
                </Link>
                <button onClick={toggleSidebar}>
                    <img src="/assets/icons/menu.svg" alt="menu" className="w-7 h-7" />
                </button>
            </header>

            <SidebarComponent
                width={270}
                enableGestures={false}
                ref={sidebarRef}
                created={() => sidebarRef.current?.hide()}
                closeOnDocumentClick={true}
                showBackdrop={true}
                type="Over"
            >
                <NavItems handleClick={toggleSidebar} />
            </SidebarComponent>
        </div>
    );
};

export default MobileSidebar;
