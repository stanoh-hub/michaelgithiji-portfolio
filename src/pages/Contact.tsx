import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+254 704 783563",
      href: "tel:+254704783563",
    },
    {
      icon: Mail,
      label: "Email",
      value: "michael.githiji@email.com",
      href: "mailto:michael.githiji@email.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mombasa,Kenya",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'd love to hear from you! Whether you have a project idea, collaboration opportunity, 
            or just want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-navy mb-8">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy">{info.label}</h3>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Connect */}
            <Card className="mt-8 bg-gradient-primary border-0 shadow-glow">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-3">Quick Connect</h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Prefer a direct conversation? Give me a call!
                </p>
                <Button 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="tel:+254704783563">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-navy">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-navy">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-navy">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-navy">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, idea, or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-20 text-center animate-fade-in">
          <Card className="bg-section-bg border-0 shadow-card">
            <CardContent className="p-12">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-navy mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, 
                and potential collaborations. Whether you're looking for a research partner, 
                team member, or just want to share ideas, I'd love to connect!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;