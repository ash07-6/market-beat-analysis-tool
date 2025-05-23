
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { month: "Jan", revenue: 320000, target: 300000 },
  { month: "Feb", revenue: 380000, target: 350000 },
  { month: "Mar", revenue: 420000, target: 400000 },
  { month: "Apr", revenue: 350000, target: 380000 },
  { month: "May", revenue: 480000, target: 450000 },
  { month: "Jun", revenue: 520000, target: 500000 },
  { month: "Jul", revenue: 580000, target: 550000 },
  { month: "Aug", revenue: 610000, target: 580000 },
  { month: "Sep", revenue: 650000, target: 620000 },
  { month: "Oct", revenue: 690000, target: 660000 },
  { month: "Nov", revenue: 720000, target: 700000 },
  { month: "Dec", revenue: 780000, target: 750000 },
];

const RevenueChart = () => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-lg font-semibold">Revenue Trend Analysis</CardTitle>
        <p className="text-slate-400 text-sm">Monthly performance vs targets</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="month" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000)}K`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
                formatter={(value: number) => [`$${(value / 1000)}K`, '']}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#3B82F6"
                strokeWidth={2}
                fill="url(#revenueGradient)"
                name="Actual Revenue"
              />
              <Area
                type="monotone"
                dataKey="target"
                stroke="#8B5CF6"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="url(#targetGradient)"
                name="Target"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
