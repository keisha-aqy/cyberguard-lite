export default function MetricCard({
  title,
  value,
  description,
  icon: Icon,
}) {
  return (
    <div className="bg-[#111c2f] border border-slate-800 rounded-xl p-5">

      <div className="flex items-center justify-between mb-4">
        <p className="text-slate-400 text-sm">
          {title}
        </p>

        <Icon size={20} className="text-emerald-400" />
      </div>

      <h3 className="text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="text-xs text-slate-500 mt-2">
        {description}
      </p>

    </div>
  );
}