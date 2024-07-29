import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [endpoint, setEndpoint] = useState("");
  const [monitorDataLayer, setMonitorDataLayer] = useState(false);
  const [customer, setCustomer] = useState("");

  const handleReset = () => {
    setEndpoint("");
    setMonitorDataLayer(false);
    setCustomer("");
    // Reset other state variables here
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <Input
          placeholder="Endpoint (e.g., hw-red-panda-123456)"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />
        <div className="flex items-center space-x-2">
          <Checkbox
            id="monitorDataLayer"
            checked={monitorDataLayer}
            onCheckedChange={setMonitorDataLayer}
          />
          <label htmlFor="monitorDataLayer">Monitor DataLayer</label>
        </div>
        <Input
          placeholder="Customer"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
      </div>
      
      {/* Product Information */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Discount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>SKU-4577-736 Sneakers</TableCell>
            <TableCell>1</TableCell>
            <TableCell>123456</TableCell>
            <TableCell>4568</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* Transaction Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Input placeholder="Shipping" />
        <Input placeholder="Handling" />
        <Input placeholder="Payment" />
        <Input placeholder="Other Discounts" />
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-2 gap-4">
        <Input placeholder="Revenue" />
        <Input placeholder="Cost" />
      </div>

      {/* Transaction Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Shipping Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="airmee">AIRMEE</SelectItem>
            {/* Add more shipping options */}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Handling Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">DEFAULT</SelectItem>
            {/* Add more handling options */}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Payment Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="klarna">KLARNA</SelectItem>
            {/* Add more payment options */}
          </SelectContent>
        </Select>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <Button onClick={handleReset}>Reset</Button>
        <Button>Predict</Button>
      </div>
    </div>
  );
};

export default Index;
