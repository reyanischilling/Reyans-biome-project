import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Navigation />
      <div className="pt-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Navigation Component Preview</h1>
          <p>The navigation bar will become transparent when scrolling and includes mobile responsiveness.</p>
        </div>
      </div>
    </div>
  );
}