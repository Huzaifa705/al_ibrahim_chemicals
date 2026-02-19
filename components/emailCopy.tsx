import React, { useState } from "react";
import { Copy, Check } from "lucide-react"; // Lucide icons

const EmailCopy = () => {
  const [copied, setCopied] = useState(false);
  const email = "al.ibrahim.group.of.companies@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // 1 second baad wapis copy icon show hoga
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-between gap-4 p-2">
      <div>
        <div className="text-lg font-black text-slate-900">Email Us</div>
        <div className="text-sm font-bold text-slate-500">{email}</div>
      </div>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        title="Copy Email"
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <Copy className="w-5 h-5 text-slate-400" />
        )}
      </button>
    </div>
  );
};

export default EmailCopy;
