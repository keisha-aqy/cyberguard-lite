import {
  Cpu,
  MemoryStick,
  HardDrive,
  Network,
  Server,
  ShieldCheck
} from "lucide-react";

import MetricCard from "../components/MetricCard";

export default function Overview() {
  const metrics = [
    {
      title: "CPU Usage",
      value: "View Grafana",
      description: "Live metrics from server",
      icon: Cpu,
    },
    {
      title: "Memory Usage",
      value: "View Grafana",
      description: "Physical memory monitoring",
      icon: MemoryStick,
    },
    {
      title: "Disk Usage",
      value: "View Grafana",
      description: "Storage utilization",
      icon: HardDrive,
    },
    {
      title: "Network Traffic",
      value: "View Grafana",
      description: "Incoming and outgoing traffic",
      icon: Network,
    },
  ];

  return (
    <div className="p-8 space-y-8">

      <div>
        <h3 className="text-2xl font-bold text-white">
          Infrastructure Overview
        </h3>
        <p className="text-slate-400 mt-2">
          Monitor your system resources and infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="bg-[#111c2f] border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Server className="text-emerald-400" />
            <h4 className="font-semibold">Monitoring Infrastructure</h4>
          </div>

          <p className="text-slate-400 text-sm mb-5">
            Infrastructure metrics are collected by Prometheus
            and visualized through Grafana.
          </p>

          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 text-sm hover:underline"
          >
            Open monitoring dashboard →
          </a>
        </div>

        <div className="bg-[#111c2f] border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-emerald-400" />
            <h4 className="font-semibold">Security Monitoring</h4>
          </div>

          <p className="text-slate-400 text-sm">
            Security events are demonstrated separately.
            Live security detection will be integrated in a future version.
          </p>
        </div>

      </div>

    </div>
  );
}