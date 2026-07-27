function ProjectManagement() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10 flex-col lg:flex-row text-center lg:text-left">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">Project Management</h2>
          <p className="text-gray-600 mb-6">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app.
          </p>
          <button className="bg-blue-500 text-white px-5 py-3 rounded-md font-medium">
            Get Started
          </button>
        </div>
        <div className="bg-blue-200 max-w-[420px] h-[280px] rounded-md w-full sm:h-[280px]" />
      </div>
    </section>
  );
}

export default ProjectManagement;