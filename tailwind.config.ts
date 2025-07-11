import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "Roboto", "Helvetica", "sans-serif"],
      },
      colors: {
        // HealthTrack Brand Colors
        healthtrack: {
          primary: "#2A2E3F",
          secondary: "#5C5F72",
          tertiary: "#777B85",
        },
        // Background Colors
        background: "#FFFFFF",
        surface: {
          DEFAULT: "#F8F9FA",
          light: "#FEFEFE",
          dark: "#F3F4F6",
        },
        // Text Colors
        text: {
          primary: "#2A2E3F",
          secondary: "#717785",
          tertiary: "#6D7585",
          muted: "#9699A1",
          light: "#AEB1B7",
        },
        // Border Colors
        border: {
          DEFAULT: "#E3E5E8",
          light: "#F3F4F6",
          medium: "#D1D5DB",
        },
        // Button Colors
        button: {
          primary: "#1F2937",
          secondary: "#F3F4F6",
        },
        // Chart Colors
        chart: {
          primary: "#374151",
          secondary: "#1F2838",
          accent: "#121729",
        },
        // Status Colors
        status: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#3B82F6",
        },
        // Keep existing shadcn colors for compatibility
        shadcnBorder: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
