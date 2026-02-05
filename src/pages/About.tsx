import { motion } from "framer-motion";
import { Heart, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import brownieGiftbox from "@/assets/brownie-giftbox.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stats = [
  { icon: Users, value: "2000+", label: "Happy Customers" },
  { icon: Award, value: "15+", label: "Brownie Varieties" },
  { icon: Heart, value: "100%", label: "Made with Love" },
  { icon: Clock, value: "3+", label: "Years of Bliss" },
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on ingredients. Only premium Belgian chocolate, fresh butter, and the finest cocoa make it into our brownies.",
  },
  {
    title: "Handcrafted with Love",
    description: "Every brownie is made by hand in small batches. No machines, no shortcuts – just pure passion and dedication.",
  },
  {
    title: "Customer Happiness",
    description: "Your satisfaction is our success. We go above and beyond to make every order special and every customer smile.",
  },
  {
    title: "Sustainable Practices",
    description: "We care about our planet. Our packaging is eco-friendly, and we source ingredients responsibly.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-gold font-medium mb-4">
                Our Story
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                The <span className="text-gradient-gold">Brownie Bliss</span> Journey
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                What started as a passion project in a small home kitchen has grown into 
                a beloved brownie brand that brings joy to thousands of customers.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our founder's love for baking began as a child, watching her grandmother 
                create magical desserts. That same love and tradition lives on in every 
                brownie we make today.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={brownieGiftbox}
                alt="Brownie gift box"
                className="rounded-3xl shadow-medium w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-chocolate">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-4xl font-bold text-cream mb-2">{stat.value}</div>
                <div className="text-cream/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-block text-gold font-medium mb-4">
                How It All Began
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                From Kitchen to <span className="text-gradient-gold">Hearts</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="prose prose-lg max-w-none text-muted-foreground"
            >
              <p className="text-lg leading-relaxed mb-6">
                Brownie Bliss was born in 2022 when our founder decided to turn her 
                lifelong passion for baking into something more. Armed with her 
                grandmother's secret recipes and a determination to create the perfect 
                brownie, she started experimenting in her home kitchen.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What began with orders from friends and family quickly grew through 
                word of mouth. People couldn't stop talking about the rich, fudgy 
                brownies with their perfect crackly top and gooey center. Each brownie 
                was made with premium Belgian chocolate, real butter, and an extra 
                helping of love.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Today, Brownie Bliss has served over 2000 happy customers and continues 
                to grow. We've expanded our menu to include innovative flavors while 
                staying true to our roots – handcrafted brownies made with the finest 
                ingredients and a whole lot of heart.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is simple: to bring moments of pure chocolate bliss to 
                everyone. Whether it's a birthday celebration, a corporate gift, or 
                simply a treat for yourself, we're here to make life a little sweeter.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-gold font-medium mb-4"
            >
              Our Values
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl font-bold text-foreground"
            >
              What We <span className="text-gradient-gold">Stand For</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card p-8 rounded-2xl shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-chocolate-dark">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-chocolate">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
              Ready to Taste the <span className="text-gradient-gold">Difference?</span>
            </h2>
            <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              Experience brownies made with love, premium ingredients, and generations of baking wisdom
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/order">Order Now</Link>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <Link to="/menu">View Menu</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;