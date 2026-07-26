import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Admin: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving credentials
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-background pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <div className="border-4 border-border bg-card p-6 md:p-10 shadow-[12px_12px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_rgba(255,255,255,1)]">
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 border-b-4 border-border pb-4 text-foreground">
              Admin Control Panel
            </h1>
            
            <form onSubmit={handleSave} className="space-y-8">
              <div className="space-y-3">
                <label className="block text-sm font-black uppercase tracking-widest text-foreground">
                  Landing Page API Key
                </label>
                <input
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-4 py-4 bg-background text-foreground border-2 border-border focus:outline-none focus:ring-4 focus:ring-primary shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] transition-all font-mono"
                  placeholder="sk_test_..."
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-black uppercase tracking-widest text-foreground">
                  Access Token
                </label>
                <input
                  type="password"
                  value={accessToken}
                  onChange={(e) => setAccessToken(e.target.value)}
                  className="w-full px-4 py-4 bg-background text-foreground border-2 border-border focus:outline-none focus:ring-4 focus:ring-primary shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] transition-all font-mono"
                  placeholder="••••••••••••••••"
                />
              </div>

              <div className="pt-8 border-t-4 border-border border-dashed">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-16 text-lg font-black uppercase tracking-widest rounded-none border-2 border-border shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all"
                >
                  {saved ? 'Credentials Saved!' : 'Save Credentials'}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
