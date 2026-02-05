import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import brownieClassic from "@/assets/brownie-classic.jpg";
import brownieCaramel from "@/assets/brownie-caramel.jpg";
import brownieLoaded from "@/assets/brownie-loaded.jpg";
import brownieRedvelvet from "@/assets/brownie-redvelvet.jpg";
import brownieVegan from "@/assets/brownie-vegan.jpg";

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

const menuCategories = [
  {
    name: "Classic Brownies",
    description: "Our timeless favorites that started it all",
    items: [
      {
        name: "Classic Fudge Brownie",
        description: "Rich, dense chocolate brownie with a fudgy center",
        price: "₹100",
        image: brownieClassic,
      },
      {
        name: "Walnut Brownie",
        description: "Classic brownie loaded with crunchy walnuts",
        price: "₹120",
        image: brownieClassic,
      },
      {
        name: "Double Chocolate",
        description: "Intensely chocolatey with chocolate chips",
        price: "₹110",
        image: brownieClassic,
      },
    ],
  },
  {
    name: "Signature Brownies",
    description: "Our chef's special creations",
    items: [
      {
        name: "Salted Caramel Bliss",
        description: "Topped with homemade salted caramel and sea salt flakes",
        price: "₹150",
        image: brownieCaramel,
      },
      {
        name: "Nutella Swirl",
        description: "Marbled with creamy Nutella throughout",
        price: "₹140",
        image: brownieClassic,
      },
      {
        name: "Peanut Butter Dream",
        description: "Swirled with smooth peanut butter",
        price: "₹145",
        image: brownieCaramel,
      },
    ],
  },
  {
    name: "Premium Loaded Brownies",
    description: "Indulgent toppings for the ultimate experience",
    items: [
      {
        name: "Oreo Overload",
        description: "Loaded with Oreo cookies and white chocolate chips",
        price: "₹160",
        image: brownieLoaded,
      },
      {
        name: "KitKat Crunch",
        description: "Topped with KitKat pieces and chocolate drizzle",
        price: "₹165",
        image: brownieLoaded,
      },
      {
        name: "Brownie Sundae",
        description: "Topped with ice cream, nuts, and chocolate sauce",
        price: "₹180",
        image: brownieLoaded,
      },
    ],
  },
  {
    name: "Special Flavors",
    description: "Unique creations for adventurous taste buds",
    items: [
      {
        name: "Red Velvet Dream",
        description: "Red velvet brownie with cream cheese swirl",
        price: "₹140",
        image: brownieRedvelvet,
      },
      {
        name: "Matcha Fusion",
        description: "Japanese matcha infused dark chocolate brownie",
        price: "₹155",
        image: brownieVegan,
      },
      {
        name: "Espresso Shot",
        description: "Coffee lovers delight with espresso kick",
        price: "₹145",
        image: brownieClassic,
      },
    ],
  },
  {
    name: "Eggless & Vegan",
    description: "Delicious options for everyone",
    items: [
      {
        name: "Eggless Classic",
        description: "Our signature brownie, completely egg-free",
        price: "₹110",
        image: brownieVegan,
        isVegan: true,
      },
      {
        name: "Vegan Dark Chocolate",
        description: "100% plant-based with dark chocolate",
        price: "₹130",
        image: brownieVegan,
        isVegan: true,
      },
      {
        name: "Eggless Walnut",
        description: "Egg-free version of our popular walnut brownie",
        price: "₹125",
        image: brownieVegan,
        isVegan: true,
      },
    ],
  },
];

const Menu = () => {
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
              Our Menu
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Brownie <span className="text-gradient-gold">Collection</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our handcrafted selection of premium brownies, 
              each made with love and the finest ingredients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 0 ? "bg-background" : "bg-gradient-cream"}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3"
              >
                {category.name}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground text-lg"
              >
                {category.description}
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  variants={fadeInUp}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {"isVegan" in item && item.isVegan && (
                      <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                        <Leaf size={12} />
                        Vegan
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gold">
                        {item.price}
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
      ))}

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
              Can't Decide? Try Our <span className="text-gradient-gold">Assorted Box!</span>
            </h2>
            <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a mix of our bestsellers and discover your new favorite
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/offers">View Combo Offers</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;