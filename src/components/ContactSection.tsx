import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Reveal } from "@/components/animations/Reveal";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Please provide a brief message (min 10 chars)"),
});

type FormValues = z.infer<typeof schema>;

export const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setSubmitting(true);
      // Placeholder action: open mail client with prefilled subject/body
      const subject = encodeURIComponent(`Inquiry from ${values.name}`);
      const body = encodeURIComponent(values.message + `\n\nReply to: ${values.email}`);
      const mailto = `mailto:contact@laformulacg.net?subject=${subject}&body=${body}`;
      window.location.href = mailto;
      toast.success("Opening your email client…");
      reset();
    } catch (e) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-magenta/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal as="div" className="text-center mb-12" y={20} blur={8}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Get in</span> <span className="text-foreground">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear about your goals. Send us a message and our team will get back to you.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Contact Details */}
          <Reveal as="div" y={24} blur={8}>
            <div className="glass-panel p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-semibold mb-4 neon-text">Contact Details</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><span className="text-foreground font-medium">Email:</span> info@laformulacg.net</li>
                <li><span className="text-foreground font-medium">Phone:</span> +1 (555) 123-4567</li>
                <li><span className="text-foreground font-medium">Hours:</span> Mon–Fri, 9:00–18:00 (EST)</li>
              </ul>
              <div className="mt-8 text-sm text-muted-foreground">
                By contacting us, you agree to our <a className="underline hover:text-neon-glow" href="/privacy">Privacy Policy</a>.
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal as="div" y={24} blur={8} delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="glass-panel p-8 rounded-2xl space-y-6">
              <div>
                <label className="block mb-2 text-sm text-muted-foreground">Full Name</label>
                <Input placeholder="Jane Doe" {...register("name")} />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-muted-foreground">Email</label>
                <Input type="email" placeholder="jane@company.com" {...register("email")} />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-muted-foreground">Message</label>
                <Textarea rows={5} placeholder="Tell us a bit about your project…" {...register("message")} />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" disabled={submitting} className="bg-gradient-neon hover:shadow-glow text-white">
                {submitting ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
