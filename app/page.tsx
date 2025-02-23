'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, ShieldAlert, Cloud, Download } from 'lucide-react';
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">HunBlock</span>
          </motion.div>
          <ThemeToggle />
        </div>
      </nav>

      <main>
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Biztonságos böngészés,{' '}
              <span className="text-primary">reklámok nélkül</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              A HunBlock segítségével blokkolhatod a kéretlen reklámokat,
              trackereket és növelheted az online biztonságodat.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center gap-4"
            >
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" /> Letöltés
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Tudj meg többet
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <Card>
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Fejlett védelem</CardTitle>
                  <CardDescription>
                    Blokkolja a kártékony tartalmakat és trackereket
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Védje magát a rosszindulatú programoktól és a követéstől
                  személyre szabott szűrőlistáinkkal.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Cloud className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Cloudflare DNS</CardTitle>
                  <CardDescription>
                    Gyors és biztonságos DNS-szolgáltatás
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  A Cloudflare DNS használatával gyorsabb és biztonságosabb
                  böngészési élményben lehet része.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <ShieldAlert className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Pi-hole integráció</CardTitle>
                  <CardDescription>
                    Hálózati szintű reklámblokkolás
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Használja a Pi-hole-t a HunBlock listáival a teljes hálózati
                  védelem érdekében.
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Válassza ki az Önnek megfelelő megoldást
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Funkció</TableHead>
                  <TableHead>Alap Lista</TableHead>
                  <TableHead>Pi-hole Lista</TableHead>
                  <TableHead>Teljes Védelem</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Reklámblokkolás</TableCell>
                  <TableCell>✓</TableCell>
                  <TableCell>✓</TableCell>
                  <TableCell>✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tracker blokkolás</TableCell>
                  <TableCell>✓</TableCell>
                  <TableCell>✓</TableCell>
                  <TableCell>✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pi-hole kompatibilitás</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>✓</TableCell>
                  <TableCell>✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cloudflare DNS</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Személyre szabás</TableCell>
                  <TableCell>Alap</TableCell>
                  <TableCell>Haladó</TableCell>
                  <TableCell>Teljes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 HunBlock. Minden jog fenntartva.</p>
        </div>
      </footer>
    </div>
  );
}