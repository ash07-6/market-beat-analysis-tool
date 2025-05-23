
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  period: string;
}

const KPICard = ({ title, value, change, trend, icon: Icon, period }: KPICardProps) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
              <Icon className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium">{title}</p>
              <p className="text-2xl font-bold text-white">{value}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-green-400" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-400" />
            )}
            <span className={`text-sm font-medium ${
              trend === "up" ? "text-green-400" : "text-red-400"
            }`}>
              {change}
            </span>
          </div>
          <span className="text-slate-500 text-xs">{period}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default KPICard;
