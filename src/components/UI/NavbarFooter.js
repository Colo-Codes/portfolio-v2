const NavbarFooter = props => {
    return (
        <nav>
            <ul class='flex flex-col'>
                <li><a href='#section-projects' class='btn btn-ghost mb-2'>Projects</a> </li>
                {/* <li><a href='#section-code-library' class='btn btn-ghost mb-2'>Code Library</a> </li> */}
                <li><a href='#section-blog-posts' class='btn btn-ghost mb-2'>Blog Posts</a> </li>
                <li><a href='#section-about' class='btn btn-ghost mb-2'>About</a> </li>
                <li><a href='#section-contact' class='btn btn-ghost'>Contact</a> </li>
            </ul>
        </nav>
    );
};

export default NavbarFooter;