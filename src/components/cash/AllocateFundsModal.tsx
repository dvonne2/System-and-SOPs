import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AllocateFundsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "ads" | "inventory";
  currentBalance: number;
}

export const AllocateFundsModal = ({ open, onOpenChange, type, currentBalance }: AllocateFundsModalProps) => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState<Date>();
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !name) {
      toast.error("Please fill in all required fields");
      return;
    }

    const amountNum = parseFloat(amount);
    if (amountNum <= 0) {
      toast.error("Amount must be greater than 0");
      return;
    }

    if (amountNum > currentBalance) {
      toast.error("Cannot allocate more than current balance");
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with your Node.js backend API call
      const response = await fetch("/api/allocations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          allocation_type: type,
          allocated_amount: amountNum,
          remaining_amount: amountNum,
          [type === "ads" ? "campaign_name" : "supplier"]: name,
          [type === "ads" ? "duration" : "expected_delivery"]: date?.toISOString(),
          notes,
        }),
      });

      if (!response.ok) throw new Error("Failed to allocate funds");

      toast.success(`Funds allocated to ${type === "ads" ? "Ads" : "Inventory"} successfully`);
      
      // Reset form
      setAmount("");
      setName("");
      setDate(undefined);
      setNotes("");
      onOpenChange(false);

      // TODO: Trigger dashboard refresh
      
    } catch (error) {
      toast.error("Failed to allocate funds");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            Allocate Funds for {type === "ads" ? "Ads" : "Inventory"}
          </DialogTitle>
          <DialogDescription>
            Current balance: ₦{currentBalance.toLocaleString()}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount to Allocate (₦) *</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            {amount && parseFloat(amount) > currentBalance && (
              <p className="text-sm text-destructive">
                Exceeds current balance
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">
              {type === "ads" ? "Campaign Name" : "Supplier"} *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder={type === "ads" ? "Enter campaign name" : "Enter supplier name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>
              {type === "ads" ? "Campaign End Date" : "Expected Delivery Date"}
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">
              {type === "ads" ? "Notes (Optional)" : "Items Description"}
            </Label>
            <Textarea
              id="notes"
              placeholder="Enter additional details..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading || parseFloat(amount) > currentBalance}>
              {loading ? "Allocating..." : "Allocate Funds"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
