import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Phone, Mail } from "lucide-react";

export default function SahalCo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-200 text-gray-800">
      <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow p-6 flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-white">Sahal & Co</h1>
          <p className="text-sm text-gray-300">Chartered Accountants</p>
        </div>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-300">About</a>
          <a href="#services" className="hover:text-blue-300">Services</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </nav>
      </header>

      <main className="p-8 space-y-16">
        <section id="about" className="text-center max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-black">About Us</h2>
          <p className="text-gray-700 bg-white p-4 rounded-lg shadow">
            Sahal & Co. is a Calicut-based firm of Chartered Accountants that was setup in 2026. With our current team of nine partners and over seventy audit staff & CAs, we serve the business needs of clients of all sizes, in various sectors. Our multi-faceted practice is driven by the need to be seen by each client as valued and trusted advisors rather than an external agency that helps stay within the letter of the law. We are committed to delivering a range of professional solutions tailored to match each client&apos;s needs in the most efficient & cost-effective way. Our membership in a global alliance of professional accountants equips us to serve all cross-border needs of our clients, through associates in over 60 countries worldwide.
          </p>
        </section>

        <section id="services" className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-lg border-l-4 border-blue-500">
            <CardContent className="p-6 text-center">
              <Briefcase className="mx-auto mb-2 text-blue-600" />
              <h3 className="font-bold text-gray-800">Audit & Assurance</h3>
              <p className="text-sm text-gray-600">Statutory audits, internal audits, and risk assurance services.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-l-4 border-green-500">
            <CardContent className="p-6 text-center">
              <Briefcase className="mx-auto mb-2 text-green-600" />
              <h3 className="font-bold text-gray-800">Taxation</h3>
              <p className="text-sm text-gray-600">Direct & indirect tax compliance, planning, and representation.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-l-4 border-purple-500">
            <CardContent className="p-6 text-center">
              <Briefcase className="mx-auto mb-2 text-purple-600" />
              <h3 className="font-bold text-gray-800">Advisory</h3>
              <p className="text-sm text-gray-600">Business advisory, financial consulting, and regulatory compliance.</p>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-black">Contact Us</h2>
          <div className="space-y-2 text-gray-700">
            <p><Phone className="inline mr-1 text-blue-600" /> 9037330226</p>
            <p><Mail className="inline mr-1 text-blue-600" /> partner@sahal&co.com</p>
          </div>
          <Button className="mt-4 bg-black text-white hover:bg-gray-800">Get in Touch</Button>
        </section>
      </main>

      <footer className="bg-black text-center p-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sahal & Co. All rights reserved.
      </footer>
    </div>
  );
}