
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const salesData = [
  { region: "North America", revenue: "$850K", growth: 12.5, status: "Excellent" },
  { region: "Europe", revenue: "$720K", growth: 8.3, status: "Good" },
  { region: "Asia Pacific", revenue: "$480K", growth: 18.7, status: "Excellent" },
  { region: "Latin America", revenue: "$280K", growth: -2.1, status: "Below Target" },
  { region: "Middle East", revenue: "$190K", growth: 5.4, status: "Good" },
];

const SalesTable = () => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-lg font-semibold">Regional Sales Summary</CardTitle>
        <p className="text-slate-400 text-sm">Performance overview by region</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {salesData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
              <div className="flex-1">
                <h4 className="text-white font-medium">{item.region}</h4>
                <p className="text-slate-400 text-sm">{item.revenue}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  {item.growth > 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`text-sm font-medium ${
                    item.growth > 0 ? "text-green-400" : "text-red-400"
                  }`}>
                    {item.growth > 0 ? "+" : ""}{item.growth}%
                  </span>
                </div>
                
                <Badge 
                  variant={
                    item.status === "Excellent" ? "default" : 
                    item.status === "Good" ? "secondary" : 
                    "destructive"
                  }
                  className={
                    item.status === "Excellent" ? "bg-green-600 hover:bg-green-700" :
                    item.status === "Good" ? "bg-blue-600 hover:bg-blue-700" :
                    "bg-red-600 hover:bg-red-700"
                  }
                >
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesTable;
