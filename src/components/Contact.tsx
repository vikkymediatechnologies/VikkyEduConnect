import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@educonnect.ng",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 (0) 812 345 6789",
      subtitle: "Mon-Fri 8AM-6PM (WAT)"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Victoria Island, Lagos",
      subtitle: "Nigeria"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Online Support",
      subtitle: "Always here to help"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with the platform?",
      answer: "Simply sign up, choose your plan, and start learning immediately with our interactive courses."
    },
    {
      question: "What programming languages do you teach?",
      answer: "We cover Python, JavaScript, HTML/CSS, React, and more with practical projects."
    },
    {
      question: "Do you offer certificates?",
      answer: "Yes, we provide certificates upon completion of courses and projects."
    },
    {
      question: "Can schools get bulk pricing?",
      answer: "Absolutely! Contact us for special educational institution pricing."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform education? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-card/50 rounded-xl hover:bg-card transition-colors hover-scale">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-primary font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </CardHeader>
              
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Your name"
                        required
                        className="focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input 
                      placeholder="What would you like to discuss?"
                      required
                      className="focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      className="focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full hover-scale">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 mr-3 text-primary" />
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground">
              Quick answers to common questions about our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow hover-scale">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-foreground mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="hover-scale">
              View All FAQs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;