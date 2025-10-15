import Search from "../Search/Search"

const TopBar = () => {
  return(
    <section className="w-screen h-1/10 bg-red-50 flex justify-end items-center py-5">
      <Search />
      <div className="w-1/4 text-right px-10">
        <button className="m-2">Notifications</button>
        <button className="m-2">User Profile</button>
      </div>
    </section>
  )
}

export default TopBar;