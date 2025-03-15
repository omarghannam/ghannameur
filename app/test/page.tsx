export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">Test API Endpoint</h2>
              <p className="text-gray-600">
                Visit <a href="/api/test" className="text-blue-500 hover:text-blue-600 underline">/api/test</a> to test the database connection
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Environment Variables</h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>NEXTAUTH_URL: {process.env.NEXTAUTH_URL}</li>
                <li>NODE_ENV: {process.env.NODE_ENV}</li>
                <li>Database Connection: {process.env.DATABASE_URL ? 'Configured' : 'Not Configured'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 