'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  Cloud, 
  Download, 
  ChevronRight, 
  ExternalLink,
  Lock,
  Eye,
  Zap,
  Settings,
  CheckCircle2,
  XCircle,
  BarChart3,
  RefreshCw
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [blockedCount, setBlockedCount] = useState(0);

  // Szimuláljuk a blokkolások számának növekedését
  React.useEffect(() => {
    const interval = setInterval(() => {
      setBlockedCount(prev => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const stats = [
    { icon: Eye, label: "Blokkolt követők", value: "2M+" },
    { icon: Lock, label: "Védett eszközök", value: "50K+" },
    { icon: Zap, label: "Gyorsabb betöltés", value: "40%" },
    { icon: Shield, label: "Aktív védelem", value: "24/7" },
  ];

  const threats = [
    "Követő szkriptek",
    "Kártékony reklámok",
    "Adatgyűjtő oldalak",
    "Kriptobányász kódok",
    "Hamis hirdetések",
    "Malware terjesztők"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 gradient-blur opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-blur opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animated-gradient rounded-full opacity-30" />
      </div>

      <nav className="border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="text-2xl font-bold">HunBlock</span>
          </motion.div>
          <ThemeToggle />
        </div>
      </nav>

      <main>
        <section className="py-20 px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto text-center relative z-10"
          >
            <motion.div 
              className="mb-8 text-sm font-medium text-blue-500 dark:text-blue-400 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <RefreshCw className="h-4 w-4 animate-spin" />
              <span>Aktív védelem: {blockedCount} fenyegetés blokkolva</span>
            </motion.div>
            <motion.h1 
              className="text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Biztonságos böngészés,{' '}
              <span className="gradient-text">reklámok nélkül</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A HunBlock segítségével blokkolhatod a kéretlen reklámokat,
              trackereket és növelheted az online biztonságodat.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="gap-2 relative overflow-hidden group w-full sm:w-auto"
                variant="default"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={false}
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <Download className="h-5 w-5" />
                Letöltés
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 glass-card hover:bg-primary/10 w-full sm:w-auto group"
              >
                Tudj meg többet
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Statisztikák szekció */}
        <section className="py-12 bg-primary/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 backdrop-blur-sm relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Fejlett védelem",
                  description: "Blokkolja a kártékony tartalmakat és trackereket",
                  content: "Védje magát a rosszindulatú programoktól és a követéstől személyre szabott szűrőlistáinkkal."
                },
                {
                  icon: Cloud,
                  title: "Cloudflare DNS",
                  description: "Gyors és biztonságos DNS-szolgáltatás",
                  content: "A Cloudflare DNS használatával gyorsabb és biztonságosabb böngészési élményben lehet része."
                },
                {
                  icon: ShieldAlert,
                  title: "Pi-hole integráció",
                  description: "Hálózati szintű reklámblokkolás",
                  content: "Használja a Pi-hole-t a HunBlock listáival a teljes hálózati védelem érdekében."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="h-full"
                  >
                    <Card className="glass-card border-primary/10 transition-all duration-300 hover:border-primary/30 h-full">
                      <CardHeader>
                        <div className="relative">
                          <feature.icon className="h-10 w-10 text-primary mb-4 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                          <motion.div
                            className="absolute inset-0 bg-primary/5 rounded-full"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <CardTitle className="relative z-10">{feature.title}</CardTitle>
                        <CardDescription className="relative z-10">{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">{feature.content}</CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Védelem szekció */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Védelem a gyakori fenyegetések ellen
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {threats.map((threat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-lg"
                >
                  <XCircle className="h-6 w-6 text-red-500" />
                  <span>{threat}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Válassza ki az Önnek megfelelő megoldást
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg overflow-hidden shadow-lg"
            >
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-primary/5">
                    <TableHead>Funkció</TableHead>
                    <TableHead>Alap Lista</TableHead>
                    <TableHead>Pi-hole Lista</TableHead>
                    <TableHead>Teljes Védelem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-primary/5">
                    <TableCell>Reklámblokkolás</TableCell>
                    <TableCell>✓</TableCell>
                    <TableCell>✓</TableCell>
                    <TableCell>✓</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/5">
                    <TableCell>Tracker blokkolás</TableCell>
                    <TableCell>✓</TableCell>
                    <TableCell>✓</TableCell>
                    <TableCell>✓</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/5">
                    <TableCell>Pi-hole kompatibilitás</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>✓</TableCell>
                    <TableCell>✓</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/5">
                    <TableCell>Cloudflare DNS</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>✓</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/5">
                    <TableCell>Személyre szabás</TableCell>
                    <TableCell>Alap</TableCell>
                    <TableCell>Haladó</TableCell>
                    <TableCell>Teljes</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/5">
                    <TableCell>Automatikus frissítések</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>✓</TableCell>
                    <TableCell>✓</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/5">
                    <TableCell>Valós idejű védelem</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>✓</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-primary/5">
                    <TableCell>Teljesítmény optimalizálás</TableCell>
                    <TableCell>Alap</TableCell>
                    <TableCell>Haladó</TableCell>
                    <TableCell>Teljes</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </motion.div>
          </div>
        </section>

        {/* Teljesítmény szekció */}
        <section className="py-20 bg-muted/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Teljesítmény és biztonság
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold mb-4">Gyorsabb betöltés</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>40%-kal gyorsabb oldalbetöltés</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Optimalizált erőforrás-használat</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Csökkentett sávszélesség-használat</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold mb-4">Fokozott biztonság</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Valós idejű fenyegetés-védelem</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Naponta frissülő blokkolási listák</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span>Intelligens adatvédelmi szűrés</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 HunBlock. Minden jog fenntartva.</p>
        </div>
      </footer>
    </div>
  );
}