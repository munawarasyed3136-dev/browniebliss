import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ChefHat, Leaf, Gift, Award, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBrownies from "@/assets/hero-brownies.jpg";
import brownieClassic from "@/assets/brownie-classic.jpg";
import brownieCaramel from "@/assets/brownie-caramel.jpg";
import brownieLoaded from "@/assets/brownie-loaded.jpg";
import brownieRedvelvet from "@/assets/brownie-redvelvet.jpg";
import brownieWalnut from "@/assets/brownie-walnut.jpg";
import brownieNutella from "@/assets/brownie-nutella.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const bestSellers = [
  { name: "Classic Walnut Brownie", price: "₹120", image: brownieWalnut, tag: "Bestseller" },
  { name: "Salted Caramel Bliss", price: "₹150", image: brownieCaramel, tag: "Customer Favorite" },
  { name: "Oreo Overload", price: "₹160", image: brownieLoaded, tag: "Premium" },
  { name: "Red Velvet Dream", price: "₹140", image: brownieRedvelvet, tag: "New" },
];

const features = [
  { icon: ChefHat, title: "Freshly Baked", description: "Baked fresh daily for maximum flavor and that perfect fudgy texture" },
  { icon: Award, title: "Premium Cocoa", description: "Only the finest Belgian cocoa and premium chocolate in every brownie" },
  { icon: Leaf, title: "Eggless Options", description: "Delicious eggless and vegan options available without compromising taste" },
  { icon: Gift, title: "Custom Orders", description: "Personalized gift boxes and custom flavors for your special occasions" },
];

const reviews = [
  { name: "Priya Sharma", text: "The best brownies I've ever tasted! The salted caramel is absolutely divine. My family is obsessed!", rating: 5 },
  { name: "Rahul Mehta", text: "Ordered for my wife's birthday and she loved it. The gift packaging was beautiful and the brownies were fresh.", rating: 5 },
  { name: "Ananya Patel", text: "Finally found a bakery that does amazing eggless brownies! The texture is perfect and so fudgy.", rating: 5 },
];

const instagramPosts = [
  brownieClassic,
  brownieCaramel,
  brownieLoaded,
  brownieRedvelvet,
  brownieWalnut,
  brownieNutella,
];

const Index = () => {
  return (
    <Layout>
      {/* Landing / Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(38_55%_55%/0.3),transparent_70%)]" />
        </div>
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <span className="text-gold">✦</span>
                <span className="text-sm font-medium text-foreground/80">Handcrafted with Love</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                Where Every Bite{" "}
                <span className="text-gradient-gold">Melts Hearts</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Welcome to <strong>Brownie Bliss</strong> — your home for handcrafted brownies made with premium Belgian chocolate 
                and the finest ingredients. Every brownie is a little piece of heaven, baked fresh with love.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-gold border-2 border-cream flex items-center justify-center text-chocolate text-sm font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">2000+ Happy Customers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={heroBrownies}
                  alt="Delicious brownies"
                  className="rounded-3xl shadow-medium object-cover w-full aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-medium border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                      <ChefHat className="text-chocolate" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Fresh Daily</p>
                      <p className="text-sm text-muted-foreground">Baked with love</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-chocolate/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block text-gold font-medium mb-4">Our Favorites</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Best Selling <span className="text-gradient-gold">Brownies</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most loved creations, each one crafted to perfection
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {bestSellers.map((brownie, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-gradient-gold text-chocolate-dark text-xs font-semibold rounded-full">
                    {brownie.tag}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <img src={brownie.image} alt={brownie.name} className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{brownie.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gold">{brownie.price}</span>
                    <Button variant="gold" size="sm" asChild>
                      <Link to="/order">Add to Cart</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block text-gold font-medium mb-4">Why Us</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-gradient-gold">Brownie Bliss</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-chocolate-dark" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block text-gold font-medium mb-4">Testimonials</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our <span className="text-gradient-gold">Customers Say</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {reviews.map((review, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative bg-card p-8 rounded-2xl shadow-soft">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="text-chocolate-dark font-bold">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="py-24 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block text-gold font-medium mb-4">@browniebliss</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Follow Us on <span className="text-gradient-gold">Instagram</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {instagramPosts.map((post, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img src={post} alt={`Instagram post ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-chocolate/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-cream font-medium">View</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-chocolate">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              Ready to Experience <span className="text-gradient-gold">Brownie Bliss?</span>
            </h2>
            <p className="text-cream/80 text-lg mb-10">
              Order now and get freshly baked brownies delivered to your doorstep
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/order">Order Now</Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="border-cream text-cream hover:bg-cream hover:text-chocolate" asChild>
                <Link to="/menu">View Menu</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
