const events = [
  {
    time: "09:12:31",
    event: "Multiple Failed Login Attempts",
    source: "192.168.1.20",
    severity: "High",
  },
  {
    time: "09:15:10",
    event: "SSH Authentication Failure",
    source: "192.168.1.25",
    severity: "Medium",
  },
  {
    time: "09:20:42",
    event: "Unusual Network Activity",
    source: "192.168.1.30",
    severity: "Low",
  },
];

export default function SecurityEvents() {
  return (
    <div className="p-8">

      <h3 className="text-2xl font-bold mb-2">
        Security Events
      </h3>

      <p className="text-slate-400 mb-6">
        Example security event records.
      </p>

      <div className="border border-slate-800 rounded-xl overflow-hidden">

        <div className="bg-[#111c2f] p-5 flex justify-between">
          <h4 className="font-semibold">
            Recent Security Events
          </h4>

          <span className="text-xs text-amber-400">
            SIMULATED DATA
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">

            <thead className="bg-[#0d1525] text-slate-400">
              <tr>
                <th className="p-4">Time</th>
                <th className="p-4">Event</th>
                <th className="p-4">Source IP</th>
                <th className="p-4">Severity</th>
              </tr>
            </thead>

            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-t border-slate-800">
                  <td className="p-4 text-slate-400">
                    {event.time}
                  </td>

                  <td className="p-4">
                    {event.event}
                  </td>

                  <td className="p-4 text-slate-400">
                    {event.source}
                  </td>

                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      event.severity === "High"
                        ? "bg-red-500/15 text-red-400"
                        : event.severity === "Medium"
                        ? "bg-amber-500/15 text-amber-400"
                        : "bg-blue-500/15 text-blue-400"
                    }`}>
                      {event.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}