import { NavLink } from "react-router-dom";
import {
  Shield,
  LayoutDashboard,
  Activity,
  ShieldAlert,
  ExternalLink
} from "lucide-react";

const menuItems = [
  { name: "Overview", path: "/", icon: LayoutDashboard },
  { name: "Monitoring", path: "/monitoring", icon: Activity },
  { name: "Security Events", path: "/security", icon: ShieldAlert },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#0d1525] border-r border-slate-800 p-5 flex flex-col">

      <div className="flex items-center gap-3 mb-12">
        <div className="bg-emerald-500 p-2 rounded-lg">
          <Shield size={23} color="white" />
        </div>

        <div>
          <h1 className="font-bold text-lg text-white">
            CyberGuard
          </h1>
          <p className="text-xs text-slate-500">
            Lite Monitoring
          </p>
        </div>
      </div>

      <p className="text-xs text-slate-500 uppercase mb-4">
        Main Menu
      </p>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-400"
                    : "text-slate-400 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={19} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-slate-800 pt-5">
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between text-sm text-slate-400 hover:text-emerald-400"
        >
          Open Grafana
          <ExternalLink size={16} />
        </a>

        <p className="text-xs text-slate-600 mt-4">
          CyberGuard Lite v1.0
        </p>
      </div>

    </aside>
  );
}