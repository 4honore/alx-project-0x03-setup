import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome to Splash App
          </h1>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
            This is an example of how to use the shared layout component. 
            The header and footer will appear on every page that uses this layout.
          </p>
        </div>
      </div>
    </Layout>
  );
}