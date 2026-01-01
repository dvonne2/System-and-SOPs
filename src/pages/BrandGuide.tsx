import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Copy, Download, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const BrandGuide = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(label);
    toast.success(`Copied ${label} to clipboard`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    { name: 'Navy Blue', hex: '#1e3a5f', hsl: '213 52% 24%', usage: 'Logo, secondary buttons, headers', variable: '--sf-navy' },
    { name: 'Orange', hex: '#f97316', hsl: '25 95% 53%', usage: 'Primary CTA, accents, highlights', variable: '--sf-orange' },
    { name: 'Dark Navy', hex: '#0f172a', hsl: '222 47% 11%', usage: 'Headings, dark backgrounds', variable: '--sf-dark-navy' },
    { name: 'Light Gray', hex: '#f8fafc', hsl: '210 40% 98%', usage: 'Page backgrounds', variable: '--sf-light-gray' },
  ];

  const secondaryColors = [
    { name: 'Success Green', hex: '#22c55e', hsl: '145 63% 42%', usage: 'Success states, confirmations' },
    { name: 'Error Red', hex: '#ef4444', hsl: '0 84% 60%', usage: 'Errors, destructive actions' },
    { name: 'Warning Amber', hex: '#f59e0b', hsl: '38 92% 50%', usage: 'Warnings, alerts' },
    { name: 'Muted Gray', hex: '#64748b', hsl: '213 30% 40%', usage: 'Secondary text, placeholders' },
  ];

  const typography = [
    { level: 'H1', font: 'Space Grotesk', weight: '700', size: '48px', lineHeight: '1.1', example: 'Main Page Title' },
    { level: 'H2', font: 'Space Grotesk', weight: '700', size: '32px', lineHeight: '1.2', example: 'Section Heading' },
    { level: 'H3', font: 'Space Grotesk', weight: '500', size: '24px', lineHeight: '1.3', example: 'Subsection Title' },
    { level: 'H4', font: 'Space Grotesk', weight: '500', size: '20px', lineHeight: '1.4', example: 'Card Header' },
    { level: 'Body Large', font: 'DM Sans', weight: '400', size: '18px', lineHeight: '1.6', example: 'Featured paragraph text for important content.' },
    { level: 'Body', font: 'DM Sans', weight: '400', size: '16px', lineHeight: '1.6', example: 'Regular paragraph text used throughout the interface.' },
    { level: 'Body Small', font: 'DM Sans', weight: '400', size: '14px', lineHeight: '1.5', example: 'Smaller text for captions and secondary content.' },
    { level: 'Caption', font: 'DM Sans', weight: '500', size: '12px', lineHeight: '1.4', example: 'LABEL TEXT' },
  ];

  const spacing = [
    { name: 'xs', value: '4px', tailwind: 'p-1' },
    { name: 'sm', value: '8px', tailwind: 'p-2' },
    { name: 'md', value: '16px', tailwind: 'p-4' },
    { name: 'lg', value: '24px', tailwind: 'p-6' },
    { name: 'xl', value: '32px', tailwind: 'p-8' },
    { name: '2xl', value: '48px', tailwind: 'p-12' },
    { name: '3xl', value: '64px', tailwind: 'p-16' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap');
      `}</style>

      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-bold text-foreground" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              SystemForce Brand Guide
            </h1>
          </div>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Logo Section */}
        <section id="logo">
          <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Logo
          </h2>
          <p className="text-muted-foreground mb-8">
            The SystemForce logo combines a shield icon with modern typography to convey security and reliability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Primary Logo - Light Background */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Primary Logo (Light Background)</CardTitle>
              </CardHeader>
              <CardContent className="bg-background border border-border rounded-lg p-12 flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#1e3a5f" stroke="white" strokeWidth="1.5"/>
                      <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-[#1e3a5f]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                      SystemForce<span className="text-slate-400 font-medium text-base ml-1">ERP</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Primary Logo - Dark Background */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Primary Logo (Dark Background)</CardTitle>
              </CardHeader>
              <CardContent className="bg-[#0f172a] rounded-lg p-12 flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl flex items-center justify-center border border-white/10">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#1e3a5f" stroke="white" strokeWidth="1.5"/>
                      <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                      SystemForce<span className="text-slate-400 font-medium text-base ml-1">ERP</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Icon Only */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Icon Only (App Icon / Favicon)</CardTitle>
              </CardHeader>
              <CardContent className="bg-muted rounded-lg p-12 flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-2xl flex items-center justify-center mx-auto mb-2">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#1e3a5f" stroke="white" strokeWidth="1.5"/>
                      <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">64px</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl flex items-center justify-center mx-auto mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#1e3a5f" stroke="white" strokeWidth="1.5"/>
                      <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">40px</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#1e3a5f" stroke="white" strokeWidth="2"/>
                      <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">32px (min)</span>
                </div>
              </CardContent>
            </Card>

            {/* Clear Space */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Clear Space & Don'ts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-6">
                  <div className="border-2 border-dashed border-primary/30 p-4 inline-flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#1e3a5f" stroke="white" strokeWidth="1.5"/>
                        <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="font-bold text-lg text-[#1e3a5f]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>SystemForce</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Minimum clear space = height of icon</p>
                </div>
                <div className="text-sm space-y-1">
                  <p className="text-destructive">✗ Don't stretch or distort</p>
                  <p className="text-destructive">✗ Don't change colors arbitrarily</p>
                  <p className="text-destructive">✗ Don't add effects or shadows</p>
                  <p className="text-destructive">✗ Don't use below 32px</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Colors Section */}
        <section id="colors">
          <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Color Palette
          </h2>
          <p className="text-muted-foreground mb-8">
            Click any color to copy its hex value to clipboard.
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-4">Primary Colors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {colors.map((color) => (
              <Card 
                key={color.name} 
                className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
                onClick={() => copyToClipboard(color.hex, color.name)}
              >
                <div 
                  className="h-24 flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                >
                  {copiedColor === color.name ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <Copy className="w-5 h-5 text-white/70" />
                  )}
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground">{color.name}</h4>
                  <p className="text-sm font-mono text-muted-foreground">{color.hex}</p>
                  <p className="text-sm font-mono text-muted-foreground">HSL: {color.hsl}</p>
                  <p className="text-xs text-muted-foreground mt-2">{color.usage}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-4">Secondary / UI Colors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {secondaryColors.map((color) => (
              <Card 
                key={color.name} 
                className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
                onClick={() => copyToClipboard(color.hex, color.name)}
              >
                <div 
                  className="h-16 flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                >
                  {copiedColor === color.name ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/70" />
                  )}
                </div>
                <CardContent className="p-3">
                  <h4 className="font-medium text-foreground text-sm">{color.name}</h4>
                  <p className="text-xs font-mono text-muted-foreground">{color.hex}</p>
                  <p className="text-xs text-muted-foreground mt-1">{color.usage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section id="typography">
          <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Typography
          </h2>
          <p className="text-muted-foreground mb-8">
            We use Space Grotesk for headings and DM Sans for body text.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Headings</p>
                <p className="text-4xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  Space Grotesk
                </p>
                <p className="text-sm text-muted-foreground mt-2">Weights: 500 (Medium), 700 (Bold)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Body Text</p>
                <p className="text-4xl font-bold" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                  DM Sans
                </p>
                <p className="text-sm text-muted-foreground mt-2">Weights: 400 (Regular), 500 (Medium), 700 (Bold)</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6 space-y-6">
              {typography.map((type) => (
                <div key={type.level} className="flex flex-col md:flex-row md:items-center gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="w-32 shrink-0">
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">{type.level}</span>
                  </div>
                  <div className="flex-1">
                    <p 
                      style={{ 
                        fontFamily: type.font === 'Space Grotesk' ? '"Space Grotesk", sans-serif' : '"DM Sans", sans-serif',
                        fontWeight: type.weight,
                        fontSize: type.size,
                        lineHeight: type.lineHeight
                      }}
                    >
                      {type.example}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground shrink-0">
                    {type.font} {type.weight} / {type.size}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section id="buttons">
          <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Buttons
          </h2>
          <p className="text-muted-foreground mb-8">
            Button styles for different contexts and actions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Primary CTA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <button 
                  className="w-full px-6 py-3 text-white font-bold rounded-xl transition-all"
                  style={{ 
                    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                    boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)'
                  }}
                >
                  Primary Button
                </button>
                <p className="text-xs text-muted-foreground">
                  Gradient: #f97316 → #ea580c<br/>
                  Border Radius: 12px<br/>
                  Shadow: Orange glow
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Secondary Button</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <button 
                  className="w-full px-6 py-3 font-bold rounded-xl border-2 transition-all"
                  style={{ 
                    backgroundColor: 'transparent',
                    borderColor: '#1e3a5f',
                    color: '#1e3a5f'
                  }}
                >
                  Secondary Button
                </button>
                <p className="text-xs text-muted-foreground">
                  Background: Transparent<br/>
                  Border: 2px solid Navy<br/>
                  Text: Navy Blue
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Outline Button (Light)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  Outline Button
                </Button>
                <p className="text-xs text-muted-foreground">
                  For secondary actions<br/>
                  Uses border color from design system
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Ghost Button</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="ghost" className="w-full">
                  Ghost Button
                </Button>
                <p className="text-xs text-muted-foreground">
                  For tertiary actions<br/>
                  No background, hover reveals
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing Section */}
        <section id="spacing">
          <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Spacing System
          </h2>
          <p className="text-muted-foreground mb-8">
            Based on a 4px grid for consistent spacing throughout the interface.
          </p>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {spacing.map((space) => (
                  <div key={space.name} className="flex items-center gap-4">
                    <div className="w-16 text-sm font-mono text-muted-foreground">{space.name}</div>
                    <div 
                      className="bg-primary h-4 rounded"
                      style={{ width: space.value }}
                    />
                    <div className="text-sm text-foreground">{space.value}</div>
                    <div className="text-sm font-mono text-muted-foreground">{space.tailwind}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Voice & Tone */}
        <section id="voice">
          <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Voice & Tone
          </h2>
          <p className="text-muted-foreground mb-8">
            Guidelines for consistent brand communication.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">✓ Do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Be clear and direct</p>
                <p>• Use action-oriented language</p>
                <p>• Focus on benefits, not features</p>
                <p>• Keep it professional but approachable</p>
                <p>• Use "you" and "your" to speak directly</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-destructive">✗ Don't</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Use jargon or technical terms unnecessarily</p>
                <p>• Be overly formal or stiff</p>
                <p>• Make exaggerated claims</p>
                <p>• Use passive voice</p>
                <p>• Be vague or ambiguous</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Download Section */}
        <section className="bg-gradient-to-br from-secondary to-[#0f172a] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Need the Full Brand Kit?
          </h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Download our complete brand package including logo files, templates, and more.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Brand Kit
          </Button>
        </section>

      </main>
    </div>
  );
};

export default BrandGuide;
