
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, DollarSign, Users, Target, BarChart3, PieChart, Calendar as CalendarIcon } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import RegionalChart from "@/components/dashboard/RegionalChart";
import ProductChart from "@/components/dashboard/ProductChart";
import SalesTable from "@/components/dashboard/SalesTable";

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("2024");
  const [selectedProduct, setSelectedProduct] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Sales Analytics Dashboard</h1>
                <p className="text-slate-300 text-sm">Real-time performance insights and KPIs</p>
              </div>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-[140px] bg-slate-800 border-slate-600 text-white">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="q4-2024">Q4 2024</SelectItem>
                  <SelectItem value="q3-2024">Q3 2024</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-[140px] bg-slate-800 border-slate-600 text-white">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="north">North America</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia">Asia Pacific</SelectItem>
                  <SelectItem value="latin">Latin America</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                <SelectTrigger className="w-[140px] bg-slate-800 border-slate-600 text-white">
                  <SelectValue placeholder="Product" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem value="all">All Products</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="starter">Starter</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Calendar className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Revenue"
            value="$2.4M"
            change="+12.5%"
            trend="up"
            icon={DollarSign}
            period="vs last month"
          />
          <KPICard
            title="Sales Growth"
            value="18.3%"
            change="+3.2%"
            trend="up"
            icon={TrendingUp}
            period="YoY growth"
          />
          <KPICard
            title="Active Customers"
            value="1,247"
            change="+8.1%"
            trend="up"
            icon={Users}
            period="this quarter"
          />
          <KPICard
            title="Target Achievement"
            value="87%"
            change="+5%"
            trend="up"
            icon={Target}
            period="of annual goal"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Trend */}
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          
          {/* Regional Performance */}
          <div>
            <RegionalChart />
          </div>
        </div>

        {/* Second Row Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ProductChart />
          <SalesTable />
        </div>
      </div>
    </div>
  );
};

export default Index;
