export default function Titlebar() {
  return (
    <nav className={`bg-slate-700 text-white`}>
      <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
        <div className={`reative flex items-center justify-center h-16`}>
          <div className={`flex flex-1 items-center justify-center sm:items-stretch sm:justify-start`} >
            <h1 className="font-mono">Tracker</h1>
          </div>
          <div className={` hidden sm:block absolute inset-y-0  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`} >
            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}
