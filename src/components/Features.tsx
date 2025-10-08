import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  School, 
  Users, 
  BookOpen, 
  Trophy, 
  CreditCard,
  Video,
  MessageCircle,
  Calendar
} from "lucide-react";

const Features = () => {
  const userTypes = [
    {
      icon: School,
      title: "For Schools",
      description: "Bring coding to your classroom",
      features: [
        "Interactive coding lessons",
        "Student progress tracking",
        "Curriculum integration",
        "Teacher dashboard",
        "Classroom management"
      ],
      pricing: "Contact for pricing",
      color: "primary"
    },
    {
      icon: GraduationCap,
      title: "For Students", 
      description: "Learn programming step by step",
      features: [
        "HTML & CSS basics",
        "JavaScript fundamentals", 
        "Project-based learning",
        "Interactive exercises",
        "Coding challenges",
        "Certificate of completion"
      ],
      pricing: "Free to start",
      color: "secondary"
    },
    {
      icon: Users,
      title: "For Teachers",
      description: "Guide students in their coding journey",
      features: [
        "Lesson planning tools",
        "Student progress monitoring",
        "Assignment creation", 
        "Code review features",
        "Teaching resources"
      ],
      pricing: "Free for educators",
      color: "accent"
    }
  ];

  const coreFeatures = [
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description: "Step-by-step coding tutorials with hands-on practice"
    },
    {
      icon: Trophy,
      title: "Progress Tracking",
      description: "Monitor learning progress and celebrate achievements"
    },
    {
      icon: MessageCircle,
      title: "Code Playground",
      description: "Practice coding in a safe, interactive environment"
    },
    {
      icon: Calendar,
      title: "Structured Learning",
      description: "Organized curriculum from basics to advanced topics"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Programming Education Made Simple
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start small, grow big. Perfect for schools introducing coding to their students.
          </p>
        </div>

        {/* User Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {userTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${
                  type.color === 'primary' ? 'bg-primary/10' :
                  type.color === 'secondary' ? 'bg-secondary/10' :
                  'bg-accent/10'
                } flex items-center justify-center`}>
                  <type.icon className={`w-8 h-8 ${
                    type.color === 'primary' ? 'text-primary' :
                    type.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} />
                </div>
                <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full ${
                        type.color === 'primary' ? 'bg-primary' :
                        type.color === 'secondary' ? 'bg-secondary' :
                        'bg-accent'
                      } mr-3 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className={`text-lg font-semibold ${
                    type.color === 'primary' ? 'text-primary' :
                    type.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  } mb-3`}>
                    {type.pricing}
                  </div>
                  <Button className="w-full" variant={type.color === 'secondary' ? 'secondary' : type.color === 'primary' ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Features Grid */}
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Everything You Need to Start
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;