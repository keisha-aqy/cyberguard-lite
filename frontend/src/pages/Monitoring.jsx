import { ExternalLink } from "lucide-react";

export default function Monitoring() {
  return (
    <div className="p-8">

      <h3 className="text-2xl font-bold mb-2">
        Infrastructure Monitoring
      </h3>

      <p className="text-slate-400 mb-8">
        View real-time infrastructure metrics using Grafana.
      </p>

      <div className="bg-[#111c2f] border border-slate-800 rounded-xl p-8 text-center">

        <div className="text-emerald-400 text-4xl mb-4">
          ◉
        </div>

        <h4 className="text-xl font-semibold mb-3">
          Grafana Monitoring Dashboard
        </h4>

        <p className="text-slate-400 text-sm mb-6">
          Explore CPU, memory, disk, and network metrics
          through Grafana.
        </p>

        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-lg"
        >
          Open Grafana
          <ExternalLink size={17} />
        </a>

      </div>
    </div>
  );
}