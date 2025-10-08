import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Student Basic",
      price: "₦5,000",
      period: "/month",
      description: "Perfect for individual students",
      features: [
        "Access to basic courses",
        "Recorded video lessons", 
        "Practice quizzes",
        "Community forums",
        "Mobile app access"
      ],
      popular: false,
      cta: "Start Learning"
    },
    {
      name: "Student Premium",
      price: "₦10,000",
      period: "/month", 
      description: "Complete learning experience",
      features: [
        "All basic features",
        "Live classes access",
        "Advanced course materials",
        "One-on-one tutoring",
        "Priority support",
        "Certificates",
        "Downloadable resources"
      ],
      popular: true,
      cta: "Get Premium"
    },
    {
      name: "School Management",
      price: "₦50,000",
      period: "/month",
      description: "For educational institutions", 
      features: [
        "Student management system",
        "Attendance tracking",
        "Fee payment processing",
        "Parent communication portal",
        "Academic reports",
        "Multi-admin access",
        "Data analytics"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];


  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Affordable Plans for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan that fits your educational needs and budget.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-elevation animate-pulse-soft' : ''} hover:shadow-card-hover transition-all duration-300 hover-scale animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
                  <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm animate-slide-in-left" style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s` }}>
                      <Check className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full hover-scale" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Education?</h3>
            <p className="mb-6 opacity-90">
              Join thousands of students and schools already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;