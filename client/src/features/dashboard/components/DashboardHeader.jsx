function DashboardHeader({name}) {
  return (
    <div className="mb-8">
      <p className="text-sm text-muted">
        Good Morning,
      </p>

      <h1 className="mt-1 text-3xl lg:texl-4xl font-bold">
        {name} 👋
      </h1>

      <p className="mt-3 max-w-2xl text-muted">
        Welcome back. Here's a quick overview
        of everything happening across your
        workspace today.
      </p>
    </div>
  );
}

export default DashboardHeader;