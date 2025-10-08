import { Users, Award, BookOpen, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Students Enrolled" },
    { icon: BookOpen, number: "500+", label: "Courses Available" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Target, number: "50+", label: "Schools Partnered" },
  ];

  const team = [
    {
      name: "Victor Okechukwu",
      role: "Founder & Lead Educator",
      description: "Educational technology expert with 8+ years experience in Nigerian curriculum"
    },
    {
      name: "Sarah Adebayo",
      role: "Head of Academics",
      description: "Former WAEC examiner specializing in Mathematics and Sciences"
    },
    {
      name: "David Okafor",
      role: "Technology Director", 
      description: "Software engineer focused on building scalable educational platforms"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About EduConnect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming education in Nigeria through technology, making quality learning accessible to every student and empowering schools with modern management tools.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize education in Nigeria by providing comprehensive digital solutions that bridge the gap between traditional learning and modern technology, ensuring every student has access to quality education regardless of their location or background.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Africa's leading educational technology platform, empowering millions of students to achieve academic excellence and helping schools operate more efficiently through innovative digital solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h3>
          <p className="text-muted-foreground mb-8">
            Passionate educators and technologists working together to transform Nigerian education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              EduConnect was born from a simple observation: while technology was transforming every aspect of life, Nigerian education remained largely traditional. Our founder, Victor, witnessed firsthand the challenges students faced accessing quality education, especially in preparing for critical examinations like WAEC, JAMB, and NECO.
            </p>
            <p className="mb-4">
              Starting as a small tutoring initiative, we quickly realized that the solution wasn't just about teaching – it was about creating a comprehensive ecosystem that serves students, teachers, parents, and schools alike. Today, we're proud to be at the forefront of Nigeria's educational technology revolution.
            </p>
            <p>
              From exam preparation to complete school management systems, we're committed to making quality education accessible, affordable, and effective for everyone in the Nigerian educational community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;