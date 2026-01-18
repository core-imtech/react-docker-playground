import {
    MdDashboard,
    MdViewKanban,
    MdOutlineHandshake,
    MdOutlineDescription,
    MdOutlineLocalShipping,
    MdOutlineDiversity2,
    MdOutlineDiversity3,
} from "react-icons/md";

const SIDEBAR_CONFIG = [
    {
        ID: "dashboard",
        title: "Dashboard",
        path: "/dashboard",
        icon: "dashboard",
    },
    {
        ID: "proyek",
        title: "Proyek",
        path: "/proyek",
        icon: "proyek",
    },
    {
        ID: "mitra",
        title: "Mitra",
        path: "/mitra",
        icon: "mitra",
    },
    {
        ID: "klien",
        title: "Klien",
        path: "/klien",
        icon: "klien",
    },
    {
        ID: "logistik",
        title: "Logistik",
        path: "/logistik",
        icon: "logistik",
    },
    {
        ID: "tim-proyek",
        title: "Tim Proyek",
        path: "/tim-proyek",
        icon: "tim-proyek",
    },
    {
        ID: "karyawan",
        title: "Karyawan",
        path: "/karyawan",
        icon: "karyawan",
    },
];

const ICONS = {
    dashboard: MdDashboard,
    proyek: MdViewKanban,
    mitra: MdOutlineHandshake,
    klien: MdOutlineDescription,
    logistik: MdOutlineLocalShipping,
    "tim-proyek": MdOutlineDiversity2,
    karyawan: MdOutlineDiversity3,
};

export const getSidebarConfig = () => SIDEBAR_CONFIG;
export const getSidebarConfigByID = (ID) =>
    SIDEBAR_CONFIG.find((item) => item.ID === ID);

export const getNavItemIcon = (icon) => {
    return ICONS[icon];
};
