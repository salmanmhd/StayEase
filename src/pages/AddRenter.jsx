import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import NavBar from "../components/NavBar";

export default function AddRenter() {
  const [formData, setFormData] = useState({
    roomType: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    emergencyContact: "",
    permanentAddress: "",
    mobileNumber: "",
    parentMobileNumber: "",
    currentRole: "",
    medicalIssues: "",
    allotedRoom: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="container mx-auto px-4 py-24">
        <Card className="mx-auto max-w-2xl border-indigo-900/50 bg-indigo-950/30">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold tracking-tight text-indigo-100">
              Add New Renter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 text-indigo-50">
              <div className="space-y-2">
                <Label htmlFor="roomType">Room Type</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("roomType", value)
                  }
                >
                  <SelectTrigger className="border-indigo-900 bg-indigo-950/50 text-gray-200">
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="double">Double</SelectItem>
                    <SelectItem value="triple">Triple</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-indigo-900 bg-indigo-950/50 text-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border-indigo-900 bg-indigo-950/50 text-gray-200"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherName">Father&apos;s Name</Label>
                <Input
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  className="border-indigo-900 bg-indigo-950/50 text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyContact">
                  Emergency Contact Number
                </Label>
                <Input
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  className="border-indigo-900 bg-indigo-950/50 text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="permanentAddress">Permanent Address</Label>
                <Textarea
                  id="permanentAddress"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleInputChange}
                  className="border-indigo-900 bg-indigo-950/50 text-gray-200"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="mobileNumber">Mobile Number</Label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="border-indigo-900 bg-indigo-950/50 text-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentMobileNumber">
                    Parent&apos;s Mobile Number
                  </Label>
                  <Input
                    id="parentMobileNumber"
                    name="parentMobileNumber"
                    value={formData.parentMobileNumber}
                    onChange={handleInputChange}
                    className="border-indigo-900 bg-indigo-950/50 text-gray-200"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentRole">Current Role</Label>
                <Input
                  id="currentRole"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleInputChange}
                  placeholder="e.g., Student, Working Professional"
                  className="border-indigo-900 bg-indigo-950/50 text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medicalIssues">Any Medical Issues?</Label>
                <Textarea
                  id="medicalIssues"
                  name="medicalIssues"
                  value={formData.medicalIssues}
                  onChange={handleInputChange}
                  className="border-indigo-900 bg-indigo-950/50 text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="allotedRoom">Alloted Room</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("allotedRoom", value)
                  }
                >
                  <SelectTrigger className="border-indigo-900 bg-indigo-950/50 text-gray-200">
                    <SelectValue placeholder="Select alloted room" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A101">A101</SelectItem>
                    <SelectItem value="A102">A102</SelectItem>
                    <SelectItem value="B201">B201</SelectItem>
                    <SelectItem value="B202">B202</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full bg-indigo-700 text-indigo-100 hover:bg-indigo-600"
              >
                Add Renter
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
