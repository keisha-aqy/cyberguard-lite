import { Bell, CircleUserRound } from "lucide-react";

export default function Header({ title }) {
  return (
    <header className="h-20 border-b border-slate-800 flex items-center justify-between px-8">

      <div>
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>
        <p className="text-sm text-slate-500">
          CyberGuard Infrastructure Monitoring
        </p>
      </div>

      <div className="flex items-center gap-5">
        <Bell size={20} className="text-slate-400" />
        <CircleUserRound size={25} className="text-emerald-400" />
      </div>

    </header>
  );
}