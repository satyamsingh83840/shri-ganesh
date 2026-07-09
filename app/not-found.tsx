import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>

        <h2 className="mt-6 text-3xl font-bold">Product Not Found</h2>

        <p className="mt-4 text-muted-foreground">
          The product you're looking for doesn't exist.
        </p>

        <Link href="/products">
          <Button className="mt-8 rounded-full">Back to Products</Button>
        </Link>
      </div>
    </main>
  );
}
