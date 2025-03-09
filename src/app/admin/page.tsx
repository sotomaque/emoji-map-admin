export default function AdminDashboard() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='bg-white shadow-sm rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>
            Welcome to the Admin Dashboard
          </h2>
          <p className='mb-4'>
            This dashboard is restricted to administrators of the EmojiMap
            organization.
          </p>
          <p className='mb-4'>
            As an admin, you can manage the EmojiMap application, including:
          </p>
          <ul className='list-disc pl-6 mb-4 space-y-2'>
            <li>Managing emoji submissions</li>
            <li>Reviewing user reports</li>
            <li>Configuring application settings</li>
            <li>Viewing analytics and statistics</li>
          </ul>
          <p>
            Use the navigation menu to access different sections of the admin
            dashboard.
          </p>
        </div>
      </main>
    </div>
  );
}
