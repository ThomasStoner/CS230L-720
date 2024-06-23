export default function Navbar() {
    return <nav className="nav" class="navbar navbar-light bg-dark">
        <flex-box>
            <tr>
                <td>
                    <span class="navbar-brand mb-0 h1 text-white">Navbar</span>
                </td>
                `<td>
                        <span class="navbar-brand mb-0 h1 text-white">Home</span>
                        <span class="navbar-brand mb-0 h1 text-white">Info</span>
                        <span class="navbar-brand mb-0 h1 text-white">Contact</span>
                        <span class="navbar-brand mb-0 h1 text-white">Details</span>
                </td>
            </tr>
        </flex-box>
        <flex-box>
                <td>
                    <div class="d-flex flex-row-reverse">
                        <form class="form-inline">                     
                            
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                           
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            
                        </form>
                    </div>
                </td>
        </flex-box>

    </nav>;

}