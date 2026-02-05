import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, Trash2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import brownieClassic from "@/assets/brownie-classic.jpg";
import brownieCaramel from "@/assets/brownie-caramel.jpg";
import brownieLoaded from "@/assets/brownie-loaded.jpg";
import brownieRedvelvet from "@/assets/brownie-redvelvet.jpg";
import brownieVegan from "@/assets/brownie-vegan.jpg";
import { toast } from "@/hooks/use-toast";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const products = [
  { id: 1, name: "Classic Fudge Brownie", price: 100, image: brownieClassic },
  { id: 2, name: "Walnut Brownie", price: 120, image: brownieClassic },
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
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart`,
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before ordering",
        variant: "destructive",
      });
      return;
    }

    if (!customerInfo.name.trim() || !customerInfo.phone.trim() || !customerInfo.address.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in your name, phone, and address",
        variant: "destructive",
      });
      return;
    }

    const orderDetails = cart
      .map((item) => `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
      .join("\n");

    const message = `🍫 *New Brownie Order*\n\n*Order Details:*\n${orderDetails}\n\n*Total: ₹${totalAmount}*\n\n*Customer Details:*\nName: ${customerInfo.name}\nPhone: ${customerInfo.phone}\nAddress: ${customerInfo.address}${customerInfo.notes ? `\nNotes: ${customerInfo.notes}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-gold font-medium mb-4">
              Quick Order
            </span>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Select Your Brownies
              </h2>
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
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-foreground mb-2 text-sm">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gold">
                          ₹{product.price}
                        </span>
                        <Button
                          variant="gold"
                          size="sm"
                          onClick={() => addToCart(product)}
                        >
                          <Plus size={16} />
                          Add
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
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Your Cart
                  </h2>
                </div>

                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    Your cart is empty. Add some delicious brownies!
                  </p>
                ) : (
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-3 bg-secondary rounded-xl"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-sm truncate">
                            {item.name}
                          </p>
                          <p className="text-gold font-bold">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors text-destructive"
                          >
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
                    <span className="text-lg font-medium text-foreground">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-gold">
                      ₹{totalAmount}
                    </span>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="space-y-4 mb-6">
                  <Input
                    placeholder="Your Name *"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Phone Number *"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, phone: e.target.value })
                    }
                  />
                  <Textarea
                    placeholder="Delivery Address *"
                    value={customerInfo.address}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, address: e.target.value })
                    }
                  />
                  <Textarea
                    placeholder="Special Instructions (optional)"
                    value={customerInfo.notes}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, notes: e.target.value })
                    }
                  />
                </div>

                {/* Order Button */}
                <Button
                  variant="whatsapp"
                  size="xl"
                  className="w-full"
                  onClick={handleWhatsAppOrder}
                >
                  <Phone size={20} />
                  Order via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  You'll be redirected to WhatsApp to confirm your order
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;