import { StatCard } from "@lightmind/ui"
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"

export function StatCardDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        description="from last month"
        trend={{ value: 20.1 }}
        icon={<DollarSign className="h-4 w-4" />}
      />
      <StatCard
        title="Users"
        value="+2,350"
        description="new this month"
        trend={{ value: 180.1 }}
        icon={<Users className="h-4 w-4" />}
      />
      <StatCard
        title="Sales"
        value="+12,234"
        trend={{ value: -19.0 }}
        icon={<ShoppingCart className="h-4 w-4" />}
      />
      <StatCard
        title="Active Now"
        value="573"
        description="In the last hour"
        trend={{ value: 0 }}
        icon={<TrendingUp className="h-4 w-4" />}
      />
    </div>
  )
}