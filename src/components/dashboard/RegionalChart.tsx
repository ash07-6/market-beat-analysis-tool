
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "North America", value: 45, color: "#3B82F6" },
  { name: "Europe", value: 28, color: "#8B5CF6" },
  { name: "Asia Pacific", value: 18, color: "#06B6D4" },
  { name: "Latin America", value: 9, color: "#10B981" },
];

const RegionalChart = () => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-lg font-semibold">Revenue by Region</CardTitle>
        <p className="text-slate-400 text-sm">Geographic distribution</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
                formatter={(value: number) => [`${value}%`, 'Share']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-slate-300 text-sm">{item.name}</span>
              </div>
              <span className="text-white font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RegionalChart;
