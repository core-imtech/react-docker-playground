
import { NavLink, useNavigate } from "react-router-dom";

import { LogoutAccount } from "@/utils/fakeAuth";

import { logo, miniLogo, accountDummy } from "@/assets";

import { MdDashboard, MdOutlineFlip } from 'react-icons/md'

import { useEffect, useState } from "react";

import SidebarNavSkeleton from "../LoadingComponents/SidebarNavSkeleton";

import { getNavItemIcon, getSidebarConfig } from "../../utils/sidebarConfig";

const MainSidebar = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [accountMenuDisplayActive, setAccountMenuDisplayActive] = useState(false);
  const [sidebarConfig, setSidebarConfig] = useState([]);
  const [isSidebarExpand, setIsSidebarExpand] = useState(true);

  const navigate = useNavigate();

  const handleLogout = () => {
    LogoutAccount();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    setTimeout(() => {
      setSidebarConfig(getSidebarConfig());

      setIsLoading(false);
    }, 5000);
  });

  return (
    <aside
      className={`${isSidebarExpand ? "w-[256px]" : "w-18"} h-screen flex flex-col bg-white transition-[width] duration-200 ease-in-out shadow-surface-card-default`}
      onClick={() => {
        if (!isSidebarExpand) setIsSidebarExpand(true);
      }}
    >
      {/* Sidebar Header */}
      {
        isSidebarExpand
          ? (
            <div className="p-4 flex items-center justify-between">
              <img
                src={logo}
                alt="imtech-logo"
                className="w-34 cursor-pointer"
                onClick={() => navigate("/")}
              />
              <div
                className="border-[1.5px] border-border hover:bg-border p-2 rounded-md cursor-pointer"
                onClick={() => setIsSidebarExpand(!isSidebarExpand)}
              >
                <MdOutlineFlip size={16} className="text-secondary-font" />
              </div>
            </div>
          )
          : (
            <div
              className="p-4 flex justify-center cursor-pointer"
              onClick={() => setIsSidebarExpand(!isSidebarExpand)}
            >
              <img
                src={miniLogo}
                alt="imtech-mini-logo"
                className="w-8"
                onClick={() => navigate("/")}
              />
            </div>
          )
      }

      {/* Sidebar Body */}
      {
        isLoading
          ? <SidebarNavSkeleton arrayLength={5} isSidebarExpand={isSidebarExpand} />
          : (
            <div className="overflow-auto flex-1 p-4 flex flex-col gap-2">
              {
                sidebarConfig.length > 0
                  ? sidebarConfig.map((item, index) => {
                    const Icon = getNavItemIcon(item.icon);

                    return (
                      <NavLink
                        to={item.path}
                        key={index}
                        className={
                          ({ isActive }) => {
                            if (isActive) return 'bg-main hover:bg-main-hover text-white rounded-md py-2 px-3 flex items-center gap-2 font-medium  cursor-pointer'

                            return 'hover:bg-border text-secondary-font rounded-md py-2 px-3 flex items-center gap-2  cursor-pointer'
                          }
                        }
                        end
                      >
                        {Icon ? <Icon size={20} /> : null}{isSidebarExpand ? <p className="font-medium text-sm">{item.title}</p> : null}
                      </NavLink>
                    )
                  })
                  : null
              }
            </div>
          )
      }

      {/* Sidebar Footer */}
      {
        isLoading
          ? (
            <div className="border-t-[1.5px] border-border">
              <SidebarNavSkeleton arrayLength={1} isSidebarExpand={isSidebarExpand} />
            </div>
          )
          : (
            <div
              className={`hover:bg-border p-4 flex items-center gap-3 cursor-pointer border-t-[1.5px] border-border relative ${isSidebarExpand ? "justify-start" : "justify-center"}`}
              onClick={() => setAccountMenuDisplayActive(!accountMenuDisplayActive)}
            >
              <img src={accountDummy} alt="account-dummy" className="w-8 h-8 rounded-lg" />
              {
                isSidebarExpand
                  ? (
                    <div>
                      <p className="font-semibold text-sm">Jhonny Bryant</p>
                      <p className="font-normal text-xs text-muted-font">jhonnybryant@gmail.com</p>
                    </div>
                  )
                  : null
              }
            </div>
          )
      }

      {/* account menu overlay */}
      {
        accountMenuDisplayActive
          ? <div
            className="fixed top-0 left-0 right-0 bottom-0"
            onClick={() => setAccountMenuDisplayActive(false)}
          >
            <div className="absolute bottom-4 left-2 w-56 bg-white border-[1.5px] border-border rounded-card shadow-modal-overlay p-4">
              <button
                className="px-4 py-2 bg-danger-main font-medium text-white border border-border hover:bg-danger-text rounded-md cursor-pointer w-full"
                onClick={() => handleLogout()}>Logout</button>
            </div>
          </div>
          : null
      }
    </aside>
  )
}

export default MainSidebar;