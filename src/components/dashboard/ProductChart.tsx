
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { product: "Enterprise", sales: 120, growth: 15 },
  { product: "Professional", sales: 95, growth: 8 },
  { product: "Starter", sales: 75, growth: 22 },
  { product: "Premium", sales: 60, growth: -3 },
  { product: "Basic", sales: 45, growth: 12 },
];

const ProductChart = () => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-lg font-semibold">Product Performance</CardTitle>
        <p className="text-slate-400 text-sm">Sales volume by product line</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="product" 
                stroke="#9CA3AF"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
                tickFormatter={(value) => `${value}K`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
                formatter={(value: number, name: string) => [
                  name === 'sales' ? `${value}K units` : `${value}%`,
                  name === 'sales' ? 'Sales' : 'Growth'
                ]}
              />
              <Bar 
                dataKey="sales" 
                fill="#3B82F6"
                radius={[4, 4, 0, 0]}
                name="sales"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductChart;
