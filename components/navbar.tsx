import { UserButton, auth } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ModeToggle } from "./mode-toggle";


const Navbar = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        },
    });

    return (
        <div className="border-b md:my-0 mb-auto ">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={stores} className="mr-2" />
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <div className="ml-2">
                        <ModeToggle />
                    </div>
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;