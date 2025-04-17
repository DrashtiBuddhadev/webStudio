import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 relative inline-block">
            <span className="text-[150px] md:text-[200px] font-bold opacity-10 text-pastel-blue">
              404
            </span>
            <h1 className="font-newsreader text-4xl md:text-6xl font-semibold absolute inset-0 flex items-center justify-center">
              Page Not Found
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. The page might have been moved or deleted.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
