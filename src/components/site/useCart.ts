import { useCallback, useEffect, useMemo, useState } from "react";

export type CartLine = {
  key: string;
  slug: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
};

const KEY = "ladino-cart-v1";

export function useCart() {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const add = useCallback((line: Omit<CartLine, "key" | "qty">) => {
    const key = `${line.slug}::${line.variant}`;
    setLines((prev) => {
      const found = prev.find((l) => l.key === key);
      if (found) return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { ...line, key, qty: 1 }];
    });
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    setLines((prev) => (qty <= 0 ? prev.filter((l) => l.key !== key) : prev.map((l) => (l.key === key ? { ...l, qty } : l))));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = useMemo(() => lines.reduce((a, l) => a + l.qty, 0), [lines]);
  const total = useMemo(() => lines.reduce((a, l) => a + l.qty * l.price, 0), [lines]);

  return { lines, add, setQty, clear, count, total };
}
