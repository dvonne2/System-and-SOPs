import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface DemoCredentialsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const demoCredentials = [
  { role: 'Admin', email: 'admin@demo.com', password: 'demo1234' },
  { role: 'CEO', email: 'ceo@demo.com', password: 'demo1234' },
  { role: 'General Manager', email: 'gm@demo.com', password: 'demo1234' },
  { role: 'Telesales', email: 'telesales@demo.com', password: 'demo1234' },
  { role: 'Delivery Agent', email: 'da@demo.com', password: 'demo1234' },
  { role: 'Inventory', email: 'inventory@demo.com', password: 'demo1234' },
  { role: 'Logistics', email: 'logistics@demo.com', password: 'demo1234' },
  { role: 'Accountant', email: 'accountant@demo.com', password: 'demo1234' },
  { role: 'Auditor', email: 'auditor@demo.com', password: 'demo1234' },
  { role: 'Marketing', email: 'marketing@demo.com', password: 'demo1234' },
  { role: 'HR', email: 'hr@demo.com', password: 'demo1234' },
];

const DemoCredentialsModal: React.FC<DemoCredentialsModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1e3a5f]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Demo Login Credentials
          </DialogTitle>
          <DialogDescription className="text-slate-500">
            Use any of the credentials below to explore the demo as different roles.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl mb-6 border border-orange-200">
            <p className="text-sm text-orange-800 font-medium">
              🔑 Password for all accounts: <code className="bg-white px-2 py-1 rounded font-mono">demo1234</code>
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
            <div className="grid grid-cols-3 gap-4 p-4 bg-slate-100 border-b border-slate-200 font-semibold text-sm text-slate-600">
              <div>Role</div>
              <div>Email</div>
              <div>Password</div>
            </div>
            
            {demoCredentials.map((cred, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-4 border-b border-slate-100 last:border-b-0 text-sm hover:bg-slate-50 transition-colors"
              >
                <div className="font-medium text-[#1e3a5f]">{cred.role}</div>
                <div className="text-slate-600 font-mono text-xs">{cred.email}</div>
                <div className="text-slate-500 font-mono text-xs">{cred.password}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <a
              href="https://demo.systemforce.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all"
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)',
              }}
            >
              Go to Demo →
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoCredentialsModal;
