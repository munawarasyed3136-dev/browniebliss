import { motion } from "framer-motion";
import { Gift, Percent, Package, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import brownieGiftbox from "@/assets/brownie-giftbox.jpg";
import brownieClassic from "@/assets/brownie-classic.jpg";
import brownieLoaded from "@/assets/brownie-loaded.jpg";

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

const launchOffers = [
  {
    title: "Welcome Offer",
    description: "Get 15% off on your first order! Use code WELCOME15",
    icon: Sparkles,
    code: "WELCOME15",
    validTill: "Valid for new customers",
  },
  {
    title: "Free Delivery",
    description: "Free delivery on orders above ₹500",
    icon: Package,
    code: "FREEDELIVERY",
    validTill: "No minimum order required",
  },
  {
    title: "Bulk Order Discount",
    description: "Order 20+ brownies and get 20% off",
    icon: Percent,
    code: "BULK20",
    validTill: "Perfect for parties & events",
  },
];

const comboBoxes = [
  {
    name: "Classic Combo",
    items: "6 Classic Brownies Mix",
    originalPrice: "₹600",
    offerPrice: "₹499",
    savings: "Save ₹101",
    image: brownieClassic,
    bestseller: true,
  },
  {
    name: "Premium Indulgence",
    items: "4 Premium Loaded Brownies",
    originalPrice: "₹640",
    offerPrice: "₹549",
    savings: "Save ₹91",
    image: brownieLoaded,
    bestseller: false,
  },
  {
    name: "Assorted Delight",
    items: "8 Mixed Flavor Brownies",
    originalPrice: "₹1000",
    offerPrice: "₹849",
    savings: "Save ₹151",
    image: brownieClassic,
    bestseller: false,
  },
];

const giftBoxes = [
  {
    name: "Love Box",
    description: "Perfect for anniversaries and special occasions",
    items: "6 Premium Brownies + Personalized Message Card",
    price: "₹699",
    image: brownieGiftbox,
  },
  {
    name: "Celebration Box",
    description: "Ideal for birthdays and celebrations",
    items: "9 Assorted Brownies + Ribbon Packaging",
    price: "₹999",
    image: brownieGiftbox,
  },
  {
    name: "Corporate Gift Box",
    description: "Perfect for corporate gifting",
    items: "12 Premium Brownies + Branded Packaging",
    price: "₹1499",
    image: brownieGiftbox,
  },
];

const Offers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-gold font-medium mb-4">
              Special Deals
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Irresistible <span className="text-gradient-gold">Offers</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Save big on your favorite brownies with our exclusive deals and combo offers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Launch Offers Section */}
      <section className="py-24 bg-background">
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
              Limited Time
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl font-bold text-foreground"
            >
              Launch <span className="text-gradient-gold">Offers</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {launchOffers.map((offer, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative bg-card p-8 rounded-2xl shadow-soft border-2 border-gold/20 hover:border-gold/50 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6">
                  <offer.icon className="w-8 h-8 text-chocolate-dark" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {offer.description}
                </p>
                <div className="inline-block px-4 py-2 bg-secondary rounded-lg mb-4">
                  <code className="font-mono font-bold text-gold">{offer.code}</code>
                </div>
                <p className="text-sm text-muted-foreground">
                  {offer.validTill}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Combo Boxes Section */}
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
              Value Packs
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl font-bold text-foreground"
            >
              Combo <span className="text-gradient-gold">Boxes</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
            >
              More brownies, more savings! Our combo boxes are perfect for sharing
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {comboBoxes.map((combo, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {combo.bestseller && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-gold text-chocolate-dark text-xs font-semibold rounded-full">
                      Bestseller
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full">
                    {combo.savings}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {combo.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {combo.items}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-gold">
                      {combo.offerPrice}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {combo.originalPrice}
                    </span>
                  </div>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/order">Order Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gift Boxes Section */}
      <section className="py-24 bg-background">
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
              Perfect for Gifting
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl font-bold text-foreground"
            >
              Gift <span className="text-gradient-gold">Boxes</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
            >
              Make someone's day special with our beautifully packaged gift boxes
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {giftBoxes.map((gift, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border-2 border-transparent hover:border-gold/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Gift className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {gift.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-2">
                    {gift.description}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {gift.items}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">
                      {gift.price}
                    </span>
                    <Button variant="gold" size="sm" asChild>
                      <Link to="/order">Order</Link>
                    </Button>
                  </div>
                </div>
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
              Don't Miss Out on These <span className="text-gradient-gold">Sweet Deals!</span>
            </h2>
            <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              Order now and save on your favorite brownies
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/order">Order Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Offers;