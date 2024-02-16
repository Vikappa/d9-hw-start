import logo from '../assets/logo/logo.png'

function SideBar() {
  return (
<div className='bg-black col-2 m-0 d-flex flex-column sideBar justify-content-between'>
<div className="upperSideBar">
<img src={logo} alt={"logo"}></img>
<p>Home</p>
<p>Your Library</p>
</div>
<div className="lowerSideBar d-flex flex-column">
<button>Sign Up</button>
<button>Login</button>
<span>Cookie Policy | Privacy</span>
</div>
</div>

  );
}

export default SideBar;