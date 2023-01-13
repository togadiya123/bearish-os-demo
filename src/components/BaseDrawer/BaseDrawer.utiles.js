import SearchIcon from "../../Images/search.svg";
import WorkspaceIcon from "../../Images/chart.svg";
import SharedWithMeIcon from "../../Images/person.svg";
import ContactsIcon from "../../Images/group.svg";
import AddWorkSpace from "../../Images/circled.svg";
import MailIcon from "../../Images/mail.svg";
import VideoCall from "../../Images/video_recorder.svg";
import DashboardIcon from "../../Images/home.svg";
import MessageIcon from "../../Images/messages.svg";
import CalendarIcon from "../../Images/calendar.svg";

export const FIRST_LIST = () => [
    {
        id: 1,
        name: 'Search Bearish OS',
        icon: SearchIcon,
        action: false
    },
    {
        id: 2,
        name: 'Dashboard',
        icon: DashboardIcon,
        action: false
    },
    {
        id: 3,
        name: 'Video Call',
        icon: VideoCall,
        action: true,
    },
    {
        id: 4,
        name: 'Inbox',
        icon: MailIcon,
        action: true,
    }
];

export const SECOND_LIST = () => [
    {
        id: 1,
        name: 'Workspaces',
        icon: WorkspaceIcon,
        action: true
    },
    {
        id: 2,
        name: 'Create a Workspace',
        icon: AddWorkSpace,
        action: false
    }
];

export const THIRD_LIST = () => [
    {
        id: 1,
        name: 'Calendar',
        icon: CalendarIcon,
        action: true
    },
    {
        id: 2,
        name: 'Messages',
        icon: MessageIcon,
        action: true
    },
    {
        id: 3,
        name: 'Contacts',
        icon: ContactsIcon,
        action: true
    },
    {
        id: 4,
        name: 'Shared with Me',
        icon: SharedWithMeIcon,
        action: true
    }
];