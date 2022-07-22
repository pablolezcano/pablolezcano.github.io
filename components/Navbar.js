import Link from "next/link"

const Navbar = () => (

<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
      <Link  href="/">
      <a class="navbar-brand">Pablo Lezcano</a>
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          
          <li class="nav-item">
           <Link href="/blog">
           <a class="nav-link" >Blog</a>
           </Link>
          </li>
          <li class="nav-item">
           <Link href="/github">
           <a class="nav-link" >GitHub</a>
           </Link>
          </li>
          <li class="nav-item">
           <Link href="/cv">
           <a class="nav-link" >CV</a>
           </Link>
          </li>
        </ul>
      </div>
    </div>
</nav>

)
export default Navbar