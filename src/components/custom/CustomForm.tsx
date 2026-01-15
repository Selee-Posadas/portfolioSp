import { useRef, useState, type FormEvent } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "../ui/button"; 
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export const CustomForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setStatus("sending");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current?.reset(); 
        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
    >
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-fuchsia-500 rounded-tl-lg" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fuchsia-500 rounded-br-lg" />

      <div className="space-y-6">
        
        <div className="group">
          <label className="block text-xs font-orbitron text-gray-400 mb-2 group-focus-within:text-fuchsia-400 transition-colors">
            IDENTIFIER (NAME)
          </label>
          <input
            type="text"
            name="name" 
            required
            className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-fuchsia-500 focus:bg-black/40 transition-all font-mono placeholder:text-gray-700"
            placeholder="Enter your name..."
          />
        </div>

        <div className="group">
          <label className="block text-xs font-orbitron text-gray-400 mb-2 group-focus-within:text-fuchsia-400 transition-colors">
            RETURN ADDRESS (EMAIL)
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-fuchsia-500 focus:bg-black/40 transition-all font-mono placeholder:text-gray-700"
            placeholder="name@company.com"
          />
        </div>

        <div className="group">
          <label className="block text-xs font-orbitron text-gray-400 mb-2 group-focus-within:text-fuchsia-400 transition-colors">
            DATA PACKET (MESSAGE)
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-fuchsia-500 focus:bg-black/40 transition-all font-mono placeholder:text-gray-700 resize-none"
            placeholder="Initiate communication..."
          />
        </div>

        <Button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className={`
            w-full py-4 rounded-md font-bold font-orbitron tracking-widest flex items-center justify-center gap-2 transition-all
            ${status === "success" ? "bg-green-500/20 text-green-400 border border-green-500/50" : ""}
            ${status === "error" ? "bg-red-500/20 text-red-400 border border-red-500/50" : ""}
            ${status === "idle" ? "bg-fuchsia-600 hover:bg-fuchsia-700 text-white" : ""}
          `}
        >
          {status === "idle" && (<>TRANSMIT MESSAGE <Send size={18} /></>)}
          {status === "sending" && (<><Loader2 size={18} className="animate-spin" /> TRANSMITTING...</>)}
          {status === "success" && (<><CheckCircle2 size={18} /> TRANSMISSION COMPLETE</>)}
          {status === "error" && (<><AlertCircle size={18} /> TRANSMISSION FAILED</>)}
        </Button>
      </div>
    </form>
  );
};