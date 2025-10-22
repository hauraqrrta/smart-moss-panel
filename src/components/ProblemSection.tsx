import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, Cell } from "recharts";
import { AlertTriangle } from "lucide-react";
import pollutionImage from "@/assets/pollution-crisis.png";


interface NewsItem {
  title: string;
  source: string;
  date: string;
  image: string;
}

export const ProblemSection = () => {
  // Data untuk bar chart perbandingan PM2.5
  const pm25Data = [
    { name: "WHO Safe Level", value: 10, fill: "#22c55e" },
    { name: "Jakarta Avg", value: 65, fill: "#ef4444" },
    { name: "Indoor (No Filter)", value: 82, fill: "#ef4444" },
    { name: "Moss Panel", value: 18, fill: "#22c55e" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock news data (in production, fetch from API)
  const newsItems: NewsItem[] = [
    {
      title: "Jakarta's Air Quality Ranks Among World's Worst",
      source: "BBC Indonesia",
      date: "2024-10-15",
      image: pollutionImage,
    },
    {
      title: "WHO: 7 Million Deaths Annually from Air Pollution",
      source: "World Health Organization",
      date: "2024-10-10",
      image: pollutionImage,
    },
    {
      title: "Indonesian Cities Exceed Safe PM2.5 Levels by 300%",
      source: "Kompas",
      date: "2024-10-08",
      image: pollutionImage,
    },
    {
      title: "Indoor Air Quality Crisis: Hidden Threat in Our Homes",
      source: "The Guardian",
      date: "2024-10-05",
      image: pollutionImage,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  return (
    <section className="py-20 bg-gradient-pollution relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-card mb-4 font-['Playfair_Display']">
            The Silent Killer in Our Cities
          </h2>
          <p className="text-xl text-card/80 max-w-3xl mx-auto font-poppins">
            Every breath we take indoors can contain harmful pollutants. The crisis is real, and it's happening now.
          </p>
        </div>

        {/* PM2.5 Comparison Bar Chart */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up">
          <Card className="bg-card/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">PM2.5 Levels Comparison (μg/m³)</h3>
              <ChartContainer
                config={{
                  value: { label: "PM2.5", color: "#22c55e" },
                }}
                className="w-full h-64"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pm25Data} barCategoryGap={32} margin={{ left: 32, right: 32, top: 16, bottom: 16 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 14 }} />
                    <YAxis type="number" domain={[0, 90]} axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 14 }} />
                    <Tooltip cursor={{ fill: '#f1f5f9' }} />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]} isAnimationActive>
                      {pm25Data.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* News Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsItems.map((news, index) => (
                <div key={index} className="min-w-full px-2">
                  <Card className="overflow-hidden hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <div className="text-sm text-destructive font-semibold mb-2">
                            {news.source} • {news.date}
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">
                            {news.title}
                          </h3>
                          <p className="text-muted-foreground font-poppins">
                            Air pollution continues to be a critical health crisis affecting millions worldwide, 
                            with indoor air quality often worse than outdoor levels.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-card" : "w-2 bg-card/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};