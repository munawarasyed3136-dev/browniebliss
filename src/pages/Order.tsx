import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, Trash2, CheckCircle, User, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import brownieClassic from "@/assets/brownie-classic.jpg";
import brownieCaramel from "@/assets/brownie-caramel.jpg";
import brownieLoaded from "@/assets/brownie-loaded.jpg";
import brownieRedvelvet from "@/assets/brownie-redvelvet.jpg";
import brownieVegan from "@/assets/brownie-vegan.jpg";
import brownieWalnut from "@/assets/brownie-walnut.jpg";
import { toast } from "@/hooks/use-toast";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const products = [
  { id: 1, name: "Classic Fudge Brownie", price: 100, image: brownieClassic },
  { id: 2, name: "Walnut Brownie", price: 120, image: brownieWalnut },
  { id: 3, name: "Salted Caramel Bliss", price: 150, image: brownieCaramel },
  { id: 4, name: "Oreo Overload", price: 160, image: brownieLoaded },
  { id: 5, name: "Red Velvet Dream", price: 140, image: brownieRedvelvet },
  { id: 6, name: "Vegan Dark Chocolate", price: 130, image: brownieVegan },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Order = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [authForm, setAuthForm] = useState({ name: "", email: "", password: "" });
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: "",
    notes: "",
  });

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast({ title: "Added to cart", description: `${product.name} added to your cart` });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item)
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === "signup" && !authForm.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return;
    }
    if (!authForm.email.trim() || !authForm.password.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setIsLoggedIn(true);
    setShowLogin(false);
    setAuthForm({ name: "", email: "", password: "" });
    toast({
      title: authMode === "signin" ? "Welcome back!" : "Account created!",
      description: "You can now place your order.",
    });
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast({ title: "Cart is empty", description: "Please add items to your cart before ordering", variant: "destructive" });
      return;
    }

    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }

    if (!customerInfo.name.trim() || !customerInfo.address.trim()) {
      toast({ title: "Missing information", description: "Please fill in your name and address", variant: "destructive" });
      return;
    }

    setShowOrderSuccess(true);
    setCart([]);
    setCustomerInfo({ name: "", address: "", notes: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-gold font-medium mb-4">Quick Order</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Order <span className="text-gradient-gold">Now</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select your favorite brownies and we'll have them freshly baked for you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Products Grid */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Select Your Brownies</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.animate}
                    viewport={{ once: true }}
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <div className="overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-foreground mb-2 text-sm">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gold">₹{product.price}</span>
                        <Button variant="gold" size="sm" onClick={() => addToCart(product)}>
                          <Plus size={16} /> Add
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cart Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-2xl shadow-medium p-6">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingCart className="w-6 h-6 text-gold" />
                  <h2 className="font-display text-xl font-bold text-foreground">Your Cart</h2>
                </div>

                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Your cart is empty. Add some delicious brownies!</p>
                ) : (
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-3 bg-secondary rounded-xl">
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-sm truncate">{item.name}</p>
                          <p className="text-gold font-bold">₹{item.price * item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                            <Plus size={14} />
                          </button>
                          <button onClick={() => removeFromCart(item.id)} className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors text-destructive">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Total */}
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-foreground">Total</span>
                    <span className="text-2xl font-bold text-gold">₹{totalAmount}</span>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="space-y-4 mb-6">
                  <Input
                    placeholder="Your Name *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  />
                  <Textarea
                    placeholder="Delivery Address *"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                  />
                  <Textarea
                    placeholder="Special Instructions (optional)"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                  />
                </div>

                {/* Order Button */}
                <Button variant="hero" size="xl" className="w-full" onClick={handlePlaceOrder}>
                  <ShoppingCart size={20} />
                  Place Order
                </Button>

                {isLoggedIn && (
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    ✓ You are logged in
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl shadow-medium p-8 w-full max-w-md relative"
          >
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-xl font-bold"
            >
              ✕
            </button>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
              {authMode === "signin" ? "Sign In" : "Create Account"}
            </h2>
            <p className="text-muted-foreground text-sm text-center mb-6">
              Please sign in to place your order
            </p>

            <div className="flex rounded-xl bg-secondary p-1 mb-6">
              <button
                onClick={() => setAuthMode("signin")}
                className={`flex-1 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm ${
                  authMode === "signin" ? "bg-gradient-gold text-chocolate-dark shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setAuthMode("signup")}
                className={`flex-1 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm ${
                  authMode === "signup" ? "bg-gradient-gold text-chocolate-dark shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authMode === "signup" && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Your full name" value={authForm.name} onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })} className="pl-10" />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input type="email" placeholder="you@example.com" value={authForm.email} onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })} className="pl-10" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input type="password" placeholder="••••••••" value={authForm.password} onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })} className="pl-10" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                {authMode === "signin" ? "Sign In & Continue" : "Create Account & Continue"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-4">
              {authMode === "signin" ? (
                <>Don't have an account?{" "}<button onClick={() => setAuthMode("signup")} className="text-gold font-medium hover:underline">Sign Up</button></>
              ) : (
                <>Already have an account?{" "}<button onClick={() => setAuthMode("signin")} className="text-gold font-medium hover:underline">Sign In</button></>
              )}
            </p>
          </motion.div>
        </div>
      )}

      {/* Order Success Modal */}
      {showOrderSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl shadow-medium p-8 w-full max-w-sm text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-chocolate-dark" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              Order Placed Successfully!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you for your order. We'll have your brownies freshly baked and delivered soon!
            </p>
            <Button variant="hero" size="lg" onClick={() => setShowOrderSuccess(false)}>
              Continue Shopping
            </Button>
          </motion.div>
        </div>
      )}
    </Layout>
  );
};

export default Order;
