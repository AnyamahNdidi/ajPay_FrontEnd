import {IconBaseProps, IconType } from "react-icons"
import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import {AiOutlineTranslation } from 'react-icons/ai';
import {IoIosNotifications } from 'react-icons/io';

interface NavCon
{
    name: string;
    icon: IconType;
    to: string; 
}

export const SideBarItem: NavCon[] = [
    
    {
        name: "Home",
        icon: (prop: IconBaseProps) => <AiFillHome />,
        to:"/dash"
        
    },
    {
        name: "Account Details",
        icon: (prop: IconBaseProps) => <FaUser />,
        to:"/account"
    },
    {
        name: "Transaction",
        icon: (prop: IconBaseProps) => <AiOutlineTranslation />,
        to:"/trans"
    },
    {
        name: "Notification",
        icon: (prop: IconBaseProps) => <IoIosNotifications />,
        to:"/notifi"
    }

]