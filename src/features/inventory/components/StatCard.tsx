interface StatCardProps {
  title: string
  value: string
  trend: string
  icon: string
  variant?: 'default' | 'warning' | 'success'
}

export function StatCard({ title, value, trend, icon, variant = 'default' }: StatCardProps) {
  const bgColor = {
    default: 'bg-white',
    warning: 'bg-yellow-50',
    success: 'bg-green-50'
  }[variant]

  return (
    <div className={`p-6 rounded-lg shadow-sm ${bgColor}`}>
      <div className="flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        <span className="text-sm text-gray-500">{trend}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-gray-900">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  )
} 